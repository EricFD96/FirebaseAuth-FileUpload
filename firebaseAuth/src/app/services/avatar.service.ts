import { Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import {
  doc,
  docData,
  DocumentData,
  DocumentReference,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import {
  getDownloadURL,
  ref,
  StorageReference,
  uploadString,
} from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  user: User;
  userDocRef: DocumentReference<DocumentData>;

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private storage: Storage
  ) {}

  getUserProfile() {
    this.user = this.auth.currentUser;
    this.userDocRef = doc(this.firestore, `users/${this.user.uid}`);
    return docData(this.userDocRef);
  }

  async uploadImage(cameraFile: Photo) {
    this.user = this.auth.currentUser;
    const path = `uploads/${this.user.uid}/profile.png`;
    const storageRef: StorageReference = ref(this.storage, path);

    try {
      await uploadString(storageRef, cameraFile.base64String, 'base64');

      const imageUrl: string = await getDownloadURL(storageRef);
      this.userDocRef = doc(this.firestore, `users/${this.user.uid}`);

      await setDoc(this.userDocRef, { imageUrl });
      return true;
    } catch (error) {
      return null;
    }
  }
}
