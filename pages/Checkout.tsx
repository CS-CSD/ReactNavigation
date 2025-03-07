import React from 'react';
import { View, Text, Button } from 'react-native';

const Checkout = ({ navigation }) => {
  return (
    <View>
      <Text>Checkout Page</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Checkout;
