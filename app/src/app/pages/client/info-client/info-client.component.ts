import { ClientModel } from './../client.model';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EnterpriseModel } from '../../enterprise/enterprise.model';

@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.sass']
})
export class InfoClientComponent implements OnInit {
  client: ClientModel;
  enterprises: EnterpriseModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
    const param = this.route.snapshot.params._id
    this.getClient(+param);
  }

  getClient(id: number) {
    this.clientService.getById(id).subscribe((resp: any) => {
      this.client = resp.data;
      console.log(this.client);
      this.enterprises = this.client.enterprises;
      console.log(this.enterprises);
    }, (error) => {
      this.clientService.showMessage(`Não foi possível carregar os dados do cliente com o ID: ${this.client._id}`);
      this.router.navigate(['']);
    })
  }

  backToClient() {
    this.router.navigate(['']);
  }

}
