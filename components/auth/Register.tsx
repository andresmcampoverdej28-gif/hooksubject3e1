import "@/global.css";
import { Ionicons } from '@expo/vector-icons';
import { selectionAsync } from 'expo-haptics';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface RegisterProps {
  setIsLogin: (value: boolean) => void;
}

export default function Register({ setIsLogin }: RegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ScrollView className="flex-1 bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 bg-black">
      {/* Decoraciones geométricas superiores */}
      <View className="absolute top-0 right-0 w-96 h-96 rounded-full bg-yellow-400 opacity-10 -translate-y-1/2 translate-x-1/2" />
      <View className="absolute top-20 left-0 w-72 h-72 rounded-full bg-pink-400 opacity-10 -translate-x-1/2" />

      {/* Header */}
      <View className="pt-16 pb-8 px-6 relative z-10">
        <View className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-1 mb-6">
          <View className="bg-gradient-to-b from-purple-800 to-indigo-900 rounded-3xl p-6">
            <Text className="text-5xl font-black text-center text-yellow-300">
              BRAWL
            </Text>
            <Text className="text-5xl font-black text-center text-yellow-300 -mt-2">
              STARS
            </Text>
          </View>
        </View>
        <Text className="text-white text-center text-sm font-bold tracking-widest">
          CREA TU BRAWLER
        </Text>
      </View>

      {/* Contenedor principal */}
      <View className="px-6 py-8 relative z-10">
        {/* Input Username */}
        <View className="mb-6">
          <Text className="text-yellow-300 font-black text-sm mb-3 tracking-widest">
            USUARIO
          </Text>
          <View className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl px-4 py-4 flex-row items-center border-2 border-yellow-400">
            <Ionicons name="person-outline" size={20} color="#FBBF24" />
            <TextInput
              className="flex-1 text-white ml-3 text-base font-bold"
              placeholder="TU NOMBRE"
              placeholderTextColor="#9333EA"
            />
          </View>
        </View>

        {/* Input Email */}
        <View className="mb-6">
          <Text className="text-yellow-300 font-black text-sm mb-3 tracking-widest">
            EMAIL
          </Text>
          <View className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl px-4 py-4 flex-row items-center border-2 border-yellow-400">
            <Ionicons name="mail-outline" size={20} color="#FBBF24" />
            <TextInput
              className="flex-1 text-white ml-3 text-base font-bold"
              placeholder="TU@EMAIL.COM"
              placeholderTextColor="#9333EA"
              keyboardType="email-address"
            />
          </View>
        </View>

        {/* Input Password */}
        <View className="mb-6">
          <Text className="text-yellow-300 font-black text-sm mb-3 tracking-widest">
            CONTRASEÑA
          </Text>
          <View className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl px-4 py-4 flex-row items-center border-2 border-yellow-400">
            <Ionicons name="lock-closed-outline" size={20} color="#FBBF24" />
            <TextInput
              className="flex-1 text-white ml-3 text-base font-bold"
              placeholder="••••••••"
              placeholderTextColor="#9333EA"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons 
                name={showPassword ? "eye-outline" : "eye-off-outline"} 
                size={20} 
                color="#FBBF24" 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Input Confirmar Password */}
        <View className="mb-6">
          <Text className="text-yellow-300 font-black text-sm mb-3 tracking-widest">
            CONFIRMAR CONTRASEÑA
          </Text>
          <View className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl px-4 py-4 flex-row items-center border-2 border-yellow-400">
            <Ionicons name="lock-closed-outline" size={20} color="#FBBF24" />
            <TextInput
              className="flex-1 text-white ml-3 text-base font-bold"
              placeholder="••••••••"
              placeholderTextColor="#9333EA"
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons 
                name={showConfirmPassword ? "eye-outline" : "eye-off-outline"} 
                size={20} 
                color="#FBBF24" 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Botón Principal */}
        <TouchableOpacity 
          onPress={() => {
            router.push("/DashboardScreen");
            selectionAsync();
          }}
          className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl py-4 mb-4 border-4 border-yellow-300 shadow-2xl active:opacity-75"
        >
          <Text className="text-purple-900 text-center font-black text-lg tracking-widest">
            ¡ÚNETE!
          </Text>
        </TouchableOpacity>

        {/* Divisor estilo Brawl Stars */}
        <View className="flex-row items-center mb-6 mt-8">
          <View className="flex-1 h-1 bg-gradient-to-r from-transparent to-yellow-400" />
          <Text className="text-yellow-300 px-3 text-xs font-black tracking-widest">O</Text>
          <View className="flex-1 h-1 bg-gradient-to-l from-transparent to-yellow-400" />
        </View>

        {/* Botones Sociales */}
        <TouchableOpacity className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl py-3 mb-3 border-2 border-pink-300 flex-row items-center justify-center">
          <Ionicons name="logo-google" size={20} color="white" />
          <Text className="text-white ml-2 font-black tracking-widest">GOOGLE</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl py-3 border-2 border-blue-300 flex-row items-center justify-center">
          <Ionicons name="logo-facebook" size={20} color="white" />
          <Text className="text-white ml-2 font-black tracking-widest">FACEBOOK</Text>
        </TouchableOpacity>

        {/* Toggle Login/Register */}
        <TouchableOpacity 
          className="flex-row justify-center mt-8 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl py-3 border-2 border-yellow-400"
          onPress={() => setIsLogin(true)}
        >
          <Text className="text-yellow-300 text-sm font-black">
            ¿YA TIENES CUENTA?{' '}
          </Text>
          <Text className="text-orange-400 font-black text-sm tracking-widest">
            INGRESA
          </Text>
        </TouchableOpacity>
      </View>

      {/* Decoraciones geométricas inferiores */}
      <View className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-yellow-400 opacity-10 translate-y-1/2 -translate-x-1/2" />
    </ScrollView>
  );
}