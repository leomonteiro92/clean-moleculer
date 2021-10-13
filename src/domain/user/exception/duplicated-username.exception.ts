export class DuplicatedUsernameException extends Error {
  constructor(username: string) {
    super(`An user with same username ${username} was found`);
  }
}
