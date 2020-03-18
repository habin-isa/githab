import React from 'react';
import { shallow } from 'enzyme';
import FullPage from '.';

describe('FullPage component', () => {
  it('renders without crashing', () => {
    shallow(<FullPage />);
  });
});
