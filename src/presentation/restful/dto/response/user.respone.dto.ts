export class UserResponseDto {
  id: number;
  name: string;
  email: string;
  active: boolean = true;

  constructor(user: any) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.active = user.active;
  }
}