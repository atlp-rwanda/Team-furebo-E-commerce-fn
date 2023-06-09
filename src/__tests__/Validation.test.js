import {
  ValidateFistname,
  ValidateLastName,
  ValidateEmail,
  ValidatePassword,
  ValidateNewPassword,
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
        'Provide valid password',
      );
    });

    it('should not return an error when password matches the pattern', () => {
      const authData = { password: 'StrongPassword123' };
      const errors = ValidatePassword(authData);
      expect(errors.password).toBeUndefined();
    });
  });

  describe('ValidateNewPassword', () => {
    it('should return an error when new password is empty', () => {
      const authData = { newPassword: '', confirmPassword: '' };
      const errors = ValidateNewPassword(authData);
      expect(errors.newPassword).toBe('New Password is required');
    });
    it('should return an error when confirm password is empty', () => {
      const authData = { newPassword: '', confirmPassword: '' };
      const errors = ValidateNewPassword(authData);
      expect(errors.confirmPassword).toBe('Password Confirmation is required');
    });

    it('should return an error when password does not match the pattern', () => {
      const authData = {
        newPassword: 'weakpassword',
        confirmPassword: 'weakpassword',
      };
      const errors = ValidateNewPassword(authData);
      expect(errors.newPassword).toBe('Password format is incorrect');
      expect(errors.confirmPassword).toBe('Password format is incorrect');
    });

    it('should not return an error when password matches the pattern', () => {
      const authData = {
        newPassword: 'StrongPassword123',
        confirmPassword: 'StrongPassword123',
      };
      const errors = ValidateNewPassword(authData);
      expect(errors.newPassword).toBeUndefined();
      expect(errors.confirmPassword).toBeUndefined();
    });

    it('should return an error when the two passwords do not match', () => {
      const authData = {
        newPassword: 'StrongPassword1234',
        confirmPassword: 'StrongPassword123',
      };
      const errors = ValidateNewPassword(authData);
      expect(errors.newPassword).toBeUndefined();
      expect(errors.matchPassword).toBe('Two passwords do not match');
    });
  });
});
