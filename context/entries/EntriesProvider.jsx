import { useReducer } from 'react';

import { v4 as uuid } from 'uuid';

import { EntriesContext, entriesReducer } from './';

const InitialState = {
  entries: [
    {
      _id: uuid(),
      description:
        'Cupidatat sint eiusmod commodo dolor dolor minim fugiat dolore excepteur sint et proident quis.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuid(),
      description: 'Id id tempor sit do id duis nostrud anim nostrud.',
      status: 'in-progress',
      createdAt: Date.now() - 100000,
    },
    {
      _id: uuid(),
      description:
        'Eiusmod est labore magna laboris voluptate non eu amet minim dolore aute dolore fugiat.',
      status: 'finished',
      createdAt: Date.now() + 100000,
    },
  ],
};

export const EntriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, InitialState);

  const NewEntry = (description) => {
    const entry = {
      _id: uuid(),
      description,
      status: 'pending',
      createdAt: Date.now(),
    };

    console.log(entry);
    dispatch({ type: 'add-entry', payload: entry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, dispatch, NewEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
