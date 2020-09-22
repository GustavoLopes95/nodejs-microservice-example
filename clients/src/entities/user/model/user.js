export default function buildMakeUser(validParams, makeHash) {
  return function makeUser({
    name,
    email,
    password
  }) {    
    validParams({ name, email, password });
    console.log({
      name,
      email,
      password
    });

    return Object.freeze({
      getName: () => name,
      getEmail: () => email,
      getPassword: async () => makeHash(password),
    });
  }
}