import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { auth } from 'firebase';
import { Platform } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Esta variable se crea para indicar que el usuario se ha logeado
  public isLogged: any = true; 
  
  constructor(
    public afAuth: AngularFireAuth, 
    private google: GooglePlus,
    public platform: Platform,
    private fb: Facebook) {
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
   alert("Registro exitoso!");
  }

  //Login Google 

  async loginWithGoogle() {
    if(this.platform.is('cordova')){
      return this.google.login({}).then(result=>{
        const user_data_google = result; 
        return this.afAuth.auth.signInWithCredential(auth.GoogleAuthProvider.credential(null, user_data_google.accesToken))
        })
    }else {
      return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider)
    }
    
  }

    async loginWithFacebook(){
    if(this.platform.is('cordova')){
      return this.fb.login(['email','public_profile']).then( (response: FacebookLoginResponse) => {
        const credential_fb = auth.FacebookAuthProvider.credential(response.authResponse.accessToken); 
        return this.afAuth.auth.signInWithCredential(credential_fb);
      })
    }else {
       return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider)
    }  
  }
  
  getUserAuth(){
    return this.afAuth.authState
  }

}
