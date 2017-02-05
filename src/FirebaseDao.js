import firebase from 'firebase';
import firebaseui from 'firebaseui';
/*
*  initializeFirebaseApp
*/

export default class FirebaseDao {
  constructor(config) {
    if(firebase.apps && firebase.apps.length>0) {
      this.firebaseApp = firebase.apps[0];
    } else {
      this.firebaseApp = firebase.initializeApp(config);
    }
  }
  getFirebaseApp() {
    return this.firebaseApp;
  }

  insert(postData) {
    return firebase.database().ref().child('posts').push(postData);
  }

  update(key,postData) {
    var updates = {};
    updates['/posts/' + key] = postData;
    updates['/user-posts/zarya/' + key] = postData;
    return firebase.database().ref().update(updates);
  }

  remove(key) {
    return new Promise(resolve=>{
      firebase.database().ref('/posts/').child(key).remove();
      firebase.database().ref('/user-posts/zarya/').child(key).remove();
      resolve(key);
    });
  }

  off() {
    return firebase.database().ref().off();
  }

  newKey() {
    return firebase.database().ref().child('posts').push().key;
  }

  list(pagesize, callback) {
    return new Promise(resolve=>{
      firebase.database().ref('posts')
              .orderByKey().limitToLast(pagesize)
              .on('value',(articles)=>{
                callback(articles);
              })
    });
  }

  getArticle(key) {
    return new Promise(resolve=>{
      firebase.database().ref('/posts/'+key)
              .on('value',(articles)=>{
                resolve(articles);
              })
    });
  }

  getUI() {
    return new firebaseui.auth.AuthUI(firebase.auth());
  }
  
  logout() {
    return firebase.auth().signOut();
  }
}