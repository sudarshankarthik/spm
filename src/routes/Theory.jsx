import React, { useEffect, useState } from 'react';
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
import { useSearchParams } from 'react-router-dom';

export default function Theory() {
  const [searchParams, setSearchParams] = useSearchParams();
  const topics = ['cpm','pert','risk','val']
  var topic = searchParams.get('topic')
  if (!topics.includes(topic))
    topic = 'cpm'
  const [basicActive, setBasicActive] = useState(topic);

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  useEffect(() => {
    setSearchParams({'topic': basicActive}) 
    }, [basicActive, setSearchParams])
  
  return (
    <>
      <MDBTabs className='m-5'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('cpm')} active={basicActive === 'cpm'}>
            CPM
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('risk')} active={basicActive === 'risk'}>
            Risk
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('pert')} active={basicActive === 'pert'}>
            PERT
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('val')} active={basicActive === 'val'}>
            VAL
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent className='m-5'>
        <MDBTabsPane show={basicActive === 'cpm'}><Cpm /></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'risk'}><Risk /> </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'pert'}><Pert /> </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'val'}><Val /></MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}