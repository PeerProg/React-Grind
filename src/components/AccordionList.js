import { useState } from 'react';
import Accordion from './Accordion';
import Spacer from './spacer';
import PeeTag from './pee-tag';

const AccordionList = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const [buttonValue, setButtonValue] = useState(1);

  const list = [
    {
      title: 'Curriculum',
      content: 'We are here to study at this great institution.'
    },
    { title: 'Goal', content: 'aspire to perspire to inspire' },
    { title: 'Motto', content: 'We Move' },
    { title: 'Experiment', content: <PeeTag /> },
    {
      title: 'Button',
      content: (
        <button
          onClick={() => {
            setButtonValue(b => b + 1);
          }}
        >
          Click me {buttonValue}
        </button>
      )
    }
  ];

  return (
    <div>
      {list.map((listItem, ind) => (
        <div key={ind}>
          <Accordion
            title={listItem.title}
            content={listItem.content}
            isOpen={ind === openCardId}
            setOpenCardId={setOpenCardId}
            id={ind}
          />
          <Spacer height={8} />
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
