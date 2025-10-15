import "@/global.css";
import { Ionicons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Página no encontrada" }} />
      <View className="flex-1 bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 justify-center items-center px-8 bg-black">
        {/* Imagen de Shelly llorando */}
        <Image 
          source={require('@/assets/images/AppImages/Shelly404pin.png')}
          className="w-64 h-64 mb-8"
          resizeMode="contain"
        />

        {/* Error 404 */}
        <Text className="text-yellow-300 text-8xl font-black mb-4 tracking-widest">
          404
        </Text>

        {/* Mensaje de error */}
        <Text className="text-white text-2xl font-black text-center mb-3 tracking-wide">
          ¡SHELLY ESTÁ PERDIDA!
        </Text>
        
        <Text className="text-gray-300 text-base text-center mb-8 font-semibold px-4">
          Este mapa aún no ha sido creado.{'\n'}¡Volvamos al juego!
        </Text>

        {/* Botón de regreso */}
        <TouchableOpacity 
          onPress={() => router.replace('/')}
          className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl py-4 px-8 border-4 border-yellow-300 shadow-2xl active:opacity-75 flex-row items-center"
        >
          <Ionicons name="home" size={24} color="#6B21A8" />
          <Text className="text-purple-900 font-black text-lg ml-3 tracking-widest">
            VOLVER AL INICIO
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}