import React, { useState } from 'react';
import { Text, SafeAreaView, View, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './styles';

// Define the stack navigation types
type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
};

// Type definition for screen props
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const products = [
  { id: '1', name: "Product 1", price: "$10", rating: "⭐️⭐️⭐️⭐️", image: require("../assets/icon.png") },
  { id: '2', name: "Product 2", price: "$15", rating: "⭐️⭐️⭐️⭐️⭐️", image: require("../assets/icon.png") },
  { id: '3', name: "Product 3", price: "$20", rating: "⭐️⭐️⭐️", image: require("../assets/icon.png") },
  { id: '4', name: "Product 4", price: "$25", rating: "⭐️⭐️⭐️⭐️", image: require("../assets/icon.png") }
];

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, paddingHorizontal: 10 }}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <View style={[styles.contain, { flex: 1, margin: 5 }]}> 
            <Image source={item.image} style={{ width: 50, height: 50 }} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.rating}</Text>
            <TouchableOpacity>
              <Text>🛒 Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
