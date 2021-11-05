import { ClientService } from 'src/app/services/client.service';
import { EnterpriseModel } from './../enterprise/enterprise.model';
import { Component, OnInit } from "@angular/core";
import { ClientModel } from "./client.model";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  clients: ClientModel[] = [];
  enterprise: EnterpriseModel[] = [];
  loading: boolean = false;

  propertiesTotal: number = 0;
  total: any;

  constructor(
    private clientService: ClientService,
  ) {}

  ngOnInit() {
    this.getAllClients();


    // Soma os imoveis de cada empreendimento **não implementado ainda
    this.clients.forEach((e) => {
      this.total = e.enterprises
      e.enterprises.forEach((e, i) => {
        this.total[i] = +e.realties;
      });
      for (let element of this.total) {
        this.propertiesTotal += element
      }
    })
  }

  getAllClients() {
    this.loading = true;
    this.clientService.getAll().subscribe((resp: any) => {
      this.clients = resp.dados;
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.clientService.showMessage("Ocorreu um Erro ao Carregar os dados!")
    });
  }

  searchClients(event: any) {
    if (event === null) {
      this.getAllClients();
    } else {
      this.getOneClient(event)
    }
  }

  clearSearch(event: any) {
    this.getAllClients();
  }

  getOneClient(data: string) {
    this.loading = true;
      this.clientService.getByName(data).subscribe((resp: any) => {
        this.clients = resp.data;
        this.loading = false;
      }, (error) => {
        this.loading = false;
        this.clientService.showMessage("Não foi possível encontrar esse cliente!")
      })
  }
}

