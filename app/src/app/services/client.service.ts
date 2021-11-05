import { ClientModel } from './../pages/client/client.model';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
    ) {}

    showMessage(message: string) {
      this.snackBar.open(message, 'fechar', {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: "bottom"
      })
    }

    getAll(): Observable<ClientModel[]> {
      return this.http.get<ClientModel[]>(this.apiUrl);
    }

    getById(id: number): Observable<ClientModel> {
      return this.http.get<ClientModel>(`${this.apiUrl}/${id}`);
    }

    getByName(name: string): Observable<ClientModel> {
      return this.http.get<ClientModel>(`${this.apiUrl}/name/${name}`);
    }

    getGeneralTotals() {}

    getTotalsByCompany() {}
}
