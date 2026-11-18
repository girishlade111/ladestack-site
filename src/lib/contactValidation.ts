export interface ContactFormInput {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormInput, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(input: ContactFormInput): {
  valid: boolean;
  errors: ContactFormErrors;
} {
  const errors: ContactFormErrors = {};

  if (!input.firstName.trim()) {
    errors.firstName = 'First name is required.';
  } else if (input.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters.';
  }

  if (!input.lastName.trim()) {
    errors.lastName = 'Last name is required.';
  }

  if (!input.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_REGEX.test(input.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!input.message.trim()) {
    errors.message = 'Please share a brief overview of your project.';
  } else if (input.message.trim().length < 15) {
    errors.message = 'Message should be at least 15 characters.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function createInquiryReference(email: string, timestamp = Date.now()): string {
  const prefix = email
    .trim()
    .slice(0, 3)
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, 'L');
  const suffix = String(timestamp).slice(-5);
  return `LS-${prefix.padEnd(3, 'X')}-${suffix}`;
}
