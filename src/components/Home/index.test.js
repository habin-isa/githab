import React from 'react';
import { shallow } from 'enzyme';
import Home from '.';

describe('Home component', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });
});
