import { EnterpriseModel } from './../../pages/enterprise/enterprise.model';
import { ClientModel } from './../../pages/client/client.model';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Url } from 'url';






@Component({
  selector: 'app-presentation-card',
  templateUrl: './presentation-card.component.html',
  styleUrls: ['./presentation-card.component.scss']
})
export class PresentationCardComponent implements OnInit {
  @ViewChild('clientImgDialog', { static: false }) clientImgDialog: TemplateRef<any>;
  @Output() actionButton = new EventEmitter();
  @Output() routeEmitter = new EventEmitter();

  @Input() client: ClientModel;
  @Input() enterprise: EnterpriseModel;
  @Input() _idClient: string;
  @Input() _idEnterprises: string;
  @Input() hidedButtons: boolean = false;
  @Input() propertiesTotal: EnterpriseModel;
  @Input() route: string;

  @Input() dashBoard: string;
  @Input() set url(url: string) {
    if (url.startsWith('https://firebasestorage.googleapis.com/v0/b/predialize.appspot.com/o/')) {

      this.urlOriginal = url;
    } else {
      this.urlOriginal;
    }
  }
  get url(): string {
    return this.urlOriginal;
  }
  private urlOriginal = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADDCAMAAACxkIT5AAAASFBMVEVUVFSoqKhOTk5RUVGrq6tzc3OZmZmFhYWwsLBMTEyXl5etra1vb29+fn6Li4uTk5NiYmJnZ2dbW1uhoaGAgIBeXl5ycnJsbGwxLNHVAAAEr0lEQVR4nO2cDZeiIBSG4V4ElQSVJv//P13ATPuY2Wlqzy7u+5wzk0l2uk9cQEOEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAaTO+H/3ZQz8GTfj9TWRK4svLd2Ko0B+rtDhQcwAEcwAEcwAEcwAEcwAEcwMGuHahuiYLMXbly9OXBcLBDBwwHcCDgIJfDARyI/9tBwzPNIweXwj07kK1Z0PeF+lLo9+xAqoWnC/fj4BXgAA7gAA7gAA7gAA7gAA7gAA7gAA7gAA7g4P90kK6a2ZnPL6Dt10EMXgbvuuowDcMwHarO+SDt1yL25CDG77tepMn4K/GZ6DsfPezfgbLBDCn6RwdFE4MJn2nYiQNl/dQ8jP9yIDeTf2xhFw6UcuM3bkZhGt2jlmEPDqwf6fdHZmj09/eAlO/A6v7GwNwSnm9Vug2Pen1roXQHSlZXWRCjF0N1dL7VWrfeHavYUfD1Kyqp9uTAtuPm8zOJg8vDgXPa59GS1GbirSgeW7sfB7Zr1iKi0yfDgDRwOGwtNN1WQskOlFxbgtjmmy/HQVaaTd9B/SYfCnagtNjE5H97YhDHEBtnQq9vVKwD6y8BpR7vO6eTatuL0qWXLNaBdUtTwGS+cXJ4DleZS0I0zpbtQJlFAQ3hmUsKKgxLVVjmLhXrYAmEzLM3/1pzObZwB/PHZvFUJViqwnlQwXtwcNXFPSFBzvmwBwd0+OnFRXVKEnbggF5YB8BWtAcHryhIw2wq38FrCnJNKN0BTa8uiGGn0vvGj9d/a1neo1QHP+oT7yTIsh28ETiAAziAAziAAziAAziAAzjYiwOsIclTePtSoqGwtUSxpiwAAABwQ5p8lx7m31wpTzjj607u/DRv8byT55/b0/a6gx9OYPz34aH1KWrXsWDhggyG+aDbjB5yeNP85EPQSUvZDhSP0ulg8h2za0+clm2n+FZt683tDM9/Hz5YeWRBMXQxqlBNnQw8GGNCMMb1+SWVTeu/uJFM7aaDryvmU51KKDimEGR0cKobPtTHo9O1L01CdFApkR2QDrEm06hcfGhav8xbj6dVnO9gGOqqSasF2TGGm0ryUaGTsTacbHIQs6GZ1nkphRAdNNJQjIbGOp/rkJEpy1u/WQkqZTqTC/OcJdvRlYNOLQ7yzs7+lUh+TnJQ1SmaGNeY90zp8cqB9ZFDE+ZdMQOaKwckj7Q6EGN9KKtdjA4oBRUdVHMIscr3tw6cc8nBvEgYaX/joLKbeiBEXdq5c3SQPrw2NNUf8567enDOhbUeXOdC/DPT6uCjHspzIOI3HB2IOq8UR+6uPZgTPBbkXaOtaMh5E5MgO4i1oLo4aIwqS8HsgAebvlEvx/ht9/XxsQPua5P6BS/jE3tsOJqYsoMoMahzv0BdaamQan6OuI7jAxGU6VzdpuBj0t86iC1+rbtjsLGq87F2nUlTnEmm0dVkcz3wvs0Tkwqjd5z/p7acu1b7ah47d+u3OZjzBvVOazPO0/i8blPu8DFdOaNjdNinoVQlCqsFifNAKD/weiFsO+6/bG7Ll01e/+ebQP/8JwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwB/gFh35K7dZjp9sAAAAASUVORK5CYII=";

  total: any;
  constructor(
    private router: Router,
    private dialog: MatDialog
    ) {}

  ngOnInit() {}

  acaoBotao(route: string) {
    this.router.navigateByUrl(`${route}`);
  }

  showPicture(config?: MatDialogConfig) {
    return this.dialog.open(this.clientImgDialog, config)
  }

  redirectTo(route: string) {
    this.router.navigateByUrl(`${route}`);
  }

}
