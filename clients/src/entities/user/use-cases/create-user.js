export default function makeCreateUser({ userDb, makeUserModel }) {
  return async function createUser({
      name,
      password,
      email,
    }) {
    const user = makeUserModel({ name, password, email });
    console.log(user);
    if(userDb.find({ email: user.getEmail() })) throw { code: 400, message: 'User already exists'};

    const hash = await user.getPassword();
    const newUser = await userDb.insert({ 
      name: user.getName(), 
      password: hash,
      email:  user.getEmail()
    });

    return newUser;
  }
}