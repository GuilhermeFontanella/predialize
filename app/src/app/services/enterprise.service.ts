import { EnterpriseModel } from './../pages/enterprise/enterprise.model';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class EnterpriseService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll(): Observable<EnterpriseModel[]> {
    return this.http.get<EnterpriseModel[]>(this.apiUrl);
  }

  getById() {}

  getByName() {}

  getTotalsByEnterprise() {}

  getEnterprisesByCompany() {}
}
