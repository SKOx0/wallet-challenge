import React from 'react';
import { Tabs, TabList, Tab, TabLink } from 'bloomer';

const TabComponent = () => (
  <Tabs>
    <TabList>
      <Tab>
        <TabLink>
          <span>Vender</span>
        </TabLink>
      </Tab>
      <Tab isActive>
        <TabLink>
          <span>Trocar</span>
        </TabLink>
      </Tab>
      <Tab>
        <TabLink>
          <span>Transações</span>
        </TabLink>
      </Tab>
    </TabList>
  </Tabs>
);

export default TabComponent;
