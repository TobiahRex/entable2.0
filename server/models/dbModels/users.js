import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  uid: { type: String },
  refreshToken: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  email: {
    type: String,
    required: true,
  },
  phone: { type: Number },
  lastLogin: { type: String },
  location: { type: String },
  registered: {
    type: Date,
    default: Date.now,
  },
  password: { type: String },
  photoUrl: { type: String },
  settings: {},
});

const User = mongoose.model('User', userSchema);
export default User;
