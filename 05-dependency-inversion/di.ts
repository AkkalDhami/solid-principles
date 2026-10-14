interface Repository {
  save(): void;
}

interface Service {
  save(): void;
}

class UserController {
  constructor(private service: Service) {}

  save() {
    this.service.save();
  }
}

class UserService {
  constructor(private repo: Repository) {}
  save() {
    this.repo.save();
  }
}

class UserPostgresRepo implements Repository {
  save() {
    console.log("save user in the postgres db");
  }
}

class UserMongoRepo implements Repository {
  save() {
    console.log("save user in the mongodb");
  }
}

class UserService2 implements Service {
  constructor(private repo: Repository) {}
  save() {
    this.repo.save();
  }
}

const userRepo = new UserMongoRepo();
// const userRepo = new UserPostgresRepo();

// const userService = new UserService(userRepo);
const userService = new UserService2(userRepo);

const userController = new UserController(userService);

userService.save();
