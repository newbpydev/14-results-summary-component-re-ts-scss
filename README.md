# Frontend Mentor - Results summary component solution

![preview](public/assets/images/preview/desktop-preview.jpg)
This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Results summary component solution](#frontend-mentor---results-summary-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![desktop](public/assets/images/preview/desktop-design.jpg)
![mobile](public/assets/images/preview/mobile-design.jpg)

### Links

- Solution URL: [GitHub](https://github.com/newbpydev/14-results-summary-component-re-ts-scss)
- Live Site URL: [Netlify](https://fastidious-crostata-853df9.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [SCSS](https://styled-components.com/) - For styles

### What I learned

I am mostly proud on the structure that I used to keep my styles organized, and
having the opportunities to explore more the topic of Mixins.

```html
<div className="summary-stats">
  <h2 className="summary-stats__heading">Summary</h2>

  <div className="summary-stats__scores">{renderScores}</div>

  <button type="button" className="summary-stats__button">Continue</button>
</div>
```

```scss
@mixin bg-gradient-white-with-color($bg-color) {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),
    $bg-color;
}

@mixin text-color($text-color) {
  color: $text-color;
}

// Media
@mixin media-medium {
  @media (min-width: var.$breakpoint-md) {
    @content;
  }
```

```js
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("/data/data.json");
      const jsonData: ScoreItem[] = await res.json();
      setResults(jsonData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  fetchData();
}, []);
```

### Continued development

This was a very special challenge for me because I decided to follow all the
best practices when using SCSS, I will continue to explore more the different
functionalities of SCSS. I didn't get a chance of using functions or layouts so
for the next project I will do a full page to be able to use these features
among others.

### Useful resources

- [SASS - @use](https://sass-lang.com/documentation/at-rules/use) - The @use rule loads mixins, functions, and variables from other Sass stylesheets, and combines CSS from multiple stylesheets together. Stylesheets loaded by @use are called "modules". Sass also provides built-in modules full of useful functions.

## Author

- Website - [Juan Gomez](https://github.com/newbpydev)
- Frontend Mentor - [@newbpydev](https://www.frontendmentor.io/profile/newbpydev)
- Twitter - [@Newb_PyDev](https://twitter.com/Newb_PyDev)

## Acknowledgments

The code may not be perfect compared to my sensei @jonasschmedtman but I need to
thank him because he has shown me the ropes and now I am a confident web
designer.
