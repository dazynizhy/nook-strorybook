import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Welcome } from '@storybook/react/demo';

import { withKnobs, withKnobsOptions , text, boolean, number ,color , object , array ,select , selectV2 , date , button  } from '@storybook/addon-knobs/react';
const stories = storiesOf('Storybook Knobs', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
//stories.addDecorator(withKnobs);
//knob option
stories.addDecorator(withKnobsOptions({
    debounce: { wait: number, leading: boolean}, // Same as lodash debounce.
    timestamps: true // Doesn't emit events while user is typing.
}));


/////////////////// NOTE //////////////
//1. Knobs for React props
import { withNotes } from '@storybook/addon-notes';
stories.add('with a button', withNotes('การทำ knob แก้ข้อมูลได้โด้ยไม่ต้องแก้ code')(() => (
  <Button disabled={boolean('Disabled', false)} >
    {text('Label', 'Hello Storybook')}
  </Button>
)));



// Knobs as dynamic variables.
stories.add('as dynamic variables', () => {    

//BOOLEAN
const groupBoolean = 'GROUP-boolean'
const Vboolean = boolean('Disabled', false , groupBoolean)
const Vbooleanname = text('Name button', 'Submit',groupBoolean);

//TEXT
const groupText = 'GROUP-text'
const name = text('Name', 'Arunoda Susiripala',groupText);  
const contentText = `I am ${name} `;

//NUMBER AND NUMBER bound by range 
const groupNumber = 'GROUP-number'
const age = number('Age', 89, {}, groupNumber);
const ageOptions = {
range: true,
min: 60,
max: 90,
step: 1,
};
const ageRang = number('Age Rang', 100, ageOptions, groupNumber );  
const contentNumber = ` I'm ${age} years old.  and number rang: ${ageRang}`;

//COLOR
const groupColor = 'GROUP-color'
const Vcolor = color('Color', '#0000ff',groupColor);  

//OBJECT
const groupObject = 'GROUP-object'
const Vobject =  {
    backgroundColor: '#f7f7f7',
    color: '#e5c717'
  };
const contentObject = object('Object', Vobject , groupObject);  

//ARRAY
const groupArray = 'GROUP-array'
const Varray =  ['http://www.pantip.com']
const contentArray = array('Array', Varray, ',' , groupArray);  
const data = contentArray.map((contentArray)=>{
    return (  
        <div>
            <span className="text-icon-left txt-purple-pantip-300"><i className="material-icons md-18"></i>
                <a href="#">{Varray}</a>
            </span>
        </div>
    )
})

//SELECT
const groupSelect = 'GROUP-select'
const optionsSelect = {
    red: 'Red',
    blue: 'Blue',
    yellow: 'Yellow',
  };
const contentSelect = select('Select',optionsSelect ,'red', groupSelect); 
 

//SELECT
const groupSelectV2 = 'GROUP-selectV2'
const optionsSelectV2 = {
    Red: 'red',
    Blue: 'blue',
    Yellow: 'yellow',
    Rainbow: ['red', 'orange', 'etc'],
    None: null,
  };
const contentSelectV2 = select('SelectV2',optionsSelectV2 ,'blue', groupSelectV2); 
 
//DATE
const groupDate = 'GROUP-date'
const contentDate = date('Date', new Date('Jan 20 2017') ,groupDate);  
// function myDateKnob(name, defaultValue) {
//     const stringTimestamp = date(name, defaultValue)
//     return new Date(stringTimestamp)
// }

//BUTTON
const groupButton = 'GROUP-button'
const handler = () => doSomething('foobar');
const contentButton = button('Button knob', handler ,groupButton);  


    return (
            <div>
                <div style={contentObject}> Name: {contentText}</div>
                <div>Old :{contentNumber}</div>
                <div> foverite color : {contentSelect}</div>
                <div> foverite color V2 : {contentSelectV2}</div>
                <div> birthday : {contentDate}</div>
                <div> {contentButton}</div>
                <div className="pt-block pt-block-purple-2">
                    <div className="pt-block-header pt-block-header-purple-1">
                     <h6 className="txt-yellow-700">ลิงก์</h6>
                    </div>
                    <div className="p-all-16"> 
                        {data}
                     </div>
                </div>
                <Button disabled={Vboolean} style={{  backgroundColor: Vcolor }}>
                    {Vbooleanname}
                </Button>
            </div>
        );
});