---
layout: single
title: "Math Decode Game"
date: 2022-10-30 00:04:20 -0000
toc: true
excerpt: "Vue app math game involving basic arithmetic and code cracking."
---

[Final App!][app]{: .btn .btn--info}
[Repo][repo]{: .btn .btn--inverse}

## Overview

### Background

When I was young, my dad wrote a program in JavaScript that enabled him to generate a printout with a "cracking the code"-esque game that used addition and multiplication problems. By gamifying the experience of solving basic arithmetic expressions, he helped me improve my math skills, and I recall looking forward to receiving new worksheets on the daily.

Over time, my dad would increase the difficulty by encoding some famous quotes, which led to us calling the game Quote of the Day. Some of the quotes have stuck with me over the years, from "If you want to be loved, be lovable" (Ovid) to "Anyone who has never made a mistake has never tried anything new" (Albert Einstein).

### Motivation

Over 15 years later, I stumbled across my dad's program when looking through some old computer files. To my excitement, I could now understand the code that he wrote, and felt inspired to recreate his program as an interactive web application. In addition, this was a great opportunity for me to learn a new front-end framework like Vue!

## Usage 

To run this app locally, follow the steps below!

1. Clone this repository.

   ```shell
   git clone https://github.com/peyton-a-wang/math-decode-game.git
   ```

2. Install dependencies from the root directory.  

   ```shell
   cd math-decode-game
   npm install
   ```

3. Run the app in development mode and view it in the browser.

   ```shell
   npm run dev
   ```

## Technology & Tools

### Languages & Libraries

<div class="tech-logos">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="40" height="40"/> </a>
  <a href="https://www.w3.org/html/" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
  <a href="https://vuejs.org/" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" width="40" height="40"/> </a>
</div>

### References

* [Vue CLI deployment docs][vue-docs]: deploy Vue app to GitHub pages
  
[app]:      https://peyton-a-wang.github.io/math-decode-game/
[repo]:     https://github.com/peyton-a-wang/math-decode-game
[vue-docs]: https://cli.vuejs.org/guide/deployment.html#github-pages
