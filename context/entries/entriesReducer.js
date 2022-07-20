export const entriesReducer = (state, action) => {
  switch (action.type) {
    case 'add-entry':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    default:
      return state;
  }
};
