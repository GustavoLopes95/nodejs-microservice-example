import buildMakeUser from './user';
import bcrypt from 'bcryptjs';

const makeUserModel = buildMakeUser(validParams, hashPassword);

export default makeUserModel;

async function hashPassword(password) {
  return await bcrypt.hash(password, 10); 
}

function validParams({ name, email, password }) {
  const isNull = (attr, attrName) => {
    if(!attr || attr.trim() === '') {
      throw Error(`${attrName} can not be null`);
    }
  }
  
  isNull(name, 'Name');
  isNull(password, 'Password');
  
  if(!(/^[\-\_a-zA-Z0-9.]*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
    throw Error('Please use a valid email only with [a-z] characteres, [0-9] numbers and (.) (_) (-) special character');
  }

  return true;
}