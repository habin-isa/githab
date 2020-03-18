import React from 'react';
import { shallow } from 'enzyme';
import Projects from '.';

describe('Projects component', () => {
  it('renders without crashing', () => {
    shallow(<Projects />);
  });
});
