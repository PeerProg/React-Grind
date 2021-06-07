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
      productUpdateComms: true,
      otherProductsUpdateComms: true
    }
  }
};

export default initialState;
