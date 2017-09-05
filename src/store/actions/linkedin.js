export const CONNECT_REQUESTED = 'CONNECT_REQUESTED';
export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const CONNECT_SUCCESS = 'CONNECT_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const connectRequest = () => ({
  type: CONNECT_REQUESTED,
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUESTED,
});
