export class UserResponseDto {
  id: number;
  name: string;
  email: string;
  isActive: boolean = true;

  constructor(user: any) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.isActive = user.isActive;
  }
}