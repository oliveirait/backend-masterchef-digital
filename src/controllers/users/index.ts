import { CreateNewUser } from "./CreateUser";
import { ReadUser } from "./ReadUser";
import { UpdateUser } from "./UpdateUser";


export const Users = {
  create: new CreateNewUser,
  read: new ReadUser,
  update: new UpdateUser
}