import userModel from '../data-access';
import makeCreateUser from './create-user';

const userModel = makeUserModel({ mongoose, bcrypt });

const createUser = makeCreateUser({ userModel });

const createService = Object.freeze({
  createUser
});

modules.exports = createService;