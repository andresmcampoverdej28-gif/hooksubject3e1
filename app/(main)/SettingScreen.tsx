import "@/global.css";
import { Ionicons } from '@expo/vector-icons';
import { selectionAsync } from 'expo-haptics';
import { router } from 'expo-router';
import { replace } from "expo-router/build/global-state/routing";
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const SettingScreen = () => {
  const handleLogout = () => {
    selectionAsync();
    router.replace('/');
  };

  const handleNotFound = () => {
    selectionAsync();
    replace('/+not-found');
  };

  const handleProfile = () => {
    selectionAsync();
    router.push('../Profile/Profile');
  };

  return (
    <View className="flex-1 bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 bg-black">
      {/* Header */}
      <View className="pt-12 pb-6 px-6 bg-gradient-to-b from-purple-900 to-transparent">
        <Text className="text-3xl font-black text-yellow-300">CONFIGURACIÓN</Text>
      </View>

      <ScrollView className="flex-1 px-6">
        {/* Sección de Perfil */}
        <View className="mb-6">
          <Text className="text-yellow-300 font-black text-sm mb-3 tracking-widest">
            PERFIL
          </Text>
          
          <TouchableOpacity 
            onPress={handleProfile}
            className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-4 mb-3 border-2 border-purple-600 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 items-center justify-center mr-4">
                <Ionicons name="person" size={24} color="#6B21A8" />
              </View>
              <View>
                <Text className="text-white font-bold text-base">Mi Cuenta</Text>
                <Text className="text-gray-400 text-sm">Editar perfil</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#FBBF24" />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={handleNotFound}
            className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-4 border-2 border-purple-600 flex-row items-center justify-between"
          >
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 items-center justify-center mr-4">
                <Ionicons name="shield-checkmark" size={24} color="white" />
              </View>
              <View>
                <Text className="text-white font-bold text-base">Privacidad</Text>
                <Text className="text-gray-400 text-sm">Configuración de privacidad</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#FBBF24" />
          </TouchableOpacity>
        </View>

        {/* Sección de Aplicación */}
        <View className="mb-6">
          <Text className="text-yellow-300 font-black text-sm mb-3 tracking-widest">
            APLICACIÓN
          </Text>
          
          <TouchableOpacity 
            onPress={handleNotFound}
            className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-4 mb-3 border-2 border-purple-600 flex-row items-center justify-between"
          >
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 items-center justify-center mr-4">
                <Ionicons name="notifications" size={24} color="white" />
              </View>
              <View>
                <Text className="text-white font-bold text-base">Notificaciones</Text>
                <Text className="text-gray-400 text-sm">Administrar notificaciones</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#FBBF24" />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={handleNotFound}
            className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-4 mb-3 border-2 border-purple-600 flex-row items-center justify-between"
          >
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 items-center justify-center mr-4">
                <Ionicons name="musical-note" size={24} color="white" />
              </View>
              <View>
                <Text className="text-white font-bold text-base">Calidad de Audio</Text>
                <Text className="text-gray-400 text-sm">Alta calidad</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#FBBF24" />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={handleNotFound}
            className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-4 border-2 border-purple-600 flex-row items-center justify-between"
          >
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 items-center justify-center mr-4">
                <Ionicons name="download" size={24} color="white" />
              </View>
              <View>
                <Text className="text-white font-bold text-base">Descargas</Text>
                <Text className="text-gray-400 text-sm">Música descargada</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#FBBF24" />
          </TouchableOpacity>
        </View>

        {/* Sección de Soporte */}
        <View className="mb-6">
          <Text className="text-yellow-300 font-black text-sm mb-3 tracking-widest">
            SOPORTE
          </Text>
          
          <TouchableOpacity 
            onPress={handleNotFound}
            className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-4 mb-3 border-2 border-purple-600 flex-row items-center justify-between"
          >
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 items-center justify-center mr-4">
                <Ionicons name="help-circle" size={24} color="#6B21A8" />
              </View>
              <View>
                <Text className="text-white font-bold text-base">Ayuda</Text>
                <Text className="text-gray-400 text-sm">Centro de ayuda</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#FBBF24" />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={handleNotFound}
            className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-4 border-2 border-purple-600 flex-row items-center justify-between"
          >
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 items-center justify-center mr-4">
                <Ionicons name="information-circle" size={24} color="white" />
              </View>
              <View>
                <Text className="text-white font-bold text-base">Acerca de</Text>
                <Text className="text-gray-400 text-sm">Versión 1.0.0</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#FBBF24" />
          </TouchableOpacity>
        </View>

        {/* Botón Cerrar Sesión */}
        <TouchableOpacity 
          onPress={handleLogout}
          className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl py-4 mb-6 border-4 border-red-400 flex-row items-center justify-center shadow-lg active:opacity-75"
        >
          <Ionicons name="log-out-outline" size={24} color="white" />
          <Text className="text-white font-black ml-3 text-lg tracking-widest">
            CERRAR SESIÓN
          </Text>
        </TouchableOpacity>

        <View className="pb-6" />
      </ScrollView>
    </View>
  );
};

export default SettingScreen;