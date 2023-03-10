import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ rst }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", { rst });
      }}
      className="bg-white mr-3 shadow-sm"
    >
      <Image source={{ uri: rst.imgUrl }} className="w-64 h-36 rounded-sm" />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{rst.title}</Text>

        <View className="flex-row items-center space-x-1">
          <FontAwesome name="star" color="green" size={12} />
          <Text className="text-gray-500 text-xs">
            <Text className="text-green-700">{rst.rating}</Text> • {rst.genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <FontAwesome name="location-arrow" color="green" size={14} />
          <Text className="text-xs text-gray-500">Nearby • {rst.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
