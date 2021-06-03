export const updateUserInfo = data => {
  return {
    type: 'UPDATE_USER_INFO',
    data
  };
};

export const updateUserPrivacy = data => {
  return {
    type: 'UPDATE_USER_PRIVACY',
    data
  };
};
