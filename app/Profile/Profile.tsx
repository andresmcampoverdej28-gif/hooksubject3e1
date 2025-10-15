import "@/global.css";
import { Ionicons } from '@expo/vector-icons';
import { selectionAsync } from 'expo-haptics';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Profile = () => {
  return (
    <View className="flex-1 bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 bg-black">
      {/* Header */}
      <View className="pt-12 pb-6 px-6 flex-row items-center justify-between">
        <TouchableOpacity 
          onPress={() => {
            router.back();
            selectionAsync();
          }}
          className="w-12 h-12 rounded-full bg-purple-700 border-2 border-yellow-400 items-center justify-center"
        >
          <Ionicons name="arrow-back" size={24} color="#FBBF24" />
        </TouchableOpacity>
        <Text className="text-yellow-300 font-black text-lg tracking-widest">
          MI PERFIL
        </Text>
        <TouchableOpacity 
          className="w-12 h-12 rounded-full bg-purple-700 border-2 border-yellow-400 items-center justify-center"
        >
          <Ionicons name="create-outline" size={24} color="#FBBF24" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* Profile Photo Section */}
        <View className="items-center px-6 mb-8">
          <View className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 p-1 mb-4 shadow-2xl">
            <View className="w-full h-full rounded-full border-4 border-cyan-400 overflow-hidden bg-cyan-500">
              <Image 
                source={require('@/assets/images/AppImages/ProfilePhoto.jpg')}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          </View>
          
          {/* Username */}
          <Text className="text-white font-black text-3xl mb-2 tracking-wide">
            Ximench
          </Text>
          
          {/* Status Badge */}
          <View className="bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full px-4 py-1 border-2 border-cyan-300">
            <Text className="text-white font-black text-xs tracking-widest">
              BRAWL STARS' CREATOR CONTENT
            </Text>
          </View>
        </View>

        {/* Bio Section */}
        <View className="px-6 mb-6">
          <View className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-5 border-2 border-purple-600">
            <View className="flex-row items-center mb-3">
              <Ionicons name="water" size={20} color="#22D3EE" />
              <Text className="text-yellow-300 font-black text-sm ml-2 tracking-widest">
                SOBRE MÍ
              </Text>
            </View>
            <Text className="text-white font-semibold text-base leading-6">
              Buzz trabaja como socorrista en el parque acuático de los Velocirrápidos y es un maniático de las reglas. Le encanta poder ejercer la poca autoridad que tiene sobre los toboganes y piscinas.
            </Text>
          </View>
        </View>

        {/* Stats Section */}
        <View className="px-6 mb-6">
          <Text className="text-yellow-300 font-black text-sm mb-3 tracking-widest">
            ESTADÍSTICAS
          </Text>
          
          <View className="flex-row justify-between mb-3">
            <View className="flex-1 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-4 mr-2 border-2 border-yellow-300">
              <Ionicons name="musical-notes" size={28} color="#6B21A8" />
              <Text className="text-purple-900 font-black text-2xl mt-2">248</Text>
              <Text className="text-purple-700 font-bold text-xs tracking-wide">CANCIONES</Text>
            </View>
            
            <View className="flex-1 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl p-4 ml-2 border-2 border-pink-300">
              <Ionicons name="heart" size={28} color="white" />
              <Text className="text-white font-black text-2xl mt-2">89</Text>
              <Text className="text-pink-200 font-bold text-xs tracking-wide">FAVORITAS</Text>
            </View>
          </View>

          <View className="flex-row justify-between">
            <View className="flex-1 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-4 mr-2 border-2 border-cyan-300">
              <Ionicons name="albums" size={28} color="white" />
              <Text className="text-white font-black text-2xl mt-2">32</Text>
              <Text className="text-cyan-100 font-bold text-xs tracking-wide">PLAYLISTS</Text>
            </View>
            
            <View className="flex-1 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-4 ml-2 border-2 border-purple-300">
              <Ionicons name="time" size={28} color="white" />
              <Text className="text-white font-black text-2xl mt-2">142h</Text>
              <Text className="text-purple-200 font-bold text-xs tracking-wide">ESCUCHADAS</Text>
            </View>
          </View>
        </View>

        {/* Actions Section */}
        <View className="px-6 mb-8">
          <Text className="text-yellow-300 font-black text-sm mb-3 tracking-widest">
            ACCIONES
          </Text>
          
          <TouchableOpacity className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-4 mb-3 border-2 border-purple-600 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 items-center justify-center mr-4">
                <Ionicons name="share-social" size={24} color="#6B21A8" />
              </View>
              <Text className="text-white font-bold text-base">Compartir Perfil</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#FBBF24" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-4 mb-3 border-2 border-purple-600 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 items-center justify-center mr-4">
                <Ionicons name="trophy" size={24} color="white" />
              </View>
              <Text className="text-white font-bold text-base">Logros</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#FBBF24" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-4 border-2 border-purple-600 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 items-center justify-center mr-4">
                <Ionicons name="settings" size={24} color="white" />
              </View>
              <Text className="text-white font-bold text-base">Editar Perfil</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#FBBF24" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;