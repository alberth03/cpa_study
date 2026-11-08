export const mailDisabled = () => process.env.MAIL_DELIVERY === 'disabled';

// Never bypass verification in production, even if a local env file is copied.
export const localAccountsWithoutEmail = () =>
  process.env.NODE_ENV === 'development' && mailDisabled();
