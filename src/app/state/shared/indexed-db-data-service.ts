import { EntityCollectionDataService, QueryParams } from '@ngrx/data';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { openDB, IDBPDatabase } from 'idb';
import { Entity } from 'src/app/common/models';

export abstract class IndexedDBDataService<T extends Entity> implements EntityCollectionDataService<T> {
  name: string;
  private storeName: string;
  private entities$ = new BehaviorSubject<T[]>([]);
  private db: IDBPDatabase;

  constructor(name: string, pluralName?: string) {
    this.name = name;
    this.storeName = pluralName || this.name.toLowerCase().concat('s');
    this.initializeDB();
  }

  private initializeDB() {
    const storeName = this.storeName;
    openDB(this.name, 1, {
        upgrade(db, oldVersion) {
            switch (oldVersion) {
                case 0:
                    // a placeholder case so that the switch block will
                    // execute when the database is first created
                    // (oldVersion is 0)
                case 1:
                    db.createObjectStore(storeName, {keyPath: 'id'});
            }
        },
    }).then(db => {
        this.db = db;
        this.initializeSubjects();
    });
  }

  private initializeSubjects() {
    const tx = this.db.transaction(this.storeName, 'readonly');
    const store = tx.objectStore(this.storeName);
    store.getAll().then(entities => {
        entities = entities || [];
        this.entities$.next(entities);
    });
  }

  add(entity: T): Observable<T> {
    this.db.put(this.storeName, entity);

    const entities: T[] = [...this.entities$.value];
    entities.push(entity);
    this.entities$.next(entities);

    return of(entity);
  }

  delete(key: string): Observable<string> {
    this.db.delete(this.storeName, key);

    const entities: T[] = this.entities$.value.filter(entity => entity.id !== key);
    this.entities$.next(entities);

    return of(key);
  }

  getAll(): Observable<T[]> {
    return this.entities$;
  }

  getById(id: string): Observable<T> {
    throw new Error('Method not implemented.');
  }

  getWithQuery(params: string | QueryParams): Observable<T[]> {
    throw new Error('Method not implemented.');
  }

  update(update: import('@ngrx/entity').Update<T>): Observable<T> {
    throw new Error('Method not implemented.');
  }

  upsert(entity: T): Observable<T> {
    throw new Error('Method not implemented.');
  }
}
