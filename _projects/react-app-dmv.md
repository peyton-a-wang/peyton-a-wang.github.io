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

As I wanted to both help my grandma and learn how to use React, I developed and designed a [React app][app] that allowed my grandma to study the scraped practice questions on an intuitive interface. I also sought feedback from my family and grandma to understand which additional features and enhancements would best facilitate her learning. She passed the test a few weeks later!

## Data Collection

### Scraping

On the [website with Chinese practice questions][chinese-qs], each page consists of one question. I wrote a Python function `scrape_q()` that takes in a question number as input and uses the [BeautifulSoup library][bs4] to scrape the question title, correct option, and incorrect options. In a separate function, the returned data is then appended to the three respective columns in a [pandas][pandas] `DataFrame`. After extracting each question from the site, the `DataFrame` is written out to a JSON file. Honestly, I don't know why I didn't create a list of dictionaries and convert it using `json.dumps`, but I guess I wanted to feel like a data scientist by using pandas.

Code snippet of adding each question's data to the DataFrame and then writing it to a JSON file.

{% highlight python %}
df = pd.DataFrame(columns=["q", "c", "w"])
total_qs = 300

for q_num in range(0, total_qs):
  q_elts = scrape_q(q_num+1)
  
  if q_elts:
    q_title, q_correct, q_wrong = q_elts
    df = df.append({"q": q_title, "c": q_correct, "w": q_wrong}, ignore_index=True)

with open(filename, 'w', encoding='utf-8') as outfile:
  df.to_json(outfile, force_ascii=False, orient="records")
{% endhighlight %}

### Data Format

In the JSON file, each question is formatted as shown below. The `q` key stores the question's title, `c` stores the correct answer, and `w` stores the wrong answers.

{% highlight json %}
{
  "q": "如果你駕車時經過一片施工區域，應該怎麼做才對？",
  "c": "集中精神，小心駕駛即可。",
  "w": [
      "減速，小心路上的工人。",
      "鳴笛，引起周圍行人和車輛的注意。",
      "加速通過，以免影響工人施工。"
  ]
},
{% endhighlight %}

## Design & Features

### Minimalistic Design

As my grandma would be the app's primary user, the interface needed to be straightforward to use and simple in its design. Each page displays one question at a time, along with four answer options.

### Correctness Indicators

I used a [`<TouchableHighlight>`][touchable-highlight] React component, which reveals the button's underlying color upon pressing it. After making a selection, the button color changes to green or red, which corresponds to a correct or incorrect answer, respectively. In addition, an alert will appear and display a message that indicates the correctness of the selection. To congratulate my grandma on finishing the entire practice test, the last question has a special alert message just for her!

<figure class="half">
  <a href="/assets/images/dmv-correct.png"><img src="/assets/images/dmv-correct.png"></a>
  <a href="/assets/images/dmv-wrong.png"><img src="/assets/images/dmv-wrong.png"></a>
</figure>

Code snippet of generating <TouchableHighlight> answer options:

{% highlight html %}
{options.map((option, index) => (
  <TouchableHighlight
    key={"option-" + index}
    style={styles.button}
    onPress={() => choose(option.isCorrect)}
    activeOpacity={0.5}
    underlayColor={(option.isCorrect) ? "green" : "red"}>
    <Text style={styles.text}>
      {option.answer}
    </Text>
  </TouchableHighlight>
))}
{% endhighlight %}

### Navigating Questions

Below the question, the large arrows allow users to view the previous or next questions. In addition, the exact question number can be selected from the dropdown list. I wrote `back()`, `forward()`, and `skip()` navigation functions to enable these features. Also, I used a [State Hook][state-hook] to preserve the current state (or the question number variable), which corresponds to its index in the imported data. This allows for ease of subsequent renders upon changing the current state in the navigation functions.

<a href="/assets/images/dmv-page-selector.png"><img src="/assets/images/dmv-page-selector.png"></a>

Code snippet of `useState` Hook usage and navigation functions.

{% highlight javascript %}
const [current, setCurrent] = useState(0);

const back = () => {
  const last = current - 1;
  if (last >= 0) {
    setCurrent(last);
  }
};

const forward = () => {
  const next = current + 1;
  if (next < data.length) {
    setCurrent(next);
  }
};

const skip = (event) => {
  let questionNum = event.target.value;
  setCurrent(questionNum - 1);
};
{% endhighlight %}

### Randomizing Answer Options

Upon returning to a specific question, the options are randomly shuffled. This was achieved using the [Fisher-Yates Shuffle algorithm][shuffle-alg], which I Googled and copy-pasted from [this Stack Overflow post][stack-overflow] like a true software engineer (obviously).

## Personal Reflection

### Challenges

1. Learning how to use React
2. Designing the UI
3. Figuring out how to change the color of a damn button 🥲

### Future Improvements

1. __Fixing the button color on click__: the colors don't change in certain cases on the computer, and it completely doesn't work on phones and tablets
2. __Including questions with images__: I may have filtered out questions with pictures because I didn't want to deal with them 🤷🏻‍♀️
3. __Scraping questions from other sources__: currently all the questions are solely from the sketchy Chinese website
4. __Documentation__: I initially wasn't thinking about uploading this project to GitHub until several months later after the test was over... but to be honest, I'm too lazy to go back and document my code... 😅

### Takeaways

Overall, I enjoyed working on this project, and it was so rewarding to help my grandma pass her test! Furthermore, I'm grateful for the opportunity to put my computer science degree to use after graduating and improve upon my programming skills, though my documentation (or lack thereof) could use some work. This project gave me a good introduction to React, and I hope to make web apps with more complicated components in the future!

## Usage

To run this app locally, follow the steps below!

1. Clone this repository.

   ```shell
   git clone https://github.com/peyton-a-wang/chinese-practice-dmv-test.git
   ```

2. Install project dependencies from the root directory.

   ```shell
   cd chinese-practice-dmv-test
   npm install
   ```

3. Run the app in development mode and view it in the browser.

   ```shell
   npm start
   ```

Optional: The questions are already included in the repo, but if you want to run the scraper script, you need to install the scraper dependencies first, which I highly recommend installing in a virtual environment. Then, run the script to scrape the questions from the website (it takes around 30s to collect all the data) and write them into the JSON file.

{% highlight shell %}
python3 -m venv venv
. venv/bin/activate
pip3 install -r src/scrape/requirements.txt
python3 src/scrape/scrape_questions.py
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

[app]:                 https://peyton-a-wang.github.io/chinese-practice-dmv-test/
[repo]:                https://github.com/peyton-a-wang/chinese-practice-dmv-test
[dmv-practice]:        https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/
[chinese-qs]:          https://pass-dmv-test.com/quiz-1-zh.html
[touchable-highlight]: https://reactnative.dev/docs/touchablehighlight
[state-hook]:          https://reactjs.org/docs/hooks-state.html
[shuffle-alg]:         https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
[stack-overflow]:      https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
[bs4]:                 https://pypi.org/project/beautifulsoup4/
[pandas]:              https://pandas.pydata.org/
[create-react]:        https://create-react-app.dev/
[guide]:               https://create-react-app.dev/docs/deployment/#github-pages
[gh-pages]:            https://github.com/tschaub/gh-pages
