const initialState = {
  activeTab: 'User'
};

const tabReducer = function (state = initialState, action) {
  switch (action.type) {
    case "SET_ACTIVE_TAB":
      return Object.assign({}, state, {activeTab: action.data});
    default:
      return state;
  }
};

export default tabReducer;
