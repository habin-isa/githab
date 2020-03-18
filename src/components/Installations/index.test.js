import React from 'react';
import { shallow } from 'enzyme';
import Installations from '.';

describe('Installations component', () => {
  it('renders without crashing', () => {
    shallow(<Installations />);
  });
});
