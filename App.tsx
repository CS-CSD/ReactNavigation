import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './pages/CartContext'; // Import the context provider

// Define the navigation types
type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Type for Navigation Prop
type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

// Custom Cart Button Component
const CartButton = () => {
  const navigation = useNavigation<NavigationProps>(); 

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 15 }}>
      <Text style={{ fontSize: 16, color: '#fff' }}>🛒 Cart</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{
              title: 'Marble Shop',
              headerStyle: { backgroundColor: 'black' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold', fontSize: 22 },
              headerRight: () => <CartButton />, 
            }} 
          />
          <Stack.Screen name="Cart" component={Cart} options={{ title: 'Your Cart',
          headerStyle: { backgroundColor: 'black' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold', fontSize: 22 } }} />
          <Stack.Screen name="Checkout" component={Checkout} options={{ title: 'Checkout',
          headerStyle: { backgroundColor: 'black' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold', fontSize: 22 } }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
