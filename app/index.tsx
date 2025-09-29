import IconButtons from '@/components/IconButtons'; // Asegúrate de que la ruta sea correcta
import React, { useState } from 'react';
import { Text, View } from 'react-native';

export default function Index() {
  const [contador, setContador] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 28, marginBottom: 20 }}>
        Contador: {contador}
      </Text>

      <IconButtons
        onIncrease={() => setContador(contador + 1)}
        onDecrease={() => setContador(contador - 1)}
      />
    </View>
  );
}
