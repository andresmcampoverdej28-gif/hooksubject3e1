import React from 'react';
import { Text, TextStyle } from 'react-native';

interface CustomTextProps {
  value: string;
  variant:'normal' | 'subtitle' | 'title' | 'caption' | 'button' | 'highlight' | 'link' | 'muted';
  className?: string; // opcional para estilos extra
}

const CustomText = ({ value, variant = 'normal', className = '' }: CustomTextProps) => {
  return (
    <Text className={`${selectVariant(variant)} ${className}`}>
      {value}
    </Text>
  );
};

export default CustomText;

function selectVariant(variant: string): string {
  switch (variant) {
    case 'normal':
      return 'text-white text-base font-normal';
    case 'subtitle':
      return 'text-[#CCEA8D] text-lg font-medium';
    case 'title':
      return 'text-white text-3xl font-bold';
    case 'caption':
      return 'text-[#A6BC09] text-xs font-light';
    case 'button':
      return 'text-white text-lg font-semibold text-center';
    case 'highlight':
      return 'text-[#019587] text-xl font-bold';
    case 'link':
      return 'text-[#A6BC09] text-base font-semibold underline';
    case 'muted':
      return 'text-gray-400 text-sm font-normal';
    default:
      return 'text-white text-base font-normal';
  }
}
