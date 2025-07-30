// Importing the Yup library for schema validation
import * as Yup from 'yup';

// Defining a validation schema for a sign-up form
export const formValidation = Yup.object({
  // Validating the 'username' field
  username: Yup.string() // Must be a string
    .min(3, 'Full name must be at least 3 characters') // Optional: Custom message
    .max(10, 'Full name must be 15 characters or less') // Optional
    .required('Please Enter Your Full name'), // Custom error message if the field is empty

  // Validating the 'email' field
  email: Yup.string() // Must be a string
    .email('Invalid email address') // Custom error message
    .required('Please Enter Your Email'),

  // Validating the 'message' field
  message: Yup.string().required('Please Enter Your Message'),
});
