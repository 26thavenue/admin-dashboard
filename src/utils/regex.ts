export const Regex = {
  email: {
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Enter a valid email address",
  },
  phone: {
    pattern: /^44\d{9}$/,
    message: "Enter a valid phone number",
  },
  numbers: {
    pattern: /^\d+$/,
    message: "Invalid number",
  },
  password: {
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/,
    message:
      "Password must be at least 8 characters and include at least 1 special character, 1 number, 1 lowercase letter, and 1 uppercase letter",
  },
};
