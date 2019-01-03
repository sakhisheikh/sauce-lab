// import { createApiAction } from '../../utils/action';
import { DEVICES_GET, DEVICES_AVAILABILITY, DEVICE_LOADSCREEN } from './types';
import api from './api';
// Place simple actions here.


// fetch devices
const getDevicesRequest = () => ({
  type: DEVICES_GET.REQUEST,
});

const getDevicesSuccess = (payload, record) => ({
  type: DEVICES_GET.SUCCESS,
  payload,
  record,
});

const getDevicesFailure = (payload, record) => ({
  type: DEVICES_GET.FAILURE,
  payload,
  record,
});

const getDevicesReset = (payload, record) => ({
  type: DEVICES_GET.RESET,
});

export const getDevices = (payload) => (dispatch) => {
  dispatch(getDevicesReset());
  dispatch(getDevicesRequest());

  return api.getDevices(payload).then(
    ({ data }) => dispatch(getDevicesSuccess(data)),
    (error) => {
      dispatch(getDevicesFailure(error));
      throw error;
    },
  );
};

// check devices availability

const checkAvailabilityRequest = () => ({
  type: DEVICES_AVAILABILITY.REQUEST,
});

const checkAvailabilitySuccess = (payload, record) => ({
  type: DEVICES_AVAILABILITY.SUCCESS,
  payload,
  record,
});

const checkAvailabilityFailure = (payload, record) => ({
  type: DEVICES_AVAILABILITY.FAILURE,
  payload,
  record,
});

export const checkAvailability = (payload) => (dispatch) => {
  dispatch(checkAvailabilityRequest());

  return api.checkAvailability(payload).then(
    ({ data }) => dispatch(checkAvailabilitySuccess(data)),
    (error) => {
      dispatch(checkAvailabilityFailure(error));
      throw error;
    },
  );
};

// loading

export const loadScreen = isLoading => {
  return {
    type: DEVICE_LOADSCREEN,
    payload: {
      isLoading,
    },
  };
};

// export const getDevices = (dispatch) => (region) => createApiAction(constants, () => api.getDevices({ region }));
