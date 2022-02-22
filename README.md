# truncate-text


## Installation

To install this library into your web project:

### `npm i truncate-text-dom`


## Usage/Import

```
import {truncateText} from 'truncate-text';
```

Function signature:
```
truncateText(
  text,  // text to truncate if it doesn't fit on one line
  maxLines = 4,  // number of lines to display (optional)
  width = 360,  // width of line container, in pixels (optional)
  expandTextLabel = '... more',  // label to use as ellipsis (optional)
  styles = {}  // styles to apply to text (optional)
);
```


## Available Scripts

To test it in storybook:

### `npm run storybook`
