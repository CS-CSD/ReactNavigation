import React from 'react';
import { Text, SafeAreaView, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useCart } from './CartContext';

const products = [
  { id: '1', name: "Black Marble", price: 3000, rating: "4⭐️", image: require("../assets/blackmarble.jpg") },
  { id: '2', name: "Black Marble 2", price: 3000, rating: "5⭐️", image: require("../assets/BlckMarble.jpg") },
  { id: '3', name: "Green Marble (gold)", price: 8000, rating: "5⭐️", image: require("../assets/greenmarble.png") },
  { id: '4', name: "Purple Marble (gold)", price: 8000, rating: "5⭐️", image: require("../assets/prplmrbl.jpg") },
  { id: '5', name: "White Marble", price: 2500, rating: "3⭐️", image: require("../assets/whitemarble.jpg") },
  { id: '6', name: "White Marble (size x2)", price: 4800, rating: "4⭐️", image: require("../assets/whitemarble.jpg") }
];

const Home = () => {
  console.log("Rendering Home.tsx..."); 
  const { cartItems, addToCart } = useCart(); 

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => {
          console.log("Rendering product:", item.name); // ✅ Debugging
          return (
            <View style={[styles.contain, { flex: 1, margin: 5 }]}>
              <Image source={item.image} style={{ width: 50, height: 50 }} />
              <Text>{item.name}</Text>
              <Text>₱{item.price}</Text>
              <Text>{item.rating}</Text>
              <TouchableOpacity onPress={() => addToCart(item)}>
                <Text>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
