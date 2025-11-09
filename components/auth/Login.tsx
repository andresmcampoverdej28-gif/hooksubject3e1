import "@/global.css";
import EmailInput from '@/lib/components/EmailInput';
import PasswordInput from '@/lib/components/PasswordInput';
import { Ionicons } from '@expo/vector-icons';
import { selectionAsync } from 'expo-haptics';
import { replace } from "expo-router/build/global-state/routing";
import React, { useState } from 'react';
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface LoginProps {
  setIsLogin: (value: boolean) => void;
}

export default function Login({ setIsLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [forceValidation, setForceValidation] = useState(false);

  const openURL = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('No se pudo abrir el link:', error);
    }
  };

  const handleLogin = () => {
    setForceValidation(true);
    
    if (isEmailValid && isPasswordValid) {
      replace("/DashboardScreen");
      selectionAsync();
    }
  };

  return (
    <ScrollView className="flex-1 bg-black">
      {/* Decoraciones geométricas superiores */}
      <View className="absolute top-0 right-0 w-96 h-96 rounded-full bg-yellow-400 opacity-10 -translate-y-1/2 translate-x-1/2" />
      <View className="absolute top-20 left-0 w-72 h-72 rounded-full bg-pink-400 opacity-10 -translate-x-1/2" />

      {/* Header */}
      <View className="pt-16 pb-8 px-6 relative z-10">
        <View className="bg-yellow-400 rounded-3xl p-1 mb-6">
          <View className="bg-purple-800 rounded-3xl p-6">
            <Text className="text-5xl font-black text-center text-yellow-300">
              BRAWL
            </Text>
            <Text className="text-5xl font-black text-center text-yellow-300 -mt-2">
              STARS
            </Text>
          </View>
        </View>
        <Text className="text-white text-center text-sm font-bold tracking-widest">
          INGRESA A LA BATALLA
        </Text>
      </View>

      {/* Contenedor principal */}
      <View className="px-6 py-8 relative z-10">
        {/* Input Email con validación */}
        <View className="mb-6">
          <Text className="text-yellow-300 font-black text-sm mb-3 tracking-widest">
            CORREO ELECTRÓNICO
          </Text>
          <EmailInput
            value={email}
            onChangeText={setEmail}
            label=""
            placeholder="TU@CORREO.COM"
            validateOnBlur={true}
            validateOnChange={forceValidation}
            onValidationChange={(isValid) => setIsEmailValid(isValid)}
            className="bg-purple-700 border-2 border-yellow-400 text-white font-bold rounded-2xl"
            placeholderTextColor="#EC4899"
          />
        </View>

        {/* Input Password con validación */}
        <View className="mb-6">
          <Text className="text-yellow-300 font-black text-sm mb-3 tracking-widest">
            CONTRASEÑA
          </Text>
          <PasswordInput
            value={password}
            onChangeText={setPassword}
            label=""
            placeholder="••••••••"
            validateOnBlur={true}
            validateOnChange={forceValidation}
            onValidationChange={(isValid) => setIsPasswordValid(isValid)}
            showToggle={true}
            className="bg-purple-700 border-2 border-yellow-400 text-white font-bold rounded-2xl"
            placeholderTextColor="#EC4899"
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity className="mb-6">
          <Text className="text-yellow-300 text-sm font-black text-right tracking-widest">
            ¿OLVIDASTE?
          </Text>
        </TouchableOpacity>

        {/* Botón Principal */}
        <TouchableOpacity 
          onPress={handleLogin}
          className="bg-yellow-400 rounded-3xl py-4 mb-4 border-4 border-yellow-300 shadow-2xl active:opacity-75"
        >
          <Text className="text-purple-900 text-center font-black text-lg tracking-widest">
            ¡BATALLA!
          </Text>
        </TouchableOpacity>

        {/* Divisor estilo Brawl Stars */}
        <View className="flex-row items-center mb-6 mt-8">
          <View className="flex-1 h-1 bg-yellow-400" />
          <Text className="text-yellow-300 px-3 text-xs font-black tracking-widest">¡Sigue a XimenchOf!</Text>
          <View className="flex-1 h-1 bg-yellow-400" />
        </View>

        {/* Botones Sociales */}
        <TouchableOpacity 
          className="bg-pink-500 rounded-2xl py-3 mb-3 border-2 border-pink-300 flex-row items-center justify-center"
          onPress={() => openURL('https://www.youtube.com/@XimenchBS')}
        >
          <Ionicons name="logo-youtube" size={20} color="white" />
          <Text className="text-white ml-2 font-black tracking-widest">YOUTUBE</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="bg-cyan-400 rounded-2xl py-3 mb-3 border-2 border-cyan-300 flex-row items-center justify-center"
          onPress={() => openURL('https://www.tiktok.com/@ximench_bstars')}
        >
          <Ionicons name="logo-tiktok" size={20} color="white" />
          <Text className="text-white ml-2 font-black tracking-widest">TIKTOK</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="bg-blue-500 rounded-2xl py-3 border-2 border-blue-300 flex-row items-center justify-center"
          onPress={() => openURL('https://www.instagram.com/ximench_bs')}
        >
          <Ionicons name="logo-instagram" size={20} color="white" />
          <Text className="text-white ml-2 font-black tracking-widest">INSTAGRAM</Text>
        </TouchableOpacity>

        {/* Toggle Login/Register */}
        <TouchableOpacity 
          className="flex-row justify-center mt-8 bg-purple-700 rounded-2xl py-3 border-2 border-yellow-400"
          onPress={() => setIsLogin(false)}
        >
          <Text className="text-yellow-300 text-sm font-black">
            ¿SIN CUENTA?{' '}
          </Text>
          <Text className="text-orange-400 font-black text-sm tracking-widest">
            REGISTRATE
          </Text>
        </TouchableOpacity>
      </View>

      {/* Decoraciones geométricas inferiores */}
      <View className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-yellow-400 opacity-10 translate-y-1/2 -translate-x-1/2" />
    </ScrollView>
  );
}