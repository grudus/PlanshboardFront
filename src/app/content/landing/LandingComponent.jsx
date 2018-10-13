import React from 'react';
import Item from './landingItemComponent';
import './landing.scss';
import items from '../Tabs';

const itemObjects = items.map(item => (
  <div key={item.path}>
    <Item label={item.label} path={item.path} icon={item.icon} />
  </div>
));


export default () => (
  <article className="landing-wrapper">
    <section className="landing-items-wrapper">
      {itemObjects}
    </section>
  </article>
);
