import Login from '@/components/auth/Login';
import "@/global.css";
import React, { useState } from 'react';

export default function Index() {
  const [contador, setContador] = useState(0);

  return (
    /*<View
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
    </View>*/
    <Login/>
  );
}
