import React from 'react';
import { shallow } from 'enzyme';

import DevicesList from './DevicesList';

function setup() {
  const props = {
    getDevices: jest.fn(), // async promise test
    devices: [{ os: 'Android', descriptorId: 'Nexus_lg' }]  // props test
  }
  const wrapper = shallow(<DevicesList.WrappedComponent {...props} />).dive();
  return { wrapper };
}

describe('DeviceList Container', () => {
  it('Should mock promise and render cards', () => {
    const { wrapper } = setup();
    const DeviceCardEl = wrapper.find('#device-card');
    expect(DeviceCardEl).toHaveLength(1);
  });
});