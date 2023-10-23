import { Injectable, EventEmitter  } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { env } from "../../../_env/env";
import { StorageService } from "../../../_services/storage.service";

@Injectable({
  providedIn: "root"
})
export class ConfigurationService {
  private actionLabelSubject = new BehaviorSubject<string>("");
  private dataIDSubject = new BehaviorSubject<string>("");
  private loadDataSubject = new Subject<void>();
  private visible: boolean = false;
  visibleChanged = new EventEmitter<boolean>();
  loadData$ = this.loadDataSubject.asObservable();
  
  constructor(private http: HttpClient, private storageService: StorageService) { }
  
  getList(filter: any): Observable<any> {
    const user = this.storageService.getUser(true);
    let params = new HttpParams;

    params = params.set("search", filter.search);
    params = params.set("sort_by", filter.sortBy);
    params = params.set("sort_order", filter.sortOrder);
    params = params.set("page", filter.page);
    params = params.set("page_size", filter.pageSize);

    return this.http.get(
      env.v1_API + "configuration-table",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        params: params
      }
    );
  };

  getDataByID(id: string): Observable<any> {
    const user = this.storageService.getUser(true);
    const requestBody = {
      id: id,
    };
  
    return this.http.post(
      env.v1_API + "configuration-id",
      requestBody,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.data.token}`,
        }),
      }
    );
  };

  createData(form: any): Observable<any> {
    const user = this.storageService.getUser(true);
    const requestBody = {
      name: form.name,
      value: form.value,
    };
  
    return this.http.post(
      env.v1_API + "configuration-create",
      requestBody,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.data.token}`,
        }),
      }
    );
  }

  deleteData(ids: string[]): Observable<any> {
    const user = this.storageService.getUser(true);
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user.data.token}`,
      }),
      body: {
        ids: ids,
      }
    };
  
    return this.http.delete(
      env.v1_API + "configuration-delete",
      options
    );
  }

  updateData(id:string, form: any): Observable<any> {
    const user = this.storageService.getUser(true);
    const requestBody = {
      id: id,
      name: form.name,
      value: form.value,
    };
  
    return this.http.put(
      env.v1_API + "configuration-update",
      requestBody,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.data.token}`,
        }),
      }
    );
  }

  toggleVisible() {
    this.visible = !this.visible;
    this.visibleChanged.emit(this.visible);
  }

  triggerLoadData() {
    this.loadDataSubject.next();
  }

  setLabel(label: string) {
    this.actionLabelSubject.next(label);
  }

  getLabel(): Observable<string> {
    return this.actionLabelSubject.asObservable();
  }

  setID(id: string) {
    this.dataIDSubject.next(id);
  }

  getID(): Observable<string> {
    return this.dataIDSubject.asObservable();
  }
}
