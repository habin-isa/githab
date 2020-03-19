import React from 'react';
import { shallow } from 'enzyme';
import IconCol from '.';

describe('IconCol component', () => {
  it('renders without crashing', () => {
    shallow(<IconCol />);
  });
});
