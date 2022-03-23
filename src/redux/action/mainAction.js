import axios from 'axios';
import creator from './creator';

const mainAction = (method, baseUrl, endpoint, actionType, data) => (dispatch) => {
  axios.defaults.timeout = 30 * 1000;
  dispatch(
    creator(actionType, {
      isLoading: true,
    }),
  );

  axios[method](baseUrl + endpoint, data)
    .then((response) => {
      dispatch(creator(actionType, response?.data));
    })
    .catch((error) => {
      dispatch(
        creator(actionType, {
          error:
            error?.response?.data?.error ||
            error?.response?.data?.message ||
            error?.message ||
            'Something went wrong',
        }),
      );
    });
};

export { mainAction };