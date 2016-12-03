/* eslint no-use-before-define: 0 */
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  uid_firebase: { type: String },
  role: {
    type: String,
    enum: ['donor', 'manager'],
    required: true,
  },
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

userSchema.statics.findByFirebaseId = (firebaseId, cb) => {
  if (!firebaseId) return cb({ error: 'Missing required firebase id' });

  return User.find({ uid_firebase: firebaseId })
  .then((dbUsers) => {
    if (dbUsers.length) return cb(null, dbUsers[0]);
    return cb({ error: 'There are no db Users registered with that uid.' });
  })
  .catch(error => cb({ error }));
};

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
