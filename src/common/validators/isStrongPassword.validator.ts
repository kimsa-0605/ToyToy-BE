// 1. Import
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator'; 

// 2. Create custom decorator function
export function IsStrongPassword(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    // 2.1. Register custom validation logic
    registerDecorator({
      name: 'isStrongPassword', 
      target: object.constructor, 
      propertyName: propertyName, 
      options: validationOptions, 
      validator: {
        // 2.2. Validation logic: check if the password meets all conditions
        validate(value: string) {
          const strongRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
          return strongRegex.test(value);
        },
        // 2.3. Custom error message
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must include uppercase, lowercase, number, and special character`;
        },
      },
    });
  };
}