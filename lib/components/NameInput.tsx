import { nameFieldSchema } from '@/lib/schemas/name.schema';
import React, { useState } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { ZodError } from 'zod';

interface NameInputProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  value: string;
  onChangeText: (text: string) => void;
  label?: string;
  error?: string;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  onValidationChange?: (isValid: boolean, error?: string) => void;
}

const NameInput = ({
  value,
  onChangeText,
  label = 'Nombre',
  error: externalError,
  validateOnBlur = true,
  validateOnChange = false,
  onValidationChange,
  placeholder = 'Tu nombre',
  className,
  ...textInputProps
}: NameInputProps) => {
  const [internalError, setInternalError] = useState<string>('');
  const [touched, setTouched] = useState(false);

  const displayError = externalError || internalError;

  const validateName = (name: string): boolean => {
    try {
      nameFieldSchema.parse(name);
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
      validateName(text);
    } else if (touched && internalError) {
      setInternalError('');
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (validateOnBlur) {
      validateName(value);
    }
  };

  // Validar cuando se activa validateOnChange externamente
  React.useEffect(() => {
    if (validateOnChange && value) {
      setTouched(true);
      validateName(value);
    }
  }, [validateOnChange]);

  return (
    <View className="mb-4">
      {label && (
        <Text className="text-sm font-semibold text-yellow-700 mb-2">
          {label}
        </Text>
      )}
      
      <TextInput
        {...textInputProps}
        value={value}
        onChangeText={handleChangeText}
        onBlur={handleBlur}
        placeholder={placeholder}
        autoCapitalize="words"
        autoCorrect={false}
        autoComplete="name"
        className={`h-12 border rounded-lg px-4 text-base text-yellow-500 bg-black ${
          displayError && touched 
            ? 'border-red-500 border-2' 
            : 'border-gray-300'
        } ${className || ''}`}
        placeholderTextColor={textInputProps.placeholderTextColor || "#9CA3AF"}
      />
      
      {displayError && touched && (
        <Text className="text-xs text-pink-200 mt-1 ml-1">
          {displayError}
        </Text>
      )}
    </View>
  );
};

export default NameInput;