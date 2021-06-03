const initialState = {
  tab: {
    activeTab: 'User'
  },
  user: {
    info: {
      email: '',
      name: '',
      role: '',
      password: ''
    },
    privacy: {
      productUpdateComms: false,
      otherProductsUpdateComms: false
    }
  }
};

export default initialState;
