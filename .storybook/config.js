import { configure } from '@storybook/react';
import '../src/index.css';

function loadStories() {
  //const req = require.context('../src/stories', true, /\-story\.js$/);
  const req = require.context('../src/stories', true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);
