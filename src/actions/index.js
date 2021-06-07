export const updateUserInfo = data => {
  return {
    type: 'UPDATE_USER_INFO',
    data
  };
};

export const updateUserPrivacy = data => {
  console.log('we dey here', data);
  return {
    type: 'UPDATE_USER_PRIVACY',
    data
  };
};

export const toggleProductUpdateComms = data => {
  return {
    type: 'UPDATE_USER_PRIVACY',
    data
  };
};
