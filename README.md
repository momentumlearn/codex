# Momentum Foundations

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```
$ npm install
```

## Local Development

```
$ npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## MDX Components

This website can use [MDX](https://mdxjs.com/), an extension that allows you to put React components in Markdown. If your document ends in `.mdx`, MDX is enabled. There are some components made available to you:

### ParsonsProblem

[Parsons Problems](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2020/EECS-2020-88.pdf) are programming puzzles in which students drag-and-drop prewritten code snippets to construct a program. We have a component that allows you to put these in any page.

```mdx
import ParsonsProblem from '../../src/components/ParsonsProblem'

## Put this HTML page in the right order

Below, you will find an HTML page in scrambled order. Drag each line so that they are in the correct order.

<ParsonsProblem code={`
<!DOCTYPE html>
<html>
  <head>
    <title>About PurpleJeans</title>
  </head>
  <body>
    <h1>About PurpleJeans</h1>
    <p>
      PurpleJeans was founded in 2004 with the goal of reinventing the
      way we buy jeans.
    </p>
  </body>
</html>
`} />
```

This component is found at [src/components/ParsonsProblem.js](src/components/ParsonsProblem.js).

**TODO** This component does not handle letting students change the indentation.

### Quiz - `Quiz`

This is a full-featured, multi-page multiple-choice quiz. [Read the documentation at npm](https://www.npmjs.com/package/react-quiz-component).

## Video/Audio Player - `ReactPlayer`

This player works with YouTube, Vimeo, Twitch, SoundCloud, and a lot more. [Read the documentation on GitHub](https://github.com/CookPete/react-player).
