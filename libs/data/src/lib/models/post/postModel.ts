import { ApprovalEnum } from '../../enums';
import { BaseModel } from '../base.model';
import { UserModel } from '../user/user.model';

export class PostModel extends BaseModel {
  constructor(
    public userId?: string,
    public user?: UserModel,
    public preview?: string | ArrayBuffer,
    public text?: string,
    public approval?: ApprovalEnum,
  ) {
    super();
  }
}
