import initialState from './initial-state';

const userReducer = function (state = initialState.user, action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
