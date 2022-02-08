const DEFAULT_MAX_LINES = 4;
export const DEFAULT_WIDTH = 360;
const DEFAULT_EXPAND_TEXT_LABEL = '... more';

export default function TruncateText({
  children = '',
  maxLines = DEFAULT_MAX_LINES,
  width = DEFAULT_WIDTH,
  expandTextLabel,
  styles,
}) {
  const { text: truncatedText, isTruncated } = truncateText(
    children,
    maxLines,
    width,
    expandTextLabel,
    styles
  );

  if (isTruncated) {
    return (
      <>
        {truncatedText} <ExpandTextLabel />
      </>
    );
  }

  return children;
}

function ExpandTextLabel({ label = DEFAULT_EXPAND_TEXT_LABEL }) {
  return <span style={{ whiteSpace: 'nowrap' }}>{label}</span>;
}

/**
 * Returns truncated version of text, such that it would fit within container of specified max number of lines and width.
 * Takes into account the font of text, and leaves room for a labeled button to expand text.
 * @param {string} text - The text to truncate
 * @param {number=} maxLines - The max number of lines which the text should occupy after truncation
 * @param {number=} width - Width of container displaying truncated text
 * @param {string=} expandTextLabel - The label of the button to expand the text (Used to calculate truncated text)
 * @param {Object.<string, string>=} styles - Styles to apply to text size calculation (i.e. font, letter-spacing)
 * @returns {{ text: string, isTruncated: boolean }}
 */
function truncateText(
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

  const textArraySplitOnSpaces = text.split(' ');
  const textArraySplitOnSpacesAndNewlines = [];
  textArraySplitOnSpaces.forEach((chunk) => {
    if (!chunk.includes('\n')) {
      textArraySplitOnSpacesAndNewlines.push(chunk);
    } else {
      const chunkSplitOnNewlines = chunk.split('\n');
      chunkSplitOnNewlines.forEach((word) => {
        if (word === '') {
          textArraySplitOnSpacesAndNewlines.push('\n');
          // If first character of chunk is not a new line, then that means that there is presence of double new line (i.e. '\n\n')
          if (chunk[0] !== '\n') {
            textArraySplitOnSpacesAndNewlines.push('\n');
          }
        } else {
          textArraySplitOnSpacesAndNewlines.push(word);
        }
      });
    }
  });
  const textArray = textArraySplitOnSpacesAndNewlines;

  document.body.appendChild(lineContainer);

  let textArrayIndex = 0;
  let linesRemaining = maxLines;
  let lineContent = '';
  let previousLineContent = '';
  let truncatedText = '';

  while (linesRemaining > 0) {
    lineContent = '';
    lineContainer.innerText = '';

    if (linesRemaining === 1) {
      // Add expandTextLabel to lineContent to include in width of last line before truncation; will remove it from beginning of value later
      lineContent = expandTextLabel;
    }

    while (lineContainer.clientWidth < width) {
      previousLineContent = lineContent; // To restore previous content in case next word added results in text overflow

      if (textArray[textArrayIndex] === '') {
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

      // Remove trailing newlines of truncated text
      if (lineContent === '\n') {
        while (truncatedText.endsWith('\n')) {
          truncatedText = truncatedText.trimEnd();
        }
      }

      isTruncated = textArray[textArrayIndex] !== undefined;
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
