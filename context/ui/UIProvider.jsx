import { useReducer } from 'react';

import { UIContext, uiReducer } from './';

const Initial_State = {
  sideMenu: false,
  isAdding: false,
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, Initial_State);

  return (
    <UIContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};
