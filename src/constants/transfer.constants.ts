export const TRANSFER_METHODS = ['pix', 'ted'];

export const TRANSFER_SCHEDULE_TYPES = ['EXCHANGE_CAPWALLET_TO_CAPCONTA', 'EXCHANGE_CAPCONTA_TO_CAPWALLET'];

export const TRANSFER_STATUS = ['COMPLETED', 'DONE', 'UNDONE', 'CANCELED'];

export const TRANSFER_ERRORS = [
  'INVALID_PARAMETERS',
  'TRANSACTION_NOT_AUTHORIZED',
  'INSUFFICIENT_BALANCE',
  'SENDER_ACCOUNT_STATUS_NOT_ALLOW_CASH_OUT',
  'INVALID_RECIPIENT_ACCOUNT',
  'SENDER_ACCOUNT_NOT_FOUND',
  'RECIPIENT_ACCOUNT_NOT_FOUND',
  'CASH_OUT_NOT_ALLOWED_OUT_OF_BUSINESS_PERIOD',
  'CASHOUT_LIMIT_NOT_ENOUGH',
  'TIMEOUT',
  'INVALID_BANK_BRANCH',
  'INVALID_BANK_ACCOUNT',
  'INVALID_AUTHENTICATION_CODE',
  'NOT_FOUND_FUND_TRANSFER',
  'RECIPIENT_ACCOUNT_DOES_NOT_MATCH_THE_DOCUMENT',
  'SENDER_ACCOUNT_DOES_NOT_MATCH_THE_DOCUMENT',
];

export const TRANSFER_AVAILABLE_PIX_KEYS = [
  'cpf',
  'cnpj',
  'cpfcnpj',
  'bankaccount',
  'brcode',
  'email',
  'phone',
  'evp',
];

export const TRANSFER_INITIALIZATION_TYPE = {
  key: 'Key',
  manual: 'Manual',
  staticQrCode: 'StaticQrCode',
  dynamicQrCode: 'DynamicQrCode',
};

export const TRANSFER_ACCOUNT_TYPES = {
  checking: 'checking',
  savings: 'savings',
  payment: 'payment',
  salary: 'salary',
};
