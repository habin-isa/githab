import React from 'react';
import { shallow } from 'enzyme';
import About from '.';

describe('About component', () => {
  it('renders without crashing', () => {
    shallow(<About />);
  });
});
