/* eslint no-use-before-define: 0 */
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  uid_firebase: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  email: {
    type: String,
    required: true,
  },
  phone: { type: Number },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  location: { type: String },
  registered: {
    type: Date,
    default: Date.now,
  },
  password: { type: String },
  photoUrl: { type: String },
  settings: {},
});

userSchema.statics.addNewUser = (userObj, cb) => {
  if (!userObj) return cb({ error: 'Missing user object' });

  return User.create(userObj)
  .then((dbUser) => {
    const dbUserRef = dbUser;
    delete dbUserRef.password;
    delete dbUserRef.email;
    return cb(null, dbUser);
  })
  .catch(error => cb({ error }));
};

const User = mongoose.model('User', userSchema);
export default User;
