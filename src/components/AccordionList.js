import { useState } from 'react';
import Accordion from './Accordion';

const AccordionList = () => {
  const [showContent, setShowContent] = useState(false);

  const list = [
    {title: "Curriculum", content: 'We are here to study at this great institution.'},
    {title: "Goal", content: 'aspire to perspire to inspire'},
    {title: "Motto", content: 'We Move'}
  ];

  return (
    <div>
      { list.map((listItem, ind) => 
          <Accordion
            title={listItem.title} 
            content={listItem.content} 
            showContent={showContent} 
            setShowContent={setShowContent}
            key={ind}
          />
        )
      }
    </div>
  )
}

export default AccordionList;