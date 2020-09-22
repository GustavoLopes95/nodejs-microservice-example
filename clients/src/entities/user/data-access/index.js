import userDb from '../database/mongodb/model';
//use to import other db types import userDb from '../database/pgdb';

import buildUserRepository from './user-repository';

const userRepository = buildUserRepository(userDb);

export default userRepository;