import { TRY_TO_REGISTER, USER_REGISTERED } from '../authActionsTypes';
import { registerUser } from './registrationApi';

const tryToRegister = () => ({ type: TRY_TO_REGISTER });
const userRegistered = () => ({ type: USER_REGISTERED });

export const registerUserAction = (username, password) => (dispatch) => {
  dispatch(tryToRegister());

  return registerUser(username, password)
    .then(() => dispatch(userRegistered));
};
