export const EMAIL_MESSAGES = {
    EMAIL_REQUIRED: 'El correo electrónico es requerido',
    EMAIL_INVALID: 'El formato del correo electrónico no es válido',
    EMAIL_MAX_LENGTH: 'El correo electrónico no puede exceder los 255 caracteres',
  } as const;
  
  export const PASSWORD_MESSAGES = {
    PASSWORD_REQUIRED: 'La contraseña es requerida',
    PASSWORD_MIN_LENGTH: 'La contraseña debe tener al menos 8 caracteres',
    PASSWORD_MAX_LENGTH: 'La contraseña no puede exceder los 100 caracteres',
    PASSWORD_WEAK: 'La contraseña debe contener al menos una mayúscula, una minúscula y un número',
  } as const;
  
  export const GENERAL_MESSAGES = {
    REQUIRED_FIELD: 'Este campo es requerido',
    INVALID_FORMAT: 'El formato ingresado no es válido',
    SERVER_ERROR: 'Ha ocurrido un error en el servidor. Por favor, intenta nuevamente',
    NETWORK_ERROR: 'Error de conexión. Verifica tu conexión a internet',
  } as const;
  
  // Tipos para autocompletado
  export type EmailMessageKey = keyof typeof EMAIL_MESSAGES;
  export type PasswordMessageKey = keyof typeof PASSWORD_MESSAGES;
  export type GeneralMessageKey = keyof typeof GENERAL_MESSAGES;