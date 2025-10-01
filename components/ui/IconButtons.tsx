import React from 'react';
import { View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface IconButtonsProps {
  onIncrease: () => void;
  onDecrease: () => void;
}

const IconButtons: React.FC<IconButtonsProps> = ({ onIncrease, onDecrease }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 120 }}>
      <Pressable onPress={onIncrease}>
        <Ionicons name="caret-up" size={40} color="green" />
      </Pressable>

      <Pressable onPress={onDecrease}>
        <Ionicons name="caret-down" size={40} color="red" />
      </Pressable>
    </View>
  );
};

export default IconButtons;
