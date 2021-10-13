export class UserNotFoundException extends Error {
  constructor(identity: string | number) {
    super(`User not found with identity ${identity}`);
  }
}
