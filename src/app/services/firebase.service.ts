import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({providedIn: 'root'})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) {
  }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }
}
