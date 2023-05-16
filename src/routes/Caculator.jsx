import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import Cpm from '../components/theory/cpm';
import Risk from '../components/theory/risk';
import Pert from '../components/theory/pert';
import Val from '../components/theory/val';

export default function Caculator() {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <>
      <MDBTabs className='m-5'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            CPM
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Risk
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
            PERT
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
            VAL
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent className='m-5'>
        <MDBTabsPane show={basicActive === 'tab1'}><Cpm /></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}><Risk /> </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}><Pert /> </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab4'}><Val /></MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}