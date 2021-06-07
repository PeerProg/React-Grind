import { emailRegex, passwordRegex } from './regexes';

export const validateForm = formPayload => {
  let errors = {};

  if (!emailRegex.test(formPayload.email.trim())) {
    errors.email = ['Invalid Email'];
  }
  if (!formPayload.name.trim().length) {
    errors.name = ['Name is required'];
  }

  if (!passwordRegex.test(formPayload.password)) {
    errors.password =
      errors.password && Array.isArray(errors.password)
        ? errors.password.concat([
            'Invalid Password. Should contain one number, one lowercase and one upper case letter'
          ])
        : [
            'Invalid Password. Should contain one number, one lowercase and one upper case letter'
          ];
  }

  if (formPayload.password < 10) {
    errors.password =
      errors.password && Array.isArray(errors.password)
        ? errors.password.concat(['Password should be at least 10 characters'])
        : ['Password should be at least 10 characters'];
  }

  if (formPayload.password >= 10) {
    errors.password = errors.password.filter(
      item => item !== 'Password should be at least 10 characters'
    );
  }

  if (passwordRegex.test(formPayload.password)) {
    errors.password = errors.password.filter(
      item =>
        item !==
        'Invalid Password. Should contain one number, one lowercase and one upper case letter'
    );
  }

  return errors;
};
