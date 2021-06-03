import initialState from './initial-state';

const userReducer = function (state = initialState.user, action) {
  switch (action.type) {
    case 'UPDATE_USER_INFO':
      return {
        ...state,
        info: {
          ...state.info,
          ...action.data
        }
      };

    case 'UPDATE_USER_PRIVACY':
      return {
        ...state,
        privacy: {
          ...state.privacy,
          ...action.data
        }
      };
    default:
      return state;
  }
};

export default userReducer;
