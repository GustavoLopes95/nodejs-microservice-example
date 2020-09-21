
export default function makeUserModel({ userDb, crypt }) {
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

  userSchema.pre('save', async function(next) {
    const hash = await crypt.hash(this.password, 10);

    this.password = hash;

    next();
  });
  
  return userDb.model('User', userSchema);
}