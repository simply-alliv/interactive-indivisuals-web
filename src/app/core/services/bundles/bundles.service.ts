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
  private bundlesCollectionName = 'bundles';
  private servicesCollectionName = 'services';
  private bundlesCollection: AngularFirestoreCollection<Bundle>;
  private servicesCollection: AngularFirestoreCollection<Service>;

  constructor(private firestore: AngularFirestore) {
    this.bundlesCollection = this.firestore.collection<Bundle>(this.bundlesCollectionName);
    this.servicesCollection = this.firestore.collection<Service>(this.servicesCollectionName);
  }

  getAllBundles(): Observable<Bundle[]> {
    return this.bundlesCollection.valueChanges({ idField: 'id' });
  }

  getAllServices(): Observable<Service[]> {
    return this.servicesCollection.valueChanges({idField: 'id' })
  }

  getAllBundlesIds(): Observable<string[]> {
    return this.bundlesCollection.doc<{ ids: string[] }>(this.bundlesCollectionName).valueChanges().pipe(
      map(bundles => bundles.ids)
    );
  }

  getAllServicesIds(): Observable<string[]> {
    return this.bundlesCollection.doc<{ ids: string[] }>(this.servicesCollectionName).valueChanges().pipe(
      map(services => services.ids)
    );
  }

  getBundleById(id: string): Observable<Bundle> {
    return this.bundlesCollection.doc<Bundle>(id).valueChanges();
  }

  getServiceById(id: string): Observable<Service> {
    return this.servicesCollection.doc<Service>(id).valueChanges();
  }

  getAllBundleServicesByBundleId(id: string): Observable<Service[]> {
    return this.firestore.collection<Service>(this.servicesCollectionName, ref => ref.where('bundleId', '==', id)).valueChanges({ idField: 'id' })
  }

  getRandomServices(limit: number = 6): Observable<Service[]> {
    return this.firestore.collection<Service>(this.servicesCollectionName, ref => ref.limit(limit).orderBy('bundleId', 'desc')).valueChanges({ idField: 'id' })
  }
}
