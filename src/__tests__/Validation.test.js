import {
  ValidateFistname,
  ValidateLastName,
  ValidateEmail,
  ValidatePassword,
} from '../components/Validation';

describe('Validation Functions Tests', () => {
  describe('ValidateFistname', () => {
    it('should return an error when firstname is empty', () => {
      const authData = { firstname: '' };
      const errors = ValidateFistname(authData);
      expect(errors.firstname).toBe('Firstname is Required');
    });

    it('should not return an error when firstname is provided', () => {
      const authData = { firstname: 'John' };
      const errors = ValidateFistname(authData);
      expect(errors.firstname).toBeUndefined();
    });
  });

  describe('ValidateLastName', () => {
    it('should return an error when lastname is empty', () => {
      const authData = { lastname: '' };
      const errors = ValidateLastName(authData);
      expect(errors.lastname).toBe('Lastname is Required');
    });

    it('should not return an error when lastname is provided', () => {
      const authData = { lastname: 'Doe' };
      const errors = ValidateLastName(authData);
      expect(errors.lastname).toBeUndefined();
    });
  });

  describe('ValidateEmail', () => {
    it('should return an error when email is empty', () => {
      const authData = { email: '' };
      const errors = ValidateEmail(authData);
      expect(errors.email).toBe('Email is required');
    });

    it('should return an error when email is not valid', () => {
      const authData = { email: 'invalid-email' };
      const errors = ValidateEmail(authData);
      expect(errors.email).toBe('Please Enter a Valid Email');
    });

    it('should not return an error when email is valid', () => {
      const authData = { email: 'valid@example.com' };
      const errors = ValidateEmail(authData);
      expect(errors.email).toBeUndefined();
    });
  });

  describe('ValidatePassword', () => {
    it('should return an error when password is empty', () => {
      const authData = { password: '' };
      const errors = ValidatePassword(authData);
      expect(errors.password).toBe('Password is required');
    });

    it('should return an error when password does not match the pattern', () => {
      const authData = { password: 'weakpassword' };
      const errors = ValidatePassword(authData);
      expect(errors.password).toBe(
        'Password should contain atleast one upper character, one lower character, two numbers and not under eight'
      );
    });

    it('should not return an error when password matches the pattern', () => {
      const authData = { password: 'StrongPassword123' };
      const errors = ValidatePassword(authData);
      expect(errors.password).toBeUndefined();
    });
  });
});
