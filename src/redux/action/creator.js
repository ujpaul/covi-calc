import * as types from '../types';

export default (actionType, payload) => ({
  type: types[actionType],
  payload,
});