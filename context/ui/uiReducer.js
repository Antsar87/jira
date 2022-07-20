export const uiReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN':
      return {
        ...state,
        sideMenu: true,
      };

    case 'CLOSE':
      return {
        ...state,
        sideMenu: false,
      };

    case 'ISADDING':
      return {
        ...state,
        isAdding: action.payload,
      };

    default:
      return state;
  }
};
