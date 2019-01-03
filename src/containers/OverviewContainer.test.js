import React from 'react';
import { shallow } from 'enzyme';

import OverviewContainer from './OverviewContainer';

function setup() {
  const wrapper = shallow(<OverviewContainer />).dive();
  return { wrapper };
}

describe('Overview Container', () => {
  it('Should render Overview', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
