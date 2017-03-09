import { AuthProviders, AuthMethods } from 'angularfire2/auth';


export const FirebaseAppConfig = {
      apiKey: "AIzaSyBLJrEYbJQhBx4EyalUQCPibyfWb6Y0y2s",
      authDomain: "kcy0142app.firebaseapp.com",
      databaseURL: "https://kcy0142app.firebaseio.com",
      storageBucket: "",
      messagingSenderId: "986485965876"
}

export const myFirebaseAppAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};
