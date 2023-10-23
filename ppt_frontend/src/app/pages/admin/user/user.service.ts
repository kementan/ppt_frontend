import { Injectable, EventEmitter  } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { env } from "../../../_env/env";
import { StorageService } from "../../../_services/storage.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private actionLabelSubject = new BehaviorSubject<string>("");
  private dataIDSubject = new BehaviorSubject<string>("");
  private loadDataSubject = new Subject<void>();
  private visible: boolean = false;
  visibleChanged = new EventEmitter<boolean>();
  loadData$ = this.loadDataSubject.asObservable();
  
  constructor(private http: HttpClient, private storageService: StorageService) { }

  exportData(): Observable<any> {
    const user = this.storageService.getUser(true);
    let params = new HttpParams;
    return this.http.get(
      env.v1_API + "user-export",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        params: params,
        responseType: "blob"
      }
    );
  }

  removeSession(): Observable<any> {
    const url = env.v1_API + '18734asd22343/823278sdacc829938s/remove-session';
    return this.http.get(url);
  }
  
  getList(filter: any): Observable<any> {
    const user = this.storageService.getUser(true);
    let params = new HttpParams;

    params = params.set("search", filter.search);
    params = params.set("sort_by", filter.sortBy);
    params = params.set("sort_order", filter.sortOrder);
    params = params.set("page", filter.page);
    params = params.set("page_size", filter.pageSize);

    return this.http.get(
      env.v1_API + "user-table",
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
      env.v1_API + "user-id",
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
      province_id: form.province_id,
      regency_id: form.regency_id,
      subdistrict_id: form.subdistrict_id,
      urbanvillage_id: form.urbanvillage_id,
      nik: form.nik,
      nip: form.nip,
      dob: form.dob,
      pob: form.pob,
      gender: form.gender,
      address: form.address,
      name: form.name,
      phone: form.phone,
      username: form.username,
      email: form.email,
      password: form.password,
      role_id: form.role_id,
      is_active: form.is_active,
      is_complete: form.is_complete,
      is_verified: form.is_verified,
    };
  
    return this.http.post(
      env.v1_API + "user/register",
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
      env.v1_API + "user-delete",
      options
    );
  }

  updateData(id:string, form: any): Observable<any> {
    const user = this.storageService.getUser(true);
    const requestBody = {
      id: id,
      province_id: form.province_id,
      regency_id: form.regency_id,
      subdistrict_id: form.subdistrict_id,
      urbanvillage_id: form.urbanvillage_id,
      nik: form.nik,
      nip: form.nip,
      dob: form.dob,
      pob: form.pob,
      gender: form.gender,
      address: form.address,
      name: form.name,
      phone: form.phone,
      username: form.username,
      email: form.email,
      password: form.password,
      role_id: form.role_id,
      is_active: form.is_active,
      is_complete: form.is_complete,
      is_verified: form.is_verified,
    };
  
    return this.http.put(
      env.v1_API + "user-update",
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
