---
title: Rollup a React-Typescript app 🎢
date: "2020-05-31"
description: How to get started a React + Typescript app using Rollup as bundler.
---

## What is Rollup ? 📃

Yes, [Rollup](https://rollupjs.org/guide/en/) or Rollup.js is a javascript module bundler like [Webpack](https://webpack.js.org) (arguably one of the most popular tool in the Javascript realm). If you don’t know what a bundler is, that’s fine. Here’s a small roundup of the term - A bundler or module bundler is a tool used to bundle javascript modules, styles, assets and other files into a single file or a small number of files, which are then passed on to browser for execution. [Here](https://lihautan.com/what-is-module-bundler-and-how-does-it-work/) is a nice article, if you want to know more about bundlers and how they work.

## Why Rollup? ⛩

Well, there are a few tools more widely used and as well managed and supported as [Webpack](https://webpack.js.org). So the question begs, Why Rollup when we have Webpack? Well, let’s start with why Webpack as well? first. Webpack started as an effort to make building complex single page applications easier. As client side javascript apps grew in size and complexity - modules came into picture, there was a need of sophisticated bundling and shipping of these modules to the users’ browser.

Webpack burst onto the scene, starting in 2012, with its’ two amazing features that paved the way complex web applications -

- **Code splitting**
  With tens to hundreds of modules, not all code is required on the first go. Code splitting or splitting your modules into small chunks which are then loaded lazily on demand, making apps faster to load and use.

- **Dependency resolution**
  Javascript isn’t all that a modern web application has, there are other static assets, styles and what not. Webpack supported using these assets and non-javascript files and resources into code like just another javascript module, making the development experience quite seamless.

Rollup does all of it but the genius of Rollup comes from Its dealing in ES6 modules, not in ancient systems like CommonJS and AMD. Use of ES6 modules makes Rollup produce flat distributable which are leaner and more efficient than others.

> A bit uncomfortable with Module systems? Checkout this blog post.

Rollup has been around for around 4 years now and is the foremost choice for library authors. [This PR](https://github.com/facebook/react/pull/9327) landed in React back in 2017, changing the bundler to Rollup. Why? Because Rollup is modern, faster and produces learner, more efficient bundles and since It works on ES6 modules, It makes a huge sense for libraries if not for apps, where you still might have to depend on packages using other module systems like CommonJS.

Now, what’s the catch? If Rollup is so good, why not use it everywhere? Because it isn’t for every use case. Rollup is not a fit all sizes tool as of now due to the ecosystems’ huge reliance on old module systems, but this is changing. Rollup in 2020 is the go to choice if you are writing a library, for apps I’ll still prefer Webpack as it is still the king Swiss knife of bundlers.

> Rollup for libraries, Webpack for apps - Common Wisdom 2020 Edition

Though ParcelJS is a great new bundler, and I really love it, but the community support is still not comparable to that of big ol’ Webpack.

> We’ll bring up ParcelJS in another post, stay tuned!

As I said, Rollup in 2020 is meant for libraries and is not the best choice for an app, but the post header says something else, well yeah, I wanted to see for myself how easy/tough it is to start from scratch with Rollup. After a lot of searching, I wasn’t able to find a good resource on the internet which guides through the process of starting up a basic React + Typescript app with Rollup, so I thought why not write one.

## Creating a React + Typescript App with Rollup 👨🏻‍💻

So now that we are done with what and the why of Rollup. Let’s start a very basic React + Typescript app bundled by Rollup or let’s _Rollup_ a React + Typescript app (Yes, I desperately wanted to say that)

### What we’ll create 👀

No bells and whistles, only a page with some text. You can do whatever you want on top of that.

### TL:DR;

You can find the final app [here](https://github.com/tejasupmanyu/rollup-react-app).

### Let’s begin 🚀

#### Install Rollup ⌨️

Install Rollup bundler in your system by -

```sh
yarn global add rollup
```

Or if you prefer npm -

```sh
npm install --global rollup
```

#### Make a project folder.

```sh
mkdir rollup-react-app && cd rollup-react-app
```

#### Initialise a package

```sh
yarn init -y
```

Or if you prefer npm -

```sh
npm init -y
```

Let’s create two folders `src` to hold our code and `public` to hold our bundled code and assets.

```sh
mkdir src && mkdir public
```

#### Create Rollup config file 📜

When you invoke rollup, It looks for a configuration file named `rollup.config.js` for all the settings, configurations required and instructions to be performed in order to create the bundle. Let’s go ahead and create that.

Create a file named `rollup.config.js` in the root of the project folder.

Rollup config here Is basically an object which is used by Rollup to create the bundle. Let’s start small and add a file `index.js` in `src` .

```js
// index.js

function helloRollup() {
  console.log(“hello rollup”);
}

helloRollup();
```

Now, we have a javascript file to work with. Let’s add the required config in `rollup.config.js` to bundle this.

```js
export default {
  input: "src/index.js",
  output: {
    file: "public/bundle.js",
    format: "iife",
    sourcemap: true,
  },
}
```

Here, input specifies the entry point of the bundle or the file where rollup should start from to create the bundle. Since we have only one file right now, that will become the entry point.

The output specifies what output do we expect from rollup. So, we expect Rollup to create the bundle at location specified by file key. In `iife` format. Which is self-executing script, understood by browsers and we turn the source maps to be true, we don’t really need source maps right now but we’ll need them in future.

That’s all the config we need right now. We’ll return to `rollup.config.js` as we start adding more things. We’ll go ahead and add two entries in package.json for conveniently running rollup.

```js
// package.json
{
	...
"scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w"
  }
	...
}
```

Let’s run rollup to create our bundle using first `yarn` to install dependencies and then `yarn build`.

This should create a file named `bundle.js` inside public folder. To test if it works, just run `node public/bundle.js` and It should log `hello rollup` on the terminal. If that’s happening, Houston, we are good to go.

#### Sprinkle some TS ✨

We want to create a typescript app, so we’ll go ahead and convert our `index.js` to `index.ts` but browser does not understand typescript, It needs to be fed javascript, so we’ll ask Rollup to do the conversion for us. We’ll need the `typescript` and `tslib` package for typescript. Not everything can be added to Rollup itself, hence to perform different functions we have the concept of [plugins](https://rollupjs.org/guide/en/#plugins-overview). Plugins are packages which extend the functionality of Rollup. Thankfully for our task, we have a [official rollup plugin](https://github.com/rollup/plugins), by the name of [`@rollup/plugin-typescript`](https://github.com/rollup/plugins/tree/master/packages/typescript). So, we’ll go ahead and install this plugin -

```sh
yarn add -D typescript tslib @rollup/plugin-typescript
```

And you should go ahead and create a `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "jsx": "preserve",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "noEmit": true,
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "resolveJsonModule": true
  },
  "exclude": ["node_modules"]
}
```

Also, we’ll need babel. Remember babel? The Transpiler to convert our modern code down to the ES standards browsers can understand. We also have an official plugin for babel - [`@rollup/plugin-babel`](https://github.com/rollup/plugins/tree/master/packages/babel). If you’ve used babel before, you know that it also requires a configuration to work. Which it takes from a `babel.config.json` file. Let’s create a file named `babel.config.json` at the root of the project. The core of babel’s functionality comes from the `@babel/core` package and it also comes with some presets - a set of standard configurations, which we can use. Here, we’ll start with the `@babel/preset-env` the most standard one. Let’s install all of them using -

```sh
yarn add -D @rollup/plugin-babel @babel/core @babel/preset-env
```

And add this to `babel.config.json` like -

```js
// babel.config.json
{
  "presets": ["@babel/preset-env"]
}
```

That’s all the babel configuration required for now. Let’s move back to our `rollup.config.json` to add the installed typescript and babel plugins.

We’ll first import the plugins and add them in an array (order matters) with the key plugin, like this -

```js
import typescript from "@rollup/plugin-typescript"
import babel from "@rollup/plugin-babel"

export default {
  input: "src/index.ts",
  output: {
    file: "public/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    typescript(),
    babel({
      babelHelpers: "bundled",
      exclude: /node_modules/,
    }),
  ],
}
```

The options provided to babel are quite usual if you have used or seen babel configs before, it not, refer to the plugins’ [documentation](https://github.com/rollup/plugins/tree/master/packages/babel).

Let’s run `yarn build` again and then `node public/bundle.js`, It should work just fine.

#### Add React and other dependencies ⚛️

Yes, It is time to add React and types now. For react, we’ll need `react`, `react-dom` packages using -

```sh
yarn add react react-dom
```

```sh
yarn add -D @types/react @types/react-dom
```

We also need some the react plugin for babel - `@babel/preset-react`

```sh
yarn add -D @babel/preset-react
```

And update `babel.config.json`

```js
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

We’ll need a couple of rollup plugins. We’ll start with [`@rollup/plugin-replace`](https://github.com/rollup/plugins/tree/master/packages/replace) which is used from replacing strings in bundles, which we’ll use for changing environment variables for React. We need [`@rollup/plugin-node-resolve`](https://github.com/rollup/plugins/tree/master/packages/node-resolve) which as the name suggests is used for resolving node modules. Then comes [`@rollup/plugin-commonjs`](https://github.com/rollup/plugins/tree/master/packages/commonjs) is required for convert CommonJS modules to ES6 modules.

```sh
yarn add -D @rollup/plugin-replace @rollup/plugin-node-resolve @rollup/plugin-commonjs
```

Now we need to inject our react bundle script into an HTML document. We’ll use [`@rollup/plugin-html`](https://github.com/rollup/plugins/tree/master/packages/html) which creates a HTML files to serve bundles. This plugin takes a couple of arguments, which you can read in the documentation. We also need to serve these files during our development. We’ll employ [`rollup-plugin-serve`](https://github.com/thgh/rollup-plugin-serve) for this. And we all like live reload so [`rollup-plugin-livereload`](https://github.com/thgh/rollup-plugin-livereload) will be required.

```sh
yarn add -D @rollup/plugin-html rollup-plugin-serve rollup-plugin-livereload
```

Okay, we have installed everything required for now, let’s write some React. Create a file `App.tsx`in `src` and convert `index.ts` to `index.tsx`. We’ll now add a simple component in `App.tsx` which renders `👋🏻 React + Rollup + Typescript` on screen. We’ll then import and render this component to DOM in `index.tsx`.

```tsx
// index.tsx
import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))
```

```tsx
// App.tsx
import * as React from "react"

export default function App() {
  return <h1>👋🏻 React + Rollup + Typescript</h1>
}
```

Now, It is time to import and use all of the installed plugins in `rollup.config.js`.

```js
import typescript from "@rollup/plugin-typescript"
import babel from "@rollup/plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import replace from "@rollup/plugin-replace"
import html from "@rollup/plugin-html"
import serve from "rollup-plugin-serve"
import livereload from "rollup-plugin-livereload"

const isProd = process.env.NODE_ENV === "production"
const extensions = [".js", ".ts", ".tsx"]

export default {
  input: "src/index.tsx",
  output: {
    file: "public/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    typescript(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        isProd ? "production" : "development"
      ),
    }),
    resolve({
      extensions,
    }),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      extensions,
      babelHelpers: "bundled",
      exclude: /node_modules/,
    }),
    html({
      fileName: "index.html",
      title: "React App",
      template: ({ title }) => {
        return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
</head>
<body>
  <div id="root"></div>
  <script src="/bundle.js"></script>
</body>
</html>
`
      },
    }),
    !isProd &&
      serve({
        host: "localhost",
        port: 3000,
        open: true,
        contentBase: ["public"],
      }),
    !isProd &&
      livereload({
        watch: "public",
      }),
  ],
}
```

Alrighty, If you run `yarn dev` you should see the all your hard work till now on [`localhost:3000](http://localhost:3000)`

#### Adding SCSS styles 💅🏻

Now that we have our React + Typescript app, up and running , we can work on some styles. To use SCSS for styling, we need to install some dependencies like `node-sass` and `rollup-plugin-scss` - the css plugin for rollup.

```sh
yarn add -D node-sass rollup-plugin-scss
```

First, we’ll add the plugin in rollup config, just after the html plugin and before the serve plugin-

```js
...
 scss({
      output: "public/bundle.css",
    }),
...
```

We’ll add a scss file named `app.scss` with some bare bones font styles inside `src`

```scss
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
```

And import it in `App.tsx`

```tsx
import * as React from "react";
import "./app.scss";

...
// as before
```

Running `yarn dev` again should reflect our new font styles as applied.

And that’s all. We have a the basic-est of React + Typescript apps, bundled using Rollup.

All the code for this app is [here](https://github.com/tejasupmanyu/rollup-react-app), feel free to clone it, play with rollup and build on top of this repo as starting point.

Congratulations if you’ve made it till here. I know bundling up your own React app with a new bundler is no easy feat and has been a slightly long ride. If you hadn’t configured a bundler for your app in a while, like me, It must’ve felt a lot (all thanks for this first world problem to create-react-app). Not to take anything away from create-react-app, It is a great project and moments like these make us realise how good it is. Cheers! 🍻

## References & Further Reading

- [webpack](https://webpack.js.org)
- [Rollup](https://rollupjs.org/guide/en/)
- [What is module bundler](https://lihautan.com/what-is-module-bundler-and-how-does-it-work/)
- [Webpack and Rollup: the same but different - webpack - Medium](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c)
