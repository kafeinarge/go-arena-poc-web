import { BaseModel } from '../base.model';
import { UserModel } from '../user/user.model';
import { ApprovalEnum } from '../../enums';

export class PostModel extends BaseModel {
  constructor(
    public userId?: string,
    public user?: UserModel,
    public preview?: string,
    public text?: string,
    public approval?: ApprovalEnum
  ) {
    super();
  }
}

