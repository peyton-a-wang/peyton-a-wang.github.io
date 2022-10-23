---
layout: single
title: "DMV Chinese Practice Test React App"
date: 2022-07-24 00:04:20 -0000
toc: true
toc_icon: "car"
tags: react web-scraping
---

This web application was built using React and contains California DMV practice questions in Chinese. You can check out the [final app here][final-app]!

## Overview

### Problem Statement

Over the summer, my grandma wanted to study for her senior license renewal test, but she couldn't find any official practice questions in Chinese. Currently, the California DMV website only offers [practice knowledge tests][dmv-practice] in English, Spanish, and ASL. While I found a [Chinese website with practice permit test questions][chinese-qs], my grandma was frustrated with the site because she kept clicking on extraneous pop-ups and links. 

### Solution

As I wanted to both help my grandma and learn how to use React, I developed and designed a React App that allowed my grandma to study the scraped practice questions on an intuitive interface. Furthermore, I conducted extensive user testing to continuously implement feedback and additional features to facilitate her learning. She passed the test a few weeks later!

## Technology & Tools

### Languages

<div class="tech-logos">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
  <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> 
  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
</div>

### References

* [`create-react-app`][create-react]: create React app from scratch
* followed steps in [deployment guide][guide]
* [`gh-pages`][gh-pages]: publish app files to GitHub pages
* [`BeautifulSoup`][bs4]: web scrape quiz questions
* [`pandas`][pandas]: categorize questions in dataframe and output as json

[dmv-practice]: https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/
[chinese-qs]:       https://pass-dmv-test.com/quiz-1-zh.html
[final-app]:        https://peyton-a-wang.github.io/chinese-practice-dmv-test/
[create-react]: https://create-react-app.dev/
[guide]:            https://create-react-app.dev/docs/deployment/#github-pages
[gh-pages]:         https://github.com/tschaub/gh-pages
[bs4]:              https://pypi.org/project/beautifulsoup4/
[pandas]:           https://pandas.pydata.org/
