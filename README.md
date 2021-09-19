<h3 align="center">
    <img src="./.github/logo.png" alt="NV Interactive" width="400" />
    <br><br>
    <b>Frontend code test</b>  
    <br>
</h3>

# Demo

- [Open live demo](https://dp-nv.vercel.app/)

# Index

- [About](#about)
- [Technologies](#technologies)
- [Preview Web](#preview-web)
- [How to use](#how-to-use)
- [Challenges and Difficulties](#challenges-and-difficulties)


<a id="about"></a>

## :bookmark: About

This is a code challenge provided by NV Interactive to test the frontend knowledge for building a simple user interface design made on InVision in [this](https://invis.io/8310QRX8THZW) link.
<br>
<br>

<a id="technologies"></a>

## :rocket: Technologies

The project is made with:

- [ReactJS](https://reactjs.org/)
- [JavaScript](https://www.javascript.com/)
- [Styled Components](https://styled-components.com/)
- [Swiper.js](https://swiperjs.com/)
- [Slick](https://kenwheeler.github.io/slick/)


<br>

<a id="preview-web"></a>

## :heavy_check_mark: :computer: Web

<h1 align="center">
    <img alt="Web" src=".github/webPreview.gif" width="900px">
</h1>

<br>

<a id="how-to-use"></a>

## :fire: How to Use

- ### **Dependencies**

  - Is **required** to install **[Node.js](https://nodejs.org/en/)**
  - In order to run scripts and install dependencies you need to install a **package manager** (ie: **[YARN](https://yarnpkg.com/)**).

  <br>

1. First step, clone this github repository:

```sh
  $ git clone https://github.com/dpisati/nv.git
```

2. Run the application:

```sh
  # Install dependencies for each folder: mobile, server, web.
  $ yarn

  # Run the app on localhost.
  $ yarn start
```


<br>

<a id="challenges-and-difficulties"></a>

## :question: Challenges and Difficulties

- Swiper bug:

Apparently, the latest version of Swiper (^7) has a few bugs when using React as the frontend tool. Around 4 hours of work was focused on trying to implement and resolve the bug, searching new libraries (slick was implemented on the hero carousel). The solution was implementing the vanilla JavaScript (core) option injecting inside the React syntax.
