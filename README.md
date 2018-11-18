# Uniform
This is an experimental responsive design strategy. We abhor the unpredictable squishiness of "liquid layout". Uniform takes another approach using, `vw` units, `rem` units and math. So, you can design specific layouts at each breakpoint, and the entire design scales *proportionally* to fit the viewport.

[See some examples.](http://landerson352.github.io/uniform/)

## Installation

In terminal:

```command
$ npm install landerson352/uniform
```

In your `less` file, add:

```css
@import "path/to/node_modules/uniform/uniform";
```

## Usage

Say we designed a layout on a 960px wide canvas. There is a block element in the design that is 500px wide. Using this code, the element will be the correct width and scale proportionally with the browser window:

```css
.block {
  width: 500*@p;
}
```
Additionally, we can add responsive design rules, such as making the block element 200px wide on extra-small (<639px) screens:

```css
.block {
  .xs({
    width: 200*@rp;
  });
}
```
Note the use of `@rp` (responsive pixels) in this case.

## Recommended design workflow

1. Create artboards (in Sketch, Photoshop, etc.) at each recommended min-width breakpoint: 320px, 640px, 960px, 1280px, 1920px.
2. Create designs for each of these artboards.
3. Code each of these designs, starting with the default 960px view and then adding the responsive mixins.
4. Use the handy mixins like `pin`, `anchor`, `size` and `position` too, if you can figure them out, since they are completely undocumented. Sorry.
 
### Recommended design constraints

1. For the most readable lines of text, Create components that wrap text at around 55 characters. For Helvetica 14px, this is about 320px wide.
2. Prevent full-screen designs from overwhelming the user. Constrain your "content zone" where people will be reading text and diagrams to 960px or less in the center of the screen, and use the rest of the space for secondary options and decorative graphics.

### Browser support

Uniform supports latest versions of all major browsers. **Note: It does NOT support Internet Explorer 8.**

## Contributing

### Setup

Run once after you clone the repo:
```
npm i
```

### Making a new demo page

1. Duplicate `demos/less/demo-template.less` and call it something like `demo-yogawebsite.less`.
2. Duplicate `demos/demo-template.html` and call it something like `demo-yogawebsite.html`.
3. Update the CSS link on the HTML page.
4. Add a link to your demo page to the list on `index.html`.*
5. Run `npm start` and navigate to your page.
6. Do your custom HTML and CSS.
7. Send me a pull request.

*_This will start a static server and open the site at `http://localhost:3000`. If you'd like to run the server without opening a window, use `gulp dev`. If you'd like to compile the CSS without running the server, use `gulp build`._


## FAQ

###### Q: Do I need to use those breakpoints you listed?
A: You can customize them, but there are a few reasons the defaults were chosen. For one, they are all multiples of 320, which means you can easily make responsive grids out of blocks that are 320 wide (2 column, 4 column, etc.). Also, the breakpoints are all close to the big spikes in market usage of screen sizes. (iPhone, iPad, desktop, etc.) There is an infinite spectrum of devices out there, but these common breakpoints dominate 80% of the market.

###### Q: What's with the mixins like `pin` and `anchor`?
A: These just reduce absolute CSS positioning into more human terms like "pin the bottom-left corner of the element to the bottom-left corner of the parent container". They are totally optional. I found them to be useful. See the source code on `uniform.mixinx.less`.

###### Q: What's wrong with liquid layout?
A: Dude, just don't even get me started.
