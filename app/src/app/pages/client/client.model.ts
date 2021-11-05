import { EnterpriseModel } from './../enterprise/enterprise.model';

export interface ClientModel {
  _id?: string,
  name?: string,
  image_src?: string,
  enterprises?: EnterpriseModel[]
}
