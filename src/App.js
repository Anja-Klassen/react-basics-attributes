import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Ichang-Zitrone</h2>
      <label htmlFor="input">Klick hier, um mehr zu erfahren!</label>
      <input id="input"></input>
      <a
        href="https://de.wikipedia.org/wiki/Ichang-Zitrone"
        className="article__link"
      ></a>
    </article>
  );
}

// ## Task

// Write an `Article` component and use it to replace the given `<div>`.

// Your component should contain the following parts:

// - an `<article>` as a wrapper HTML element with the class `article`
// - an `<h2>` with the class `article__title` and a text of your choice
// - a `<label>` and `<input>` tag connected with `id` and `htmlFor` (!) attributes
// - an `<a>` tag with the class `article__link` as well as text content and `href` attribute of your choice (What about a Wikipedia article?)

// ## Notes

// - You rendered Article component does not have any styling? Remember that you need to use `className` instead of `class` in JSX.
// - You only have to touch the [App.js](src/App.js) file.
