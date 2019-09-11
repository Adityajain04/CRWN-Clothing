import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCd2y8LQxWxIGqNKFKnRn9ji1wjiArkPlM",
  authDomain: "crwn-db-fc764.firebaseapp.com",
  databaseURL: "https://crwn-db-fc764.firebaseio.com",
  projectId: "crwn-db-fc764",
  storageBucket: "",
  messagingSenderId: "817286271683",
  appId: "1:817286271683:web:84d143b5915f3a01"
}

export const createUserProfileDocument = async(userAuth, additionalData) => {
	if(!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get;
	if(!snapShot.exists){
		const {displayName, email} = userAuth;
		const createdAt = new Date();

		try{
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		}catch(error){
			console.log('error creating user', error.message);
		}
	}
	return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;