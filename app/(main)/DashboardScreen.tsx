import "@/global.css";
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const DashboardScreen = () => {
  const [activeTab, setActiveTab] = useState('todas');

  const songPlaceholders = [
    { id: 1, title: 'Canción 1', artist: 'Artista 1', duration: '3:45' },
    { id: 2, title: 'Canción 2', artist: 'Artista 2', duration: '4:12' },
    { id: 3, title: 'Canción 3', artist: 'Artista 3', duration: '3:28' },
    { id: 4, title: 'Canción 4', artist: 'Artista 4', duration: '3:56' },
    { id: 5, title: 'Canción 5', artist: 'Artista 5', duration: '4:03' },
    { id: 6, title: 'Canción 6', artist: 'Artista 6', duration: '3:34' },
    { id: 7, title: 'Canción 7', artist: 'Artista 7', duration: '4:21' },
    { id: 8, title: 'Canción 8', artist: 'Artista 8', duration: '3:50' },
  ];

  return (
    <View className="flex-1 bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 bg-black">
      {/* Header */}
      <View className="pt-12 pb-6 px-6 bg-gradient-to-b from-purple-900 to-transparent">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-3xl font-black text-yellow-300">BIBLIOTECA</Text>
          <View className="flex-row gap-3">
            <TouchableOpacity className="w-10 h-10 rounded-full bg-purple-700 border-2 border-yellow-400 items-center justify-center">
              <Ionicons name="search-outline" size={20} color="#FBBF24" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl px-4 py-3 flex-row items-center border-2 border-yellow-400">
          <Ionicons name="search-outline" size={20} color="#FBBF24" />
          <TextInput
            className="flex-1 text-white ml-3 text-base font-bold"
            placeholder="Buscar canciones..."
            placeholderTextColor="#9333EA"
          />
        </View>
      </View>

      {/* Tabs */}
      <View className="flex-row px-6 pt-6 gap-3 border-b border-purple-700">
        <TouchableOpacity 
          className={`pb-3 px-3 border-b-2 ${activeTab === 'todas' ? 'border-yellow-400' : 'border-transparent'}`}
          onPress={() => setActiveTab('todas')}
        >
          <Text className={`font-black tracking-widest ${activeTab === 'todas' ? 'text-yellow-300' : 'text-gray-400'}`}>
            TODAS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className={`pb-3 px-3 border-b-2 ${activeTab === 'favoritas' ? 'border-yellow-400' : 'border-transparent'}`}
          onPress={() => setActiveTab('favoritas')}
        >
          <Text className={`font-black tracking-widest ${activeTab === 'favoritas' ? 'text-yellow-300' : 'text-gray-400'}`}>
            FAVORITAS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className={`pb-3 px-3 border-b-2 ${activeTab === 'recientes' ? 'border-yellow-400' : 'border-transparent'}`}
          onPress={() => setActiveTab('recientes')}
        >
          <Text className={`font-black tracking-widest ${activeTab === 'recientes' ? 'text-yellow-300' : 'text-gray-400'}`}>
            RECIENTES
          </Text>
        </TouchableOpacity>
      </View>

      {/* Song List */}
      <ScrollView className="flex-1 px-6 pt-4">
        {songPlaceholders.map((song) => (
          <TouchableOpacity 
            key={song.id} 
            className="flex-row items-center mb-4 p-3 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-lg border border-purple-600 active:opacity-70"
          >
            {/* Album Art Placeholder */}
            <View className="w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-400 items-center justify-center mr-4">
              <Ionicons name="musical-notes" size={28} color="#6B21A8" />
            </View>

            {/* Song Info */}
            <View className="flex-1">
              <Text className="text-white font-black text-base mb-1 tracking-widest">
                {song.title}
              </Text>
              <Text className="text-gray-300 font-semibold text-sm">
                {song.artist}
              </Text>
            </View>

            {/* Duration and Actions */}
            <View className="flex-row items-center gap-3">
              <Text className="text-gray-400 font-bold text-sm mr-3">
                {song.duration}
              </Text>
              <TouchableOpacity className="w-10 h-10 rounded-full bg-yellow-400 items-center justify-center">
                <Ionicons name="play" size={18} color="#6B21A8" />
              </TouchableOpacity>
              <TouchableOpacity className="w-10 h-10 rounded-full bg-gray-700 items-center justify-center">
                <Ionicons name="heart-outline" size={18} color="#FBBF24" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
        <View className="pb-6" />
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;