import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'firebase/firestore';

import { Bundle, Service } from 'src/app/common/models';

@Injectable({
  providedIn: 'root'
})
export class BundlesService {
  private collectionName = 'bundles';
  private bundleServicesCollectionName = 'services';
  private bundlesCollection: AngularFirestoreCollection<Bundle>;

  constructor(private firestore: AngularFirestore) {
    this.bundlesCollection = this.firestore.collection<Bundle>(this.collectionName);
  }

  getAllBundles(): Observable<Bundle[]> {
    return this.bundlesCollection.valueChanges({ idField: 'id' });
  }

  getAllBundlesIds(): Observable<string[]> {
    return this.getAllBundles().pipe(
      map(bundles => bundles.map(bundle => bundle.id))
    )
  }

  getBundleById(id: string): Observable<Bundle> {
    return this.bundlesCollection.doc<Bundle>(id).valueChanges();
  }

  getAllBundleServicesById(id: string): Observable<Service[]> {
    return this.bundlesCollection.doc<Bundle>(id).collection<Service>(this.bundleServicesCollectionName).valueChanges({ idField: 'id' })
  }
}
