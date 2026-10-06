interface User {
  id: string;
  name: string;
}

interface UserReader {
  findById(id: string): Promise<User>;
}

interface EmailSender {
  send(email: string, message: string): Promise<void>;
}

export class UserService implements UserReader {
  async findById(id: string): Promise<User> {
    // Implementation to find a user by ID
    return { id, name: "John Doe" }; // Example implementation
  }
}

export class ResendEmailService implements EmailSender {
  async send(email: string, message: string): Promise<void> {
    // Implementation to send an email
    console.log(`Sending email to ${email}: ${message}`);
  }
}