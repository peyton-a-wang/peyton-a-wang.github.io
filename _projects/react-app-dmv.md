---
layout: single
title: Chinese DMV Practice Exam
date: 2022-07-24 00:04:20 -0000
toc: true
toc_icon: "car"
excerpt: "React app with practice questions for my grandma to study for her DMV senior renewal test."
---

[Final App!][app]{: .btn .btn--info}
[Repo][repo]{: .btn .btn--inverse}

## Overview

### Problem Statement

Over the summer, my grandma wanted to study for the exam, but she couldn't find any official practice questions in Chinese. Currently, the California DMV website only offers [practice knowledge tests][dmv-practice] in English, Spanish, and ASL. While I found a [Chinese website with practice permit test questions][chinese-qs], my grandma was frustrated with the site because she kept clicking on extraneous pop-ups and links.

### Solution

As I wanted to both help my grandma and learn how to use React, I developed and designed a [React app][app] that allowed my grandma to study the scraped practice questions on an intuitive interface. Furthermore, I conducted extensive user testing and sought feedback to understand which additional features and enhancements would best facilitate her learning. She passed the test a few weeks later!

## Design

As my grandma would be the app's primary user, I implemented a simple design that enabled her to answer one question at a time. After selecting an option, its correctness is indicated by the button color and the alert with a message. In addition, the large arrows allow for moving backward and forward between questions, or the exact question number can be selected from the dropdown list. Upon returning to a specific question, the order of the options are randomly shuffled.

<figure class="third">
  <a href="/assets/images/dmv-page-selector.png"><img src="/assets/images/dmv-page-selector.png"></a>
  <a href="/assets/images/dmv-correct.png"><img src="/assets/images/dmv-correct.png"></a>
  <a href="/assets/images/dmv-wrong.png"><img src="/assets/images/dmv-wrong.png"></a>
</figure>

## Usage

To run this app locally, follow the steps below!

Clone this repository.

{% highlight shell %}
git clone https://github.com/peyton-a-wang/chinese-practice-dmv-test.git
{% endhighlight %}

Install dependencies from the root directory.  

{% highlight shell %}
cd chinese-practice-dmv-test
npm install
{% endhighlight %}

Run the app in development mode and view it in the browser.

{% highlight shell %}
npm start
{% endhighlight %}

## Technology & Tools

### Languages & Libraries

<div class="tech-logos">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
  <a href="https://www.python.org" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
  <a href="https://www.w3schools.com/css/" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
  <a href="https://www.w3.org/html/" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
  <a href="https://reactjs.org/" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40"/> </a>
  <a href="https://pandas.pydata.org/" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" alt="pandas" width="40" height="40"/> </a>
  <a href="https://www.crummy.com/software/BeautifulSoup/" rel="noreferrer"> <img src="https://www.crummy.com/software/BeautifulSoup/10.1.jpg" alt="beautiful soup" width="40" height="40"/> </a>
</div>

### References

* [`create-react-app`][create-react]: create React app from scratch
  * followed steps in [deployment guide][guide]
* [`gh-pages`][gh-pages]: publish app files to GitHub pages

[app]:          https://peyton-a-wang.github.io/chinese-practice-dmv-test/
[repo]:         https://github.com/peyton-a-wang/chinese-practice-dmv-test
[dmv-practice]: https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/
[chinese-qs]:   https://pass-dmv-test.com/quiz-1-zh.html
[create-react]: https://create-react-app.dev/
[guide]:        https://create-react-app.dev/docs/deployment/#github-pages
[gh-pages]:     https://github.com/tschaub/gh-pages
[bs4]:          https://pypi.org/project/beautifulsoup4/
[pandas]:       https://pandas.pydata.org/
