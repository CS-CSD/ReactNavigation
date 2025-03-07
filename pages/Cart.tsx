import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the navigation stack types
type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
};

// Define props for the Cart screen
type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'Cart'>;

const initialCartItems = [
  { id: '1', name: "Product 1", price: 10, quantity: 1, image: require("../assets/icon.png") },
  { id: '2', name: "Product 2", price: 15, quantity: 1, image: require("../assets/icon.png") },
  { id: '3', name: "Product 3", price: 20, quantity: 1, image: require("../assets/icon.png") }
];

const Cart: React.FC<CartScreenProps> = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: string, amount: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>Price: ${item.price}</Text>
              <Text style={styles.totalPrice}>Total: ${(item.price * item.quantity).toFixed(2)}</Text>
            </View>
            <View style={styles.controls}>
              <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={styles.button}>
                <Text style={styles.buttonText}>➖</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={styles.button}>
                <Text style={styles.buttonText}>➕</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
                <Text style={styles.removeText}>🗑 Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f5f5f5' },
  itemContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 10, elevation: 3 },
  image: { width: 50, height: 50, marginRight: 10 },
  details: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: '#666' },
  totalPrice: { fontSize: 14, fontWeight: 'bold', marginTop: 5 },
  controls: { flexDirection: 'row', alignItems: 'center' },
  button: { backgroundColor: '#6200ea', padding: 8, borderRadius: 5, marginHorizontal: 5 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  quantity: { fontSize: 16, fontWeight: 'bold' },
  removeButton: { backgroundColor: '#ff4d4d', padding: 8, borderRadius: 5, marginLeft: 10 },
  removeText: { color: '#fff', fontSize: 12 },
  checkoutButton: { backgroundColor: '#28a745', padding: 12, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  checkoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
