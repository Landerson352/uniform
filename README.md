# Uniform
This is an experimental responsive design strategy. We abhor the unpredictable squishiness of "liquid layout". Uniform takes another approach. Design specific layouts at each breakpoint, and the entire design scales *proportionally* to fit the viewport.

## Setup

Run once after you clone the repo:
```
npm i
```

Run whenever you work on the site:
```
gulp
```

Then open the site at http://localhost.com:3000

## Making a new demo page

1. Duplicate `less/demo-template.less` and call it something like `demo-yogawebsite.less`.
2. Duplicate `public/demo-template.html` and call it something like `demo-yogawebsite.html`.
3. Update the CSS link on the HTML page.
4. Do your custom HTML and CSS.
5. Add a link to your demo page to the list on `index.html`.
6. Send me a pull request.

## Recommended design workflow

1. Create artboards (in Sketch, Photoshop, etc.) at each recommended min-width breakpoint: 320px, 640px, 960px, 1280px, 1920px.
2. Create designs for each of these artboards.
3. Code each of these designs, converting pixels to `rem` units. For example, a 123 pixel wide div would be assigned `width: 123rem;`. This hooks into the viewport scaling magic.
 
## FAQ

###### Q: Do I need to use those breakpoints you listed?
A: You can customize them, but there are a few reasons the defaults were chosen. For one, they are all multiples of 320, which means you can easily make responsive grids out of blocks that are 320 wide (2 column, 4 column, etc.). Also, the breakpoints are all close to the big spikes in market usage of screen sizes. (iPhone, iPad, desktop, etc.) There is an infinite spectrum of devices out there, but these common breakpoints dominate 80% of the market.

###### Q: Why use `rem` units like pixels? Aren't they supposed to be used for font size?
A: Yes, it's kind of a hack. But in terms of design-to-code workflow, it's a hell of a lot easer to convert `200px` to `200rem` than it is to divide by the root font size (16).

###### Q: How does it work?
A: It's simpler than you might think. At each breakpoint, we set a document font size in `vw` units at a particular value. This makes `rem` units act like pixels that scale up and down, in the same way an image does when it scales-to-fits to the window.

###### Q: What's wrong with liquid layout?
A: Dude, just don't even get me started.
