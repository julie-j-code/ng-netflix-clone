import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  title = 'angular-firebase';
  public data: any = []

  constructor(private auth: Auth) {
  }

  // register({ email, password }: any) {
  //   return createUserWithEmailAndPassword(this.auth, email, password);
  // }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

  getUser(){
    onAuthStateChanged(this.auth, (user):any => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid);
        return uid
      } else {
        console.log("no user");

        // User is signed out
        // ...
      }
    });
  }


}
