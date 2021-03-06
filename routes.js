import React from 'react';
import { Route, IndexRoute } from 'react-router';

import app from './components/app';
import * as pages from './pages';

const menu = [
  {
    to: '/',
    label: 'Home',
  },
  {
    label: 'Solutions',
    items: [
      {
        to: '/publishers',
        label: 'for Educational Publishers',
      },
      {
        to: '/schools',
        label: 'for Schools & Teachers',
      },
      {
        to: '/corporate',
        label: 'for Corporate Training',
      },
    ],
  },
  {
    label: 'Products',
    items: [
      {
        to: '/authoring-tool',
        label: 'Learn Forward Author',
      },
      {
        to: '/hypersay',
        label: 'Hypersay',
      },
    ],
  },
  {
    label: 'About',
    items: [
      {
        to: '/team',
        label: 'Team & Advisors',
      },
      {
        to: '/contact',
        label: 'Contact',
      },
    ],
  },
  {
    to: '/hypersay',
    label: 'Hypersay', // -deleted here
  },
];

const meta = {
  '/': {
    title: 'Learn Forward - Making the Digital Classroom Work',
    description: 'We help publishers create collaborative digital textbooks and we help teachers design & deliver lessons in a digital format.',
  },
  '/publishers': {
    title: 'Educational Publishers',
    description: 'Learn Forward - Solutions for Educational Publishers',
  },
  '/schools': {
    title: 'Schools & Teachers',
    description: 'Learn Forward - Solutions for Schools & Teachers',
  },
  '/corporate': {
    title: 'Corporate Training',
    description: 'Learn Forward - Solutions for Corporate Training',
  },
  '/authoring-tool': {
    title: 'LFA - Learn Forward Author',
    description: 'Digital publishing tools for rich HTML5 publications',
  },
  '/hypersay': {
    title: 'Hypersay',
    description: 'Hypersay - Distract the Distracted!',
  },
  '/team': {
    title: 'The team',
    description: 'Team & Advisors',
  },
  '/contact': {
    title: 'Contact',
    description: 'Digital publishing tools for rich HTML5 publications',
  },
};

export default (
  <Route component={app} menu={menu} meta={meta} path='/'>
    <IndexRoute component={pages.home} />
    <Route component={pages.publishers} path='publishers' />
    <Route component={pages.schools} path='schools' />
    <Route component={pages.corporate} path='corporate' />
    <Route component={pages.lfa} path='lfa' />
    <Route component={pages.lfa} path='authoring-tool' />
    <Route component={pages.lfp} path='lfp' />
    <Route component={pages.lfp} path='hypersay' />
    <Route component={pages.team} path='team' />
    <Route component={pages.contact} path='contact' />
    <Route component={pages.demo} path='demo' />
    <Route component={pages.request} path='request' />
    <Route component={pages.requestResp} path='requestResp' />
    <Route component={pages.signUp} path='signUp' />
    <Route component={pages.signUpResp} path='signUpResp' />
    <Route component={pages.notFound} path="*" />
  </Route>
);
