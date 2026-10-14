class UserController {
  constructor(private userService: UserService) {}

  save() {
    this.userService.save();
  }
}

class UserService {
  constructor(private userRepository: UserRepository) {}
  save() {
    this.userRepository.save();
  }
}

class UserRepository {
  save() {
    console.log("save user in the db");
  }
}

const userRepo = new UserRepository();
const userService = new UserService(userRepo);
const userController = new UserController(userService);

userService.save();
