# truncate-text-dom

Function for finely-tuned text truncation in the DOM.

Returns a version of text string which is truncated from the end so that it can fit within container of maximum number of lines and width. It truncates whole words while leaving enough space for a customizable ellipsis label.

## Install

```sh
npm i truncate-text-dom
```

## Usage

```js
import {truncateText} from 'truncate-text-dom';

truncateText(
  text,  // text to truncate if it doesn't fit on one line
  maxLines = 4,  // number of lines to display (optional)
  width = 360,  // width of line container, in pixels (optional)
  expandTextLabel = '... more',  // label to use as ellipsis (optional)
  styles = {}  // styles to apply to text (optional)
)  // : { text: string, isTruncated: boolean }
```

## Available Scripts

To test it in storybook:

```sh
npm run storybook
```
