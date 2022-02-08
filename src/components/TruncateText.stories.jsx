import TruncateText, { DEFAULT_WIDTH } from './TruncateText';

export default {
  title: 'TruncateText',
  component: TruncateText,
};

const Template = (args) => (
  <div
    style={{
      whiteSpace: 'pre-wrap',
      border: '1px dotted gray',
      width: DEFAULT_WIDTH,
    }}
  >
    <TruncateText {...args} />
  </div>
);

const DUMMY_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// 1 Line
export const Case1 = Template.bind({});
Case1.args = {
  children: 'Lorem ipsum',
};

// Lots of lines
export const Case2 = Template.bind({});
Case2.args = {
  children: DUMMY_TEXT,
};
