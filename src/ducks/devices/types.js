import { createApiConstants } from '../../utils/constant';

// Place action type constants here.
export const NAMESPACE = 'devices';
export const DEVICES_GET = createApiConstants(NAMESPACE, 'devices_get');
export const DEVICES_AVAILABILITY = createApiConstants(NAMESPACE, 'devices_avaialability');
export const DEVICE_LOADSCREEN = 'DEVICE_LOADSCREEN';