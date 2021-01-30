import { BaseModel } from '../base.model';

export class UserModel extends BaseModel {
  constructor(
    public username: string,
    public name: string,
    public surname: string,
    public title: string,
    public isAdmin: boolean
  ) {
    super();
  }
}
