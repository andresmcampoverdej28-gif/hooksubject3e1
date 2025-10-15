import "@/global.css";
import { Ionicons } from '@expo/vector-icons';
import { selectionAsync } from 'expo-haptics';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const NowPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  return (
    <View className="flex-1 bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 bg-black">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="pt-12 pb-6 px-6 flex-row items-center justify-between">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-12 h-12 rounded-full bg-purple-700 border-2 border-yellow-400 items-center justify-center"
          >
            <Ionicons name="chevron-down" size={24} color="#FBBF24" />
          </TouchableOpacity>
          <Text className="text-yellow-300 font-black text-sm tracking-widest">
            ESCUCHANDO AHORA
          </Text>
          <TouchableOpacity className="w-12 h-12 rounded-full bg-purple-700 border-2 border-yellow-400 items-center justify-center">
            <Ionicons name="ellipsis-vertical" size={24} color="#FBBF24" />
          </TouchableOpacity>
        </View>

        {/* Album Art */}
        <View className="px-8 mb-8">
          <View className="aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 items-center justify-center border-4 border-yellow-300 shadow-2xl">
            <View className="w-full h-full rounded-3xl bg-gradient-to-br from-purple-600/50 to-indigo-700/50 items-center justify-center">
              <Ionicons name="musical-notes" size={120} color="#FBBF24" />
            </View>
          </View>
        </View>

        {/* Song Info */}
        <View className="px-8 mb-6">
          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-1 mr-4">
              <Text className="text-white font-black text-3xl mb-2">
                Nombre Canción
              </Text>
              <Text className="text-gray-300 font-bold text-lg">
                Artista
              </Text>
            </View>
            <TouchableOpacity 
              onPress={() => {
                setIsFavorite(!isFavorite);
                selectionAsync();
              }}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 border-2 border-pink-300 items-center justify-center"
            >
              <Ionicons 
                name={isFavorite ? "heart" : "heart-outline"} 
                size={28} 
                color="white" 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Progress Bar */}
        <View className="px-8 mb-8">
          <View className="h-2 bg-purple-700 rounded-full mb-3 border border-purple-600">
            <View className="h-full w-1/3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400 font-bold text-sm">1:23</Text>
            <Text className="text-gray-400 font-bold text-sm">3:45</Text>
          </View>
        </View>

        {/* Controls */}
        <View className="px-8 mb-8">
          {/* Secondary Controls */}
          <View className="flex-row items-center justify-between mb-8">
            <TouchableOpacity 
              onPress={() => {
                setIsShuffle(!isShuffle);
                selectionAsync();
              }}
              className={`w-12 h-12 rounded-full items-center justify-center ${isShuffle ? 'bg-yellow-400' : 'bg-purple-700'} border-2 border-yellow-400`}
            >
              <Ionicons 
                name="shuffle" 
                size={20} 
                color={isShuffle ? "#6B21A8" : "#FBBF24"} 
              />
            </TouchableOpacity>
            
            <TouchableOpacity className="w-12 h-12 rounded-full bg-purple-700 border-2 border-gray-600 items-center justify-center">
              <Ionicons name="play-skip-back" size={24} color="#9CA3AF" />
            </TouchableOpacity>

            <View className="w-12 h-12" />

            <TouchableOpacity className="w-12 h-12 rounded-full bg-purple-700 border-2 border-gray-600 items-center justify-center">
              <Ionicons name="play-skip-forward" size={24} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => {
                setIsRepeat(!isRepeat);
                selectionAsync();
              }}
              className={`w-12 h-12 rounded-full items-center justify-center ${isRepeat ? 'bg-yellow-400' : 'bg-purple-700'} border-2 border-yellow-400`}
            >
              <Ionicons 
                name="repeat" 
                size={20} 
                color={isRepeat ? "#6B21A8" : "#FBBF24"} 
              />
            </TouchableOpacity>
          </View>

          {/* Main Play Button */}
          <View className="items-center">
            <TouchableOpacity 
              onPress={() => {
                setIsPlaying(!isPlaying);
                selectionAsync();
              }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 border-4 border-yellow-300 items-center justify-center shadow-2xl active:opacity-75"
            >
              <Ionicons 
                name={isPlaying ? "pause" : "play"} 
                size={40} 
                color="#6B21A8" 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Volume Control */}
        <View className="px-8 mb-8">
          <View className="flex-row items-center">
            <Ionicons name="volume-low" size={20} color="#FBBF24" />
            <View className="flex-1 mx-4 h-2 bg-purple-700 rounded-full border border-purple-600">
              <View className="h-full w-2/3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
            </View>
            <Ionicons name="volume-high" size={20} color="#FBBF24" />
          </View>
        </View>

        {/* Queue Preview */}
        <View className="px-8 pb-8">
          <Text className="text-yellow-300 font-black text-sm mb-3 tracking-widest">
            SIGUIENTE
          </Text>
          <TouchableOpacity className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-4 border border-purple-600 flex-row items-center">
            <View className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 items-center justify-center mr-4">
              <Ionicons name="musical-note" size={24} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-white font-black text-base mb-1">
                Siguiente Canción
              </Text>
              <Text className="text-gray-400 font-semibold text-sm">
                Siguiente Artista
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#FBBF24" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default NowPlaying;