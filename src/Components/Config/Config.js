import App from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDONKTeE2-nMkoEzWN5VXUQjBfsBjAWsIQ",
  authDomain: "foodmarket-34da9.firebaseapp.com",
  databaseURL: "https://foodmarket-34da9.firebaseio.com",
  projectId: "foodmarket-34da9",
  storageBucket: "foodmarket-34da9.appspot.com",
  messagingSenderId: "855870461304",
  appId: "1:855870461304:web:7eaf967308297fe299248d",
  measurementId: "G-3N6FTYY0SE"
};


class Firebase {
  constructor() {
    App.initializeApp(firebaseConfig);
    this.auth = App.auth();
    this.db = App.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async register(name, lastName, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: `${name} ${lastName}`,
    });
  }

  logout() {
    return this.auth.signOut();
  }

  getUser() {
    return this.auth.currentUser;
  }

  authChange(user) {
    this.auth.onAuthStateChanged(user);
  }

  resetPassword(email) {
    return this.auth.sendPasswordResetEmail(email);
  }

  emailVerification() {
    return this.auth.currentUser.sendEmailVerification();
  }
  // addQuote(quote) {
  // 	if(!this.auth.currentUser) {
  // 		return alert('Not authorized')
  // 	}

  // 	return this.db.doc(`User/${this.auth.currentUser.uid}`).set({
  // 		quote
  // 	})
  // }

  // isInitialized() {
  // 	return new Promise(resolve => {
  // 		this.auth.onAuthStateChanged(resolve)
  // 	})
  // }

  // getCurrentUsername() {
  // 	return this.auth.currentUser && this.auth.currentUser.displayName
  // }

  // async getCurrentUserQuote() {
  // 	const quote = await this.db.doc(`User/${this.auth.currentUser.uid}`).get()
  // 	return quote.get('quote')
  // }
}

export default new Firebase();
