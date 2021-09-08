import { Service, Inject } from 'typedi';

@Service()
export default class UserService {
  constructor(
    @Inject('userModel') private userModel: Models.UserModel

  ){}

  getUsers(userId){
    const user = this.userModel.find
    return user;
  }
}