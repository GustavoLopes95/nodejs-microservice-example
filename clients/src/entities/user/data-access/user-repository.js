
export default function buildUserRepository(userDb) {
  return Object.freeze({
    getAll,
    find,
    insert,
    remove
  });

  async function getAll({ userDb }) {
    userDb.getAll();
  }

  async function find({ userDb, id }) {
    userDb.find(id);
  }

  async function insert({ userDb, user }) {
    userDb.insert(user);
  }

  async function remove({ userDb, id }) {
    userDb.remove(id);
  }
}