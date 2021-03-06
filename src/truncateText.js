export const DEFAULT_MAX_LINES = 4;
export const DEFAULT_WIDTH = 360;
export const DEFAULT_EXPAND_TEXT_LABEL = '... more';

/**
 * Produces truncated version of text that fits within container of specified max number of lines and width.
 * Considers the style properties of text, and leaves room for an ending label/button.
 * @param {string} text The text to truncate
 * @param {number=} maxLines The max number of lines which the text should occupy after truncation
 * @param {number=} width Width of container displaying truncated text
 * @param {string=} expandTextLabel The label of the button to expand the text (Used to calculate truncated text)
 * @param {Object.<string, string>=} styles Styles to apply to text size calculation (i.e. font, letter-spacing)
 * @returns {{ text: string, isTruncated: boolean }} Object containing output value and truncated status
 */
export function truncateText(
  text,
  maxLines = DEFAULT_MAX_LINES,
  width = DEFAULT_WIDTH,
  expandTextLabel = DEFAULT_EXPAND_TEXT_LABEL,
  styles = undefined
) {
  let isTruncated = false;
  const lineContainer = document.createElement('span');
  if (styles) {
    Object.entries(styles).forEach(([prop, value]) => {
      lineContainer.style[prop] = value;
    });
  }
  lineContainer.style.zIndex = '-1';
  lineContainer.style.visibility = 'hidden';
  lineContainer.style.position = 'absolute';
  lineContainer.style.top = '0';
  lineContainer.style.left = '0';

  const textArray = splitStringOnSpacesAndNewlines(text);

  document.body.appendChild(lineContainer);

  let textArrayIndex = 0;
  let linesRemaining = maxLines;
  let lineContent = '';
  let previousLineContent = '';
  let truncatedText = '';

  while (linesRemaining > 0 && textArrayIndex < textArray.length) {
    lineContent = '';
    lineContainer.innerText = '';

    if (linesRemaining === 1) {
      // Add expandTextLabel to lineContent to include in width of last line before truncation; will remove it from beginning of value later
      lineContent = expandTextLabel;
    }

    while (
      lineContainer.clientWidth < width &&
      textArrayIndex < textArray.length
    ) {
      previousLineContent = lineContent; // To restore previous content in case next word added results in text overflow

      if (textArray[textArrayIndex] === ' ') {
        lineContent += ' ';
      } else if (textArray[textArrayIndex] === '\n') {
        lineContent += '\n';
        textArrayIndex++;
        break;
      } else {
        lineContent += textArray[textArrayIndex] + ' ';
      }

      lineContainer.innerText = lineContent;
      if (lineContainer.clientWidth >= width) {
        lineContent = previousLineContent;
        lineContainer.innerText = lineContent;
        break;
      } else {
        textArrayIndex++;
        if (lineContainer.clientWidth === width) {
          break;
        }
      }
    }

    if (linesRemaining === 1) {
      // Remove expandTextLabel from beginning of line
      lineContent = lineContent.slice(expandTextLabel.length);
      lineContainer.innerText = lineContent;

      if (lineContent === '\n') {
        // Remove trailing newlines of truncated text
        while (truncatedText.endsWith('\n')) {
          truncatedText = truncatedText.trimEnd();
        }
        isTruncated = true;
      } else if (lineContent.endsWith('\n')) {
        isTruncated = true;
      } else if (textArrayIndex <= textArray.length - 1) {
        // Check if remaining text can fit without truncation
        let currentTextArrayIndex = textArrayIndex;
        let currentLineContent = lineContent;

        // eslint-disable-next-line no-loop-func
        const isWordsRemaining = () => textArrayIndex <= textArray.length - 1;
        while (isWordsRemaining() && lineContainer.clientWidth <= width) {
          if (textArray[textArrayIndex] === '\n') {
            break;
          } else {
            lineContent += textArray[textArrayIndex] + ' ';
          }
          lineContainer.innerText = lineContent;
          textArrayIndex++;
        }

        const isLastIndexReached = textArrayIndex > textArray.length - 1;
        isTruncated = !isLastIndexReached || lineContainer.clientWidth > width;
        if (isTruncated) {
          lineContent = currentLineContent;
          textArrayIndex = currentTextArrayIndex;
        }
      }

      if (isTruncated) {
        // Remove spaces at end
        lineContent = lineContent.trimEnd();
      }
    }

    truncatedText += lineContent;

    linesRemaining--;
  }

  document.body.removeChild(lineContainer);

  return { text: truncatedText, isTruncated: isTruncated };
}

/**
 * Produces array composed of string which is split on spaces, including entries for newlines and consecutive spaces.
 * @param {string} string The string to split
 * @returns {string[]} The split string
 */
function splitStringOnSpacesAndNewlines(string) {
  let array = [];
  let word = '';
  for (let char of string.split('')) {
    if (char === ' ') {
      if (word) {
        array.push(word);
        word = '';
      } else {
        array.push(char);
      }
    } else if (char === '\n') {
      if (word) {
        array.push(word);
        word = '';
      }
      array.push(char);
    } else {
      word += char;
    }
  }
  if (word) {
    array.push(word);
    word = '';
  }
  return array;
}
