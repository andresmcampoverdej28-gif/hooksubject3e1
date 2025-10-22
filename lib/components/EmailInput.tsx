import { emailFieldSchema } from '@/lib/schemas/email.schema';
import React, { useState } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { ZodError } from 'zod';

interface EmailInputProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  value: string;
  onChangeText: (text: string) => void;
  label?: string;
  error?: string;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  onValidationChange?: (isValid: boolean, error?: string) => void;
}

const EmailInput = ({
  value,
  onChangeText,
  label = 'Correo electrónico',
  error: externalError,
  validateOnBlur = true,
  validateOnChange = false,
  onValidationChange,
  placeholder = 'ejemplo@correo.com',
  className,
  ...textInputProps
}: EmailInputProps) => {
  const [internalError, setInternalError] = useState<string>('');
  const [touched, setTouched] = useState(false);

  const displayError = externalError || internalError;

  const validateEmail = (email: string): boolean => {
    try {
      emailFieldSchema.parse(email);
      setInternalError('');
      onValidationChange?.(true);
      return true;
    } catch (err) {
      if (err instanceof ZodError) {
        const errorMessage = err.errors[0]?.message || 'Error de validación';
        setInternalError(errorMessage);
        onValidationChange?.(false, errorMessage);
      }
      return false;
    }
  };

  const handleChangeText = (text: string) => {
    onChangeText(text);
    
    if (validateOnChange) {
      setTouched(true);
      validateEmail(text);
    } else if (touched && internalError) {
      // Limpiar error si el usuario está escribiendo después de haber tocado el campo
      setInternalError('');
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (validateOnBlur) {
      validateEmail(value);
    }
  };

  // Validar cuando se activa validateOnChange externamente
  React.useEffect(() => {
    if (validateOnChange && value) {
      setTouched(true);
      validateEmail(value);
    }
  }, [validateOnChange]);

  return (
    <View className="mb-4">
      {label && (
        <Text className="text-sm font-semibold text-gray-700 mb-2">
          {label}
        </Text>
      )}
      
      <TextInput
        {...textInputProps}
        value={value}
        onChangeText={handleChangeText}
        onBlur={handleBlur}
        placeholder={placeholder}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="email"
        className={`h-12 border rounded-lg px-4 text-base text-gray-900 bg-white ${
          displayError && touched 
            ? 'border-red-500 border-2' 
            : 'border-gray-300'
        } ${className || ''}`}
        placeholderTextColor="#9CA3AF"
      />
      
      {displayError && touched && (
        <Text className="text-xs text-red-500 mt-1 ml-1">
          {displayError}
        </Text>
      )}
    </View>
  );
};

export default EmailInput;