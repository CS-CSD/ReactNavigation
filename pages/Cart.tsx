import React from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';
import { useCart } from './CartContext';
import { styles } from './styles'; // 

const Cart = ({ navigation }) => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
              <Text style={styles.price}>Price: ₱{item.price.toFixed(2)}</Text>
              <Text style={styles.totalPrice}>Total: ₱{(item.price * item.quantity).toFixed(2)}</Text>
            </View>
            <View style={styles.controls}>
              {/* ➖ Decrease Quantity Button */}
              <Pressable
                onPress={() => updateQuantity(item.id, -1)}
                style={({ pressed }) => [styles.button, pressed && { backgroundColor: '#4b00b5' }]}
              >
                <Text style={styles.buttonText}>➖</Text>
              </Pressable>

              <Text style={styles.quantity}>{item.quantity}</Text>

              {/* ➕ Increase Quantity Button */}
              <Pressable
                onPress={() => updateQuantity(item.id, 1)}
                style={({ pressed }) => [styles.button, pressed && { backgroundColor: '#4b00b5' }]}
              >
                <Text style={styles.buttonText}>➕</Text>
              </Pressable>

              {/* 🗑 Remove Item Button */}
              <Pressable
                onPress={() => removeFromCart(item.id)}
                style={({ pressed }) => [styles.removeButton, pressed && { backgroundColor: '#cc0000' }]}
              >
                <Text style={styles.removeText}>🗑 Remove</Text>
              </Pressable>
            </View>
          </View>
        )}
      />

      {/* 🏷️ Total Price */}
      <View style={{ padding: 15, backgroundColor: '#fff', borderRadius: 10, marginTop: 10, elevation: 3 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
          Total Price: ₱{totalPrice.toFixed(2)}
        </Text>
      </View>

      {/* ✅ Proceed to Checkout Button */}
      <Pressable
        onPress={() => navigation.navigate('Checkout')}
        style={({ pressed }) => [styles.checkoutButton, pressed && { backgroundColor: '#000' }]}
      >
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </Pressable>
    </View>
  );
};

export default Cart;

