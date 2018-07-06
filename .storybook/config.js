import { configure } from '@storybook/react';
import '../src/index.css';

// function loadStories() {
//   require('../src/stories');
// }

function loadStories() {
  const req = require.context('../src/stories', true, /\-story\.js$/);
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);
