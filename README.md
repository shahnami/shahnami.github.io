# Next.js Typescript

The development environment is fairly simple to set up.

You need to make sure you have `yarn` and `Nodejs` installed.

## Table of Contents

1. [Docs](docs/README.md)
2. [Development](#development)
3. [Deployment](#deployment)
4. [Structure](#structure)
5. [Design](#design)

## Development

### Installing Yarn

Simply run the following command

```bash
curl -o- -L https://yarnpkg.com/install.sh | bash
```

### Development Server

Once you have install both of the required modules - simply run `yarn install` to start installing depenedencies.

When that has completed you will have all the required dependencies to start the development server using

```bash
yarn dev
```

## Deployment

There are two ways this project can be deployed. One is to build the project and use a Node.js server to run `yarn start` or you could export all the file using

```console
yarn export
```

This should export all files to a `out` directory.

This directory should be served by some server like Nginx/Apache.

For more information [https://nextjs.org/docs/deployment](https://nextjs.org/docs/deployment).

## Structure

The structure of this is project is similar to a regular web project with html, css, js and image files.

All static files (CSS & IMAGES) should be placed in `public/static`. The public folder is a special directory in the sense that you can access anything inside this folder through `/`.

For example if I have a file

```console
./public/static/TEST.png
```

I can assess this in a `.tsx` file through

```console
/static/TEST.png
```

### Sections

A page consists of multiple sections. For example our index page has a section on Babble Mobile Framework, Monet and so on...

Sections can be further simplified into smaller components (TO BE DONE).

### Stylesheets

There are 4 main stylesheets located in `public/static/css`.

-   `animations.css` - Any new CSS keyframes should be added here
-   `bootstrap.css` - If you require the override of a bootstrap class, it should be done here.
-   `global.css` - Any overrides or styling changes to default html tags should be done here.
-   `index.css` - Any globally scoped styling changes should be done here.

## Design

![alt text](./assets/design.png 'Website Design')
