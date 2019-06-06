import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Post} from "../model/Post";
import {map, take} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) {
  }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  getUser() {
    return this.firestore.collection('users').snapshotChanges();
  }

  getPosts() {
    return this.firestore.collection('post').snapshotChanges()
      .pipe(
        take(1),
        map(data => data.map(v => {
            return {
              ...v.payload.doc.data(),
              id: v.payload.doc.id
            } as Post
          }).sort((a, b) => b.date - a.date)
        ));
  }

  getPostById(id: string) {
    console.log(id);
    return this.firestore.collection('post').doc(id).get().pipe(take(1));
  }

  savePost(post: Post) {
    return this.firestore.collection('post').add(post)
  }
}
