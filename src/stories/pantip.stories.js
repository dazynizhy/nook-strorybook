import React from 'react';
import '../../src/dist/css/main.css';

import PostItem from '../components/PostItem';
import { storiesOf ,  setAddon} from '@storybook/react';
import { action, decorateAction  } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { baseFonts } from '@storybook/components';


export const task = {
  id: '1',
  title: 'การบินไทยและไทยสมายล์ร่วมสนับสนุนบัตรโดยสารทีมผู้เชี่ยวชาญที่ให้ความช่วยเหลือค้นหานักกีฬาฟุตบอลเยาวชนทีมหมูป่าอะคาเดมี่',
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



//info Global options
import { setDefaults } from '@storybook/addon-info';

const stylesheet = {
    button: {
      base: {
        fontFamily: 'sans-serif',
        fontSize: '12px',
        display: 'block',
        position: 'fixed',
        border: 'none',
        background: '#28c',
        color: '#fff',
        padding: '5px 15px',
        cursor: 'pointer',
      },
      topRight: {
        top: 0,
        right: 0,
        borderRadius: '0 0 0 5px',
      },
    },
    info: {
      position: 'fixed',
      background: 'white',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      padding: '0 40px',
      overflow: 'auto',
      zIndex: 99999,
    },
    children: {
      position: 'relative',
      zIndex: 0,
    },
    infoBody: {
      ...baseFonts,
      fontWeight: 300,
      lineHeight: 1.45,
      fontSize: '15px',
      border: '1px solid #eee',
      padding: '20px 40px 40px',
      borderRadius: '2px',
      backgroundColor: '#fff',
      marginTop: '20px',
      marginBottom: '20px',
    },
    infoContent: {
      marginBottom: 0,
    },
    infoStory: {},
    jsxInfoContent: {
      borderTop: '1px solid #eee',
      margin: '20px 0 0 0',
    },
    header: {
      h1: {
        margin: 0,
        padding: 0,
        fontSize: '35px',
        color: 'red'
      },
      h2: {
        margin: '0 0 10px 0',
        padding: 0,
        fontWeight: 400,
        fontSize: '22px',
      },
      body: {
        borderBottom: '1px solid #eee',
        paddingTop: 10,
        marginBottom: 10,
      },
    },
    source: {
      h1: {
        margin: '20px 0 0 0',
        padding: '0 0 5px 0',
        fontSize: '25px',
        borderBottom: '1px solid #EEE',
      },
    },
    propTableHead: {
      margin: '30px 0 0 0',
    },
  };

//Options and Defaults
setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: false, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  propTables: [/* Components used in story */], // displays Prop Tables with this components
  propTablesExclude: [], // Exclude Components from being shown in Prop Tables section. Accepts an array of component classes or functions.
  styles: {
    ...stylesheet
  }, // Overrides styles of addon. The object should follow this shape: https://github.com/storybooks/storybook/blob/master/addons/info/src/components/Story.js#L19. This prop can also accept a function which has the default stylesheet passed as an argument.
  components: {}, // Overrides components used to display markdown
  maxPropsIntoLine: 1, // Max props to display per line in source code
  maxPropObjectKeys: 10, // Displays the first 10 characters of the prop name
  maxPropArrayLength: 10, // Displays the first 10 items in the default prop array
  maxPropStringLength: 100, // Displays the first 100 characters in the default prop string,
  //TableComponent: props => {}, // Override the component used to render the props table
});


//Usage with options
import { withInfo } from '@storybook/addon-info';
//Basic usage
// storiesOf('Pantip', module)
//   .add('Post Item', withInfo(`
//   description or documentation postItem pantip style

//   ~~~js
//   <PostItem  task="task" />
//   ~~~

// `)(() => <PostItem task={task} {...actions}  />));
  

//Usage with options
// storiesOf('Pantip', module)
//   .add('Post Item', withInfo({
//     styles: {
//         header: {
//           h1: {
//             color: 'red'
//           }
//         }
//     },
//     text: 'String or React Element with docs about my component Pantip style', // Warning! This option's name will be likely renamed to "summary" in 3.3 release. Follow this PR #1501 for details
//     // other possible options see in Global options section below
//   })(() => <PostItem task={task} {...actions}  />));



//Deprecated usage
import infoAddon from '@storybook/addon-info';
setAddon(infoAddon);
storiesOf('Pantip')
.addWithInfo(
'Post Item',
`This is the basic usage with the button with providing a label to show the text.`,
() => (
    <PostItem task={task} {...actions}  />
),
);


