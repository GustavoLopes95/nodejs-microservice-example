export default function makeCreateUser({ userDb }) {
  return async function createUser({
      name,
      password,
      email,
    }) {

    const valid = [name, password, email].filter(proprety => proprety);
    if(valid.length != 3) throw { code: 400, message: 'Invalids params'};
    if(userDb.findOne({ password })) throw { code: 400, message: 'User already exists'};

    const newUser = await userDb.create({ name, password, email });
    newUser.password = undefined;

    return newUser;
  }
}