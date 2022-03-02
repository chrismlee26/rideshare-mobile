import { FlatList, TouchableOpacity, View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const data = [
  {
    id: '123',
    title: 'Get Ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '321',
    title: 'Get Food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
]

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: 'contain'
              }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity >
      )}
    >
    </FlatList >
  )
}

export default NavOptions
