import { ResendEmailService, UserService } from "./User";

async function main() {
  const userService = new UserService();
  const user = await userService.findById("user-1");
  console.log(user);

  const emailService = new ResendEmailService();
  await emailService.send("user@example.com", "Hello, this is a test email.");
}

main().catch((error) => {
  console.error("Error:", error);
});
