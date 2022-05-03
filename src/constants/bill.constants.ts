export const BILL_PAYMENT_STATUS = ['COMPLETED', 'DONE', 'UNDONE', 'CANCELED'];

export const BILL_PAYMENT_ERRORS = {
  FORBIDDEN_TRANSACTION: {
    en: 'Invalid transac',
    pt: 'Transação inválida',
  },
  TRANSACTION_NOT_AUTHORIZED: {
    en: 'Transaction not authorized',
    pt: 'Transação não autorizada',
  },
  REQUEST_WITHOUT_CORRELATION_ID: {
    en: 'Request without correlation id',
    pt: 'Solicitação sem ID de correlação',
  },
  PAYMENT_LIMIT_NOT_ENOUGH: {
    en: 'Payment limit not enough',
    pt: 'Limite de pagamento insuficiente',
  },
  INSUFFICIENT_BALANCE: {
    en: 'Account has insufficient balance',
    pt: 'Conta com saldo insuficiente',
  },
  TRANSACTION_WAS_REPROVED: {
    en: 'Transaction was reproved by the system, please try again',
    pt: 'Transação reprovada pelo sistema, por favor tente novamente', // Transação reprovada pelo sistema antifraude
  },
  ACCOUNT_STATUS_NOT_ALLOW_CASHOUT: {
    en: 'Account status does not allow cash-out',
    pt: 'Status da conta não permite saque',
  },
  BILL_NOT_FOUND: {
    en: 'Bill not found',
    pt: 'Cédula não encontrada',
  },
  BILL_CODE_REQUIRED: {
    en: 'Request without barcode or digitable line',
    pt: 'Solicitação sem código de barras ou linha digitável',
  },
  INVALID_BANK_BRANCH: {
    en: 'Invalid bank branch',
    pt: 'Agência bancária inválida',
  },
  INVALID_BANK_ACCOUNT: {
    en: 'Invalid bank account',
    pt: 'Conta bancária inválida',
  },
  INVALID_AUTHENTICATION_CODE: {
    en: 'Invalid authentication code',
    pt: 'Código de autenticação inválido',
  },
  INVALID_PHONE_NUMBER: {
    en: 'Invalid phone number',
    pt: 'Número de telefone inválido',
  },
  NOT_FOUND_TOPUP_PAYMENTS: {
    en: 'Not found topup payments',
    pt: 'Pagamentos de recarga não encontrados',
  },
  NOT_FOUND_BILL_PAYMENTS: {
    en: 'Not found bill payments',
    pt: 'Não pagamentos de contas encontrados',
  },
  NOT_FOUND_TOPUP_PAYMENT_BY_AUTHENTICATION_CODE: {
    en: 'Not found topup payment by authentication code',
    pt: 'Pagamento de recarga não encontrado por código de autenticação',
  },
  NOT_FOUND_BILL_PAYMENT_BY_AUTHENTICATION_CODE: {
    en: 'Not found bill payment by authentication code',
    pt: 'Pagamento de contas não encontrado por código de autenticação',
  },
  OPERATION_NOT_COMPLETED: {
    en: 'Operation not completed. Try Again',
    pt: 'Operação não concluída. Tente novamente',
  },
  AMOUNT_NOT_ALLOWED: {
    en: 'Payment amount not allowed',
    pt: 'Valor do pagamento não permitido',
  },
  PAYMENT_AFTER_CUT_OFF_TIME: {
    en: 'Payment made after cut off time',
    pt: 'Pagamento efetuado após o tempo limite',
  },
  CONNECTION_FAILURE: {
    en: 'There was a connection problem',
    pt: 'Ocorreu um problema de conexão',
  },
  INVALID_PAYMENT_ACCOUNT_NUMBER: {
    en: 'Invalid payment account number',
    pt: 'Número de conta de pagamento inválido',
  },
  BUSINESS_HOURS_HAVE_ENDED: {
    en: 'Business hours have ended',
    pt: 'Horário comercial encerrado',
  },
  PHONE_NUMBER_BLOCKED: {
    en: 'Phone number is blocked for top-ups',
    pt: 'Número de telefone bloqueado para recargas',
  },
  AMOUNT_ABOVE_MAX_ALLOWED: {
    en: 'Payment amount above max allowed',
    pt: 'Valor do pagamento acima do máximo permitido',
  },
  AMOUNT_BELLOW_MIN_ALLOWED: {
    en: 'Payment amount above max allowed',
    pt: 'Valor do pagamento acima do máximo permitido',
  },
  BUSINESS_HOURS_HAVE_NOT_STARTED: {
    en: 'Business hours have not started',
    pt: 'Horário comercial ainda não iniciado',
  },
  PAYMENT_ALREADY_PERFORMED: {
    en: 'Payment already performed',
    pt: 'Pagamento já efetuado',
  },
  PAYMENT_OPERATION_NOT_ALLOWED: {
    en: 'Payment not made, this operation cannot be performed trough this channel',
    pt: 'Pagamento não efetuado, operação não pode ser realizada através deste cha nnel',
  },
  MAXIMUM_NUMBER_OF_DAYS_DELAYED_EXCEEDED: {
    en: 'Payment not made, this operation cannot be performed trough this channel',
    pt: 'Pagamento não realizado, operação não pode ser realizada neste canal',
  },
  DOCUMENT_CANNOT_BE_RECEIVED: {
    en: 'Payment cannot be received by this institution',
    pt: 'Pagamento não pode ser recebido por esta instituição',
  },
  AMOUNT_NOT_ALLOWED_FOR_PHONE_NUMBER: {
    en: 'Amount not allowed for the DDD/Phone number informed',
    pt: 'Valor não permitido para DDD / Telefone informado',
  },
  EXCEEDED_MAXIMUM_VALUE: {
    en: 'Exceeded the maximum value',
    pt: 'Excedeu o valor máximo',
  },
  PAYMENT_AMOUNT_CANNOT_BE_CHANGED: {
    en: 'Payment amount cannot be changed',
    pt: 'Pagamento valor não pode ser alterado',
  },
  INVALID_BILL_BAR_CODE: {
    en: 'Invalid bill bar code',
    pt: 'Código de barras da fatura inválido',
  },
  AREA_CODE_NOT_ENABLED: {
    en: 'Area code not enabled',
    pt: 'Código de área não habilitado',
  },
  EARLY_PAYMENT_NOT_ALLOWED_YET: {
    en: 'Early payment not allowed. The highest number of days for early payment has not yet been reached.',
    pt: 'Pagamento antecipado não permitido. O maior número de dias para pagamento antecipado ainda não foi atingido.',
  },
  PAYMENT_NOT_ALLOWED: {
    en: 'Payment not allowed',
    pt: 'Pagamento não permitido',
  },
  TRANSACTION_IN_PROCESS: {
    en: 'Transaction in process',
    pt: 'Transação em andamento',
  },
  TRANSACTION_NOT_FOUND: {
    en: 'Transaction not found',
    pt: 'Transação não encontrada',
  },
  QUERY_FAIL: {
    en: 'problem with query registration',
    pt: 'Problema com consulta de registro',
  },
  MERCHANT_NOT_AUTHORIZED: {
    en: 'Non authorized merchant, payment was not actualized',
    pt: 'Comerciante não autorizado, pagamento não realizado',
  },
  PAYMENT_AWAIT_CONFIRMATION: {
    en: 'Payment await confirmation',
    pt: 'Pagamento aguarda confirmação',
  },
  IMPOSSIBLE_CALCULATE_PAYMENT_AMOUNT_TAX: {
    en: 'It was not possible to calculate interest/fees',
    pt: 'Não foi possível calcular juros / taxas',
  },
  IMPOSSIBLE_CALCULATE_PAYMENT_AMOUNT: {
    en: 'It was not possible to calculate amount of payment',
    pt: 'Não foi possível calcular o valor do pagamento',
  },
  QUERY_ID_ALREADY_UTILIZED: {
    en: 'Query protocol ID already utilized by another payment',
    pt: 'ID do protocolo de consulta já utilizado por outro pagamento',
  },
  QUERY_ID_NOT_FOUND: {
    en: 'Query protocol ID not not found in the current date',
    pt: 'ID do protocolo de consulta não encontrado na data atual',
  },
  INVALID_BAR_CODE_BY_QUERY_ID: {
    en: 'Bar Code is incorrect for the query protocolId informed',
    pt: 'Código de barras incorreto para a consulta protocolId informada',
  },
  BANKSLIP_CANCELED: {
    en: 'Bankslip has been canceled in the banking institution',
    pt: 'Boleto bancário cancelado na instituição bancária',
  },
  MERCHANT_NOT_ENABLE: {
    en: 'The merchant is not considered enabled to receive by the emitting institution',
    pt: 'O estabelecimento não é considerado habilitado para recebimento pela instituição emissora',
  },
  MERCHANT_NOT_REGISTERED: {
    en: 'Merchant is not registered',
    pt: 'Estabelecimento não cadastrado',
  },
  MERCHANT_IN_ANALYSIS: {
    en: 'Merchant is under analysis by the emitting institution',
    pt: 'O comerciante está sendo analisado pela instituição emissora',
  },
  PARTIAL_PAYMENT_LIMIT_HAS_EXCEEDED: {
    en: 'Partial payment limit has exceeded',
    pt: 'Limite parcial de pagamento ultrapassado',
  },
  BANKSLIP_EXPIRED_TRY_AGAIN_TOMORROW: {
    en: 'Bankslip is expired, try again tomorrow',
    pt: 'O boleto expirou, tente novamente amanhã',
  },
  DUPLICITY_PAYMENT: {
    en: 'Duplicity of a bankslip that does not allow partial payments',
    pt: 'Duplicidade de boleto bancário que não permite pagamentos parciais',
  },
  PARTIAL_PAYMENT_NOT_ALLOWED: {
    en: 'Existing record of a bankslip that does not allow partial payments',
    pt: 'Registro existente de boleto bancário que não permite pagamentos parciais',
  },
  PARTIAL_PAYMENT_BALANCE_HAS_EXCEEDED: {
    en: 'Bankslip has exceed the available balance for partial payment for calculation model',
    pt: 'Bankslip tem exc o saldo disponível para pagamento parcial para modelo de cálculo',
  },
  PAYMENT_AFTER_EXPIRANCY_DATE_NOT_ALLOWED: {
    en: 'Bankslip can not be paid after it expiracy date',
    pt: 'Boleto não pode ser pago após o vencimento',
  },
  BAR_CODE_NOT_FOUND: {
    en: 'Bar Code not found',
    pt: 'Código de barras não encontrado',
  },
  PAYMENT_AMOUNT_GREATER_THAT_MAX_ALLOWED_AMOUNT: {
    en: 'Amount to be paid is above the maximum allowed amount',
    pt: 'Valor a pagar está acima do valor máximo permitido',
  },
  PAYMENT_UNVAILABLE_AT_THE_MOMENT: {
    en: 'Payment unavailable at the moment. Please try later',
    pt: 'Pagamento indisponível no momento. Tente mais tarde',
  },
  INTERNAL_SERVICE_ERROR: {
    en: 'There was an internal error in the payment provider',
    pt: 'Ocorreu um erro interno no provedor de pagamento',
  },
  NOT_FOUND_PROVIDER: {
    en: 'Not found provider',
    pt: 'Provedor não encontrado',
  },
  NOT_FOUND_PROVIDER_VALUES: {
    en: 'Not found values to provider',
    pt: 'Valores não encontrados para provedor',
  },
  BANKSLIP_DOWNLOADED: {
    en: 'This bill payment has been paid.',
    pt: 'Este boleto já foi pago.',
  },
};
