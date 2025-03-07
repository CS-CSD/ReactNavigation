import React from 'react';
import { View, Text, Image, FlatList, Pressable, Alert } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useCart } from './CartContext';
import { styles } from './styles';

const Checkout = () => {
  const { cartItems, clearCart } = useCart(); 
  const navigation = useNavigation(); 

  // 🛒 Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ✅ Handle checkout
  const handleCheckout = () => {
    Alert.alert('Checkout Successful', 'Thank you for your purchase!', [
      { text: 'OK', onPress: () => {
          clearCart(); 
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Home' }], 
            })
          );
      }},
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.checkoutItemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.checkoutDetails}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>₱{item.price.toFixed(2)}</Text>
            </View>
            <Text style={styles.checkoutQuantity}>x{item.quantity}</Text>
            <Text style={styles.checkoutTotalPrice}>
              ₱{(item.price * item.quantity).toFixed(2)}
            </Text>
          </View>
        )}
      />

      {/* Subtotal */}
      <View style={styles.checkoutSubtotalContainer}>
        <Text style={styles.checkoutSubtotalText}>
          Subtotal: ₱{subtotal.toFixed(2)}
        </Text>
      </View>

      {/* Checkout Button */}
      <Pressable
        onPress={handleCheckout}
        style={({ pressed }) => [
          styles.checkoutButton,
          pressed && styles.checkoutButtonPressed,
        ]}>
        <Text style={styles.checkoutText}>Confirm Checkout</Text>
      </Pressable>
    </View>
  );
};

export default Checkout;
