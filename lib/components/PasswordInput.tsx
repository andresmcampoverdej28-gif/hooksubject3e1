import { passwordFieldSchema } from '@/lib/schemas/password.schema';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { ZodError } from 'zod';

interface PasswordInputProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  value: string;
  onChangeText: (text: string) => void;
  label?: string;
  error?: string;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  onValidationChange?: (isValid: boolean, error?: string) => void;
  showToggle?: boolean;
}

const PasswordInput = ({
  value,
  onChangeText,
  label = 'Contraseña',
  error: externalError,
  validateOnBlur = true,
  validateOnChange = false,
  onValidationChange,
  placeholder = '••••••••',
  showToggle = true,
  className,
  ...textInputProps
}: PasswordInputProps) => {
  const [internalError, setInternalError] = useState<string>('');
  const [touched, setTouched] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const displayError = externalError || internalError;

  const validatePassword = (password: string): boolean => {
    try {
      passwordFieldSchema.parse(password);
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
      validatePassword(text);
    } else if (touched && internalError) {
      // Limpiar error si el usuario está escribiendo después de haber tocado el campo
      setInternalError('');
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (validateOnBlur) {
      validatePassword(value);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Validar cuando se activa validateOnChange externamente
  React.useEffect(() => {
    if (validateOnChange && value) {
      setTouched(true);
      validatePassword(value);
    }
  }, [validateOnChange]);

  return (
    <View className="mb-4">
      {label && (
        <Text className="text-sm font-semibold text-yellow-700 mb-2">
          {label}
        </Text>
      )}
      
      <View className="relative">
        <TextInput
          {...textInputProps}
          value={value}
          onChangeText={handleChangeText}
          onBlur={handleBlur}
          placeholder={placeholder}
          secureTextEntry={!isPasswordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="password"
          className={`h-12 border rounded-lg px-4 text-base text-yellow-500 bg-black ${
            displayError && touched 
              ? 'border-red-500 border-2' 
              : 'border-gray-300'
          } ${showToggle ? 'pr-12' : ''} ${className || ''}`}
          placeholderTextColor="#9CA3AF"
        />
        
        {showToggle && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            className="absolute right-3 top-3"
            activeOpacity={0.7}
          >
            <Ionicons
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        )}
      </View>
      
      {displayError && touched && (
        <Text className="text-xs text-pink-200 mt-1 ml-1">
          {displayError}
        </Text>
      )}
    </View>
  );
};

export default PasswordInput;