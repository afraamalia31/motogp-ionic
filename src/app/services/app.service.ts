import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { take } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private router: Router,
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private toastController: ToastController
  ) {}

  async toast(message:string){
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 3000,
      buttons: [
        {icon: 'close', side:'end'}
      ]
    });

    await toast.present();
  }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }

  user(uid: string){
    return this.firestore.collection('user').doc(uid).valueChanges().pipe(take(1));
  }

  // Firestore

  collection(collection: string) {
    return this.firestore.collection(collection).valueChanges({idField: 'id'}).pipe(take(1));
  }

  doc(collection: string, doc: string) {
    return this.firestore.collection(collection).doc(doc).valueChanges().pipe(take(1));
  }

  add(collection: string, data: any) {
    return this.firestore.collection(collection).add(data);
  }

  update(collection: string, doc: string, data:any) {
    return this.firestore.collection(collection).doc(doc).update(data);
  }

  delete(collection: string, doc: string) {
    return this.firestore.collection(collection).doc(doc).delete();
  }
}
