// Place reducers here.

import { DEVICES_GET, DEVICES_AVAILABILITY, DEVICE_LOADSCREEN } from './types';

const INITIAL_STATE = {
  devices: [],
  checkAvailability: [],
  loadScreen: false,
}

export default function reducer(
  state = INITIAL_STATE,
  action = { type: '' },
) {
  switch (action.type) {
    case DEVICES_GET.REQUEST:
    case DEVICES_GET.RESET:
    case DEVICES_AVAILABILITY.REQUEST:
      return {
        ...state,
      };
    case DEVICES_GET.SUCCESS:
      return {
        ...state,
        devices: action.payload,
      };
    case DEVICES_AVAILABILITY.SUCCESS:
      console.log(action)
      return {
        ...state,
        checkAvailability: action.payload,
      };
    case DEVICE_LOADSCREEN:
      return {
        ...state,
        loadScreen: action.payload.isLoading,
      };
    case DEVICES_GET.FAILURE:
    case DEVICES_AVAILABILITY.FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
