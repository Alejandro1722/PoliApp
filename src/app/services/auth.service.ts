import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Esta variable se crea para indicar que el usuario se ha logeado
  public isLogged: any = false; 
  
  constructor(public afAuth: AngularFireAuth, private google: GooglePlus) {
    // En el caso que no haya un usuario logeado, este devuelve un null
  afAuth.authState.subscribe (user => (this.isLogged = user)); 

   }
  
  // login
   async onLogin (user:User){
     try {
        return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
     }catch (error) {
       console.log('Error on login', error);
       alert("Los datos son incorrectos o no existe el usuario");
     }
   }

  // Register

  async onRegister (user:User) {
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email, 
        user.password,

        );
   }catch (error) {
    console.log('Error on Register', error);  
   } 
  }

  async loginWithGoogle() {
    return this.google.login({}).then(result=>{
      const user_data_google = result; 

      return this.afAuth.auth.signInWithCredential(auth.GoogleAuthProvider.credential(null, user_data_google.accesToken))
    })
  }
}
