import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD6JIu-OBsqfDK2m31z80-yMw-o5rnAAPQ",
    authDomain: "crowndb-cbee0.firebaseapp.com",
    databaseURL: "https://crowndb-cbee0.firebaseio.com",
    projectId: "crowndb-cbee0",
    storageBucket: "crowndb-cbee0.appspot.com",
    messagingSenderId: "801638021171",
    appId: "1:801638021171:web:85d95b85e966bfe9d04b46",
    measurementId: "G-PNLBC5YPVX"
}

export const createUserProfileDocument = async(userAuth, additionalData)=> {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error) {
        console.log('error creating user', error.message);


    }
  }
  return userRef;
}

firebase.initializeApp(config);


// Tool for adding Collections and Documents Directly to Firebase
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj);
  });
  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) =>{
  const transformedCollection = collections.docs.map(doc => {
    const {title,items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator,collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {});
}

export const auth= firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
