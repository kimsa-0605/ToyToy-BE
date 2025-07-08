export class User {
  constructor(
    public readonly id: string ,
    public readonly fullname: string,
    public readonly email: string,
    public readonly password: string,
    public readonly role: string,
    public readonly avatar_link: string,
    public readonly phone: string,
    public readonly province: string,
    public readonly district: string,
    public readonly detailed_address: string,
    public readonly isActive: boolean = true,
  ) {}

  static fromPlain(plain: Partial<User>): User {
    return new User(
      plain.id ?? '',
      plain.fullname ?? '',
      plain.email ?? '',
      plain.password ?? '',
      plain.role ?? 'customer',
      plain.avatar_link ?? '',
      plain.phone ?? '',
      plain.province ?? '',
      plain.district ?? '',
      plain.detailed_address ?? '',
      plain.isActive ?? true,
    );
  }
}
