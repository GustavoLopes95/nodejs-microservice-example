import userRepository from '../data-access';
import makeUserModel from '../model';
import makeCreateUser from './create-user';

const createUser = makeCreateUser({ userRepository, makeUserModel });

export default Object.freeze({
  createUser
});
export { createUser };