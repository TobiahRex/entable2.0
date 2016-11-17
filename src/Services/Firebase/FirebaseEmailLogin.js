

export default () =>
firebaseAuth.signInWithEmailAndPassword(email, password)
.then((user) => {
  firebaseDB.ref(`active/${user.uid}`).set({
    login: Date.now(),
    user: user.uid,
  });
})
.then(() => {
  let user = firebaseAuth.currentUser;
  firebaseDB.ref(`settings/${user.uid}`).once('value', (settingsSnap) => {
    firebaseDB.ref(`users/${user.uid}`).once('value', (profileSnap) => {
      firebaseDB.ref('active').once('value', (activeSnap) => {
        user = profileSnap.val();
        const settings = settingsSnap.val();
        const users = activeSnap.val();
        const location = JSON.parse(this.state.location || this.state.lastPosition);
        this.props.receivedUser(user, settings, location);
        this.props.receivedActiveUsers(users);
        browserHistory.push('/');
      });
    });
  });
})
.catch((err) => {
  this.props.loginFailure();
  throw Error('Sign In Error', err.message);
});
