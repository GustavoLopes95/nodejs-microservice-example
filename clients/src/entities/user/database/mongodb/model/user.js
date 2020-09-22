
export default function makeUserSchemma(userDb) {
  const userSchema = new userDb.Schema({
    name: { 
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  });

  userDb.model('User', userSchema)
  
  return {
    insert: (user) => userDb.create(user),
    find: (params) =>  userDb.findOne(params),
  };
}