import { createContext } from 'react';

export const UIContext = createContext({ sideMenu: false, dispatch: () => {}, isAdding: false });
