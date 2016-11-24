import firebase from './FirebaseConfig';

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentUser = firebase.auth().currentUser;
      if (currentUser) resolve(currentUser);
      reject('There is no active user');
    }, 1000);
  });
}

export default getCurrentUser;
