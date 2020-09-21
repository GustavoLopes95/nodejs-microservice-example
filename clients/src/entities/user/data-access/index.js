
export default function buildUserRepository(userDb) {
  return Object.freeze({
    getAll,
    find,
    insert,
    delete
  });

  const getAll = ({ userDb }) => {
    userDb.findAll();
  }

  const find = ({ userDb, id }) => {
    userDb.find(id);
  }

  const insert = ({ userDb, user }) => {
    userDb.insert(user);
  }

  const delete = ({ userDb, id }) => {
    userDb.delete(id);
  }
}