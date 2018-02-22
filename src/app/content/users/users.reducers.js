import { GET_CURRENT_USER } from './users.actions.types';

const initialState = {
  id: undefined,
  name: '',
  registerDate: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        ...state, id: action.id, name: action.name, registerDate: action.registerDate,
      };
    default:
      return state;
  }
};
