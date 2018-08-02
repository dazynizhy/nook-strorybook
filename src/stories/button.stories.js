import React from 'react';

import { storiesOf } from '@storybook/react';
import { action, configureActions } from '@storybook/addon-actions';
import { Button, Welcome } from '@storybook/react/demo';


import { linkTo ,LinkTo, hrefTo } from '@storybook/addon-links';




action('button-click')

//=== BUTTON ADONS ACTION ===//
// storiesOf('Button', module)
// .add('default view', () => (
// <Button onClick={ action('button-click') }>
//     Hello World!
// </Button>
// ))

//=== BUTTON ADONS LINK ===//
storiesOf('Button', module)
.add('First', () => (
<Button onClick={linkTo('Button', 'Second')}>Go to "Second"</Button>
))
.add('Second', () => (
<Button onClick={linkTo('Button', 'First')}>Go to "First"</Button>
))
.add('go to pantip', () => (
    //linkTo(() => 'Toggle', () => 'off')
    //linkTo('Toggle') // Links to the first story in the 'Toggle' kind
    <Button onClick={linkTo('Pantip', 'off')}>Post item</Button>
));


// LINK TO select
storiesOf('LSelect', module)
  .add('Index', () => (
    <select value="Index" onChange={linkTo('LSelect', e => e.currentTarget.value)}>
      <option>Index</option>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
    </select>
  ))
  .add('First', () =>  <LinkTo story="Index">Go back</LinkTo>)
  .add('Second', () => <LinkTo story="Index">Go back</LinkTo>)
  .add('Third', () => <LinkTo story="Index">Go back</LinkTo>);


//If you want to get an URL for a particular story,  
storiesOf('LHref', module)
.add('log', () => {
hrefTo('LHref', 'log').then(action('URL of this story'));

return <span>See action logger</span>;
});




///// BACKGROUND ////
// import backgrounds from "@storybook/addon-backgrounds";
// storiesOf("Button", module)
// .addDecorator(backgrounds([
//   { name: "twitter", value: "#00aced", default: true },
//   { name: "facebook", value: "#3b5998" },
// ]))
// .add("background", () => <Button>Click me</Button>);


import addonBackgrounds from "@storybook/addon-backgrounds";
export const backgrounds = addonBackgrounds([
  { name: "twitter", value: "#00aced"},
  { name: "facebook", value: "#3b5998" },
  { name: "Pantip", value: "#3C3963" , default: true }
]);
storiesOf("Button", module)
  .addDecorator(backgrounds)
  .add("background", () => <Button>Click me</Button>);


//////////////////////////////



////////////// HOST ///////////
//Properties
// host({
//   title: <string>,
//   hr: <boolean>,
//   align: <string>,
//   height: <number | string>,
//   width: <number | string>,
//   background: <boolean | number | string>,
//   backdrop: <boolean | number | string>,
//   cropMarks: <boolean>,
//   border: <boolean | number | string>,
//   padding: <number | string>,
// });
import { host } from 'storybook-host';
storiesOf('Host helpers.storybook', module)
.addDecorator(
  host({
    title: 'A host container for components under test. กำหนดหัวข้อได้เองด้วยนะจ้ะ',
    align: 'center bottom',
    height: '80%',
    width: 400,
  }),
)
.add('Host', () => <Button>Click Host</Button>);


//////////////////////////////