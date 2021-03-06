import {createUser} from './helpers';

export default function signInAnonymously() {
  return new Promise(function(resolve, reject) {
    firebase.auth().signInAnonymously()
      .then(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          resolve({
            user: createUser(user)
          });
        });
      })
      .catch(reject);
  });
}
