import {
  truncateText,
  DEFAULT_MAX_LINES,
  DEFAULT_WIDTH,
  DEFAULT_EXPAND_TEXT_LABEL,
} from '../truncateText';

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
