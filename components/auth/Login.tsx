import CustomText from '@/components/ui/CustomText';
import "@/global.css";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

const Login = () => {
  return (
    <View className="flex-1 bg-[#01415B] px-6 justify-center h-max-screen w-max-screen">
      {/* Logo y mensaje de bienvenida */}
      <View className="items-center mb-10">
        <CustomText value="XIMENCH'S APP" variant="title" />
        <CustomText value="¡Bienvenido de nuevo!" variant="subtitle" className="mt-2" />
      </View>

      {/* Campo de usuario */}
      <TextInput
        placeholder="Usuario"
        placeholderTextColor="#CCEA8D"
        className="bg-[#005148] text-white px-4 py-3 rounded-full mb-4"
      />

      {/* Campo de contraseña */}
      <View className="flex-row items-center bg-[#005148] rounded-full mb-4 px-4">
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#CCEA8D"
          secureTextEntry
          className="flex-1 text-white py-3"
        />
        <FontAwesome name="eye" size={20} color="#CCEA8D" />
      </View>

      {/* Recordar y olvidar */}
      <View className="flex-row justify-between items-center mb-6">
        <TouchableOpacity>
          <CustomText value="¿Olvidaste tu contraseña?" variant="link" />
        </TouchableOpacity>
      </View>

      {/* Botón de login */}
      <TouchableOpacity className="bg-[#019587] py-3 rounded-full mb-4">
        <CustomText value="Iniciar Sesión" variant="button" />
      </TouchableOpacity>

      {/* Registro nuevo */}
      <View className="flex-row justify-center mb-6">
        <CustomText value="¿Nuevo usuario? " variant="normal" />
        <TouchableOpacity>
          <CustomText value="Regístrate" variant="link" />
        </TouchableOpacity>
      </View>

      {/* Separador */}
      <View className="flex-row items-center mb-4">
        <View className="flex-1 h-px bg-white" />
        <CustomText value="O" variant="normal" className="mx-2" />
        <View className="flex-1 h-px bg-white" />
      </View>

      {/* Iconos sociales */}
      <View className="flex-row justify-center gap-5">
        <Ionicons name="logo-twitter" size={28} color="#CCEA8D" />
        <Ionicons name="logo-linkedin" size={28} color="#CCEA8D" />
        <Ionicons name="logo-facebook" size={28} color="#CCEA8D" />
        <Ionicons name="logo-google" size={28} color="#CCEA8D" />
      </View>
    </View>
  );
};

export default Login;
