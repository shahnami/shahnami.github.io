/**
 * Generate the public GitHub contribution-calendar snapshot used by nami.sh.
 *
 * The official REST API does not expose contributionCalendar. We query the
 * official GitHub GraphQL API in CI, keeping credentials out of the browser.
 *
 * Usage:
 *   GITHUB_TOKEN=... node scripts/generate-github-contributions.mjs
 */
import { mkdir, writeFile, rename } from 'node:fs/promises';
import { resolve } from 'node:path';

const GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';
const USERNAME = process.env.CONTRIBUTIONS_USER || 'shahnami';
const OUTFILE = resolve(process.env.CONTRIBUTIONS_OUT || 'public/data/github-contributions.json');
const TOKEN = process.env.CONTRIBUTIONS_GH_TOKEN || process.env.GITHUB_TOKEN;

const QUERY = /* GraphQL */ `
  query ContributionCalendar($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

const LEVEL = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

async function main() {
  if (!TOKEN) throw new Error('Missing GITHUB_TOKEN or CONTRIBUTIONS_GH_TOKEN');

  const to = new Date();
  const from = new Date(to);
  from.setUTCFullYear(from.getUTCFullYear() - 1);

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json',
      'User-Agent': 'nami-sh-contribution-calendar',
    },
    body: JSON.stringify({
      query: QUERY,
      variables: { login: USERNAME, from: from.toISOString(), to: to.toISOString() },
    }),
    signal: AbortSignal.timeout(25000),
  });
  if (!response.ok) throw new Error(`GitHub GraphQL HTTP ${response.status}: ${(await response.text()).slice(0,500)}`);

  const body = await response.json();
  if (body.errors?.length) {
    throw new Error(`GitHub GraphQL: ${body.errors.map(e => e.message).join('; ')}`);
  }
  const calendar = body.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar?.weeks?.length) throw new Error('Missing contribution calendar in response');

  const contributions = calendar.weeks.flatMap(w => w.contributionDays).map(day => {
    const level = LEVEL[day.contributionLevel];
    if (!/^\d{4}-\d{2}-\d{2}$/.test(day.date) || !Number.isInteger(day.contributionCount) || level === undefined) {
      throw new Error(`Unexpected contribution day: ${JSON.stringify(day)}`);
    }
    return { date: day.date, count: day.contributionCount, level };
  }).sort((a,b) => a.date.localeCompare(b.date));

  // GitHub uses weeks, so dedupe dates defensively. Do not invent empty days.
  const uniq = [...new Map(contributions.map(day => [day.date, day])).values()];
  if (uniq.length < 300) throw new Error(`Too few calendar days: ${uniq.length}`);

  const result = {
    username: USERNAME,
    source: 'GitHub GraphQL contributionsCollection',
    generatedAt: to.toISOString(),
    period: { from: from.toISOString().slice(0,10), to: to.toISOString().slice(0,10) },
    totalContributions: calendar.totalContributions,
    contributions: uniq,
  };

  await mkdir(resolve(OUTFILE,'..'),{recursive:true});
  const temp = `${OUTFILE}.tmp`;
  await writeFile(temp, JSON.stringify(result, null, 2)+'\n');
  await rename(temp, OUTFILE);
  console.log(`Saved ${uniq.length} verified calendar days to ${OUTFILE}`);
}

main().catch(err => { console.error(err.stack || String(err)); process.exitCode = 1; });
