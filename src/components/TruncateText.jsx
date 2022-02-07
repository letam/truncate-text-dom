export default function TruncateText({ children = '' }) {
  const maxChars = 4;
  if (children.length > maxChars) {
    return children.substring(0, 4) + '...';
  }
  return children;
}

// TODO: Add button to expand text at bottom right of visible component
// TODO: Cut off extraneous whitespace
// TODO: Linkify whole text
// TODO: Handle fixed width
// TODO: Handle variable width
