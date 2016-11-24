import firebase from './FirebaseConfig';

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      resolve(currentUser);
    } else {
      reject();
    }
  });
}

export default getCurrentUser();
