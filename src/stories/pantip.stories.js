import React from 'react';

import { storiesOf } from '@storybook/react';
import { action, decorateAction  } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PostItem from '../components/PostItem';

export const task = {
  id: '1',
  title: 'Test Task',
  vote: 2,
  tags: [
    {
        url: "https://ptcdn.info/pick/204/000/000/pco8qrhcmE4voloUq6G-s.jpg",
        name: "เกาะเต่า"
    },
    {
        url: "https://ptcdn.info/pick/204/000/000/pco8qrhcmE4voloUq6G-s.jpg",
        name: "เกาะนางยวน"
    },
    {
        url: "https://ptcdn.info/pick/204/000/000/pco8qrhcmE4voloUq6G-s.jpg",
        name: "เที่ยวไทย"
    },
    {
        url: "https://ptcdn.info/pick/204/000/000/pco8qrhcmE4voloUq6G-s.jpg",
        name: "บันทึกการเดินทาง"
    },
  ]
};


const firstArgAction = decorateAction([
    vote => vote.slice(0, 1)
]);

export const actions = {
  onPinTask: action('onPinTask'),
  onVote: firstArgAction()
};




storiesOf('Pantip', module)
  .add('Post Item', () => <PostItem task={task} {...actions}  />);
  
