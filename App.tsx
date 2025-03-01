import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View,Image, FlatList } from 'react-native';
import { styles } from './styles/styles';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={[styles.contain]}>
          <Image source={require("./assets/icon.png")}></Image>
          <Text>Product Name</Text>
          <Text>Price</Text>
          <Text>Rating</Text>
          <button>cart icon here</button>
        </View>

        <View style={[styles.contain]}>
          <Image source={require("./assets/icon.png")}></Image>
          <Text>Product Name</Text>
          <Text>Price</Text>
          <Text>Rating</Text>
          <button>cart icon here</button>
        </View>

        <View style={[styles.contain]}>
          <Image source={require("./assets/icon.png")}></Image>
          <Text>Product Name</Text>
          <Text>Price</Text>
          <Text>Rating</Text>
          <button>cart icon here</button>
        </View>

        <View style={[styles.contain]}>
          <Image source={require("./assets/icon.png")}></Image>
          <Text>Product Name</Text>
          <Text>Price</Text>
          <Text>Rating</Text>
          <button>cart icon here</button>
        </View>

        <View style={[styles.contain]}>
          <Image source={require("./assets/icon.png")}></Image>
          <Text>Product Name</Text>
          <Text>Price</Text>
          <Text>Rating</Text>
          <button>cart icon here</button>
        </View>
        
        <View style={[styles.contain]}>
          <Image source={require("./assets/icon.png")}></Image>
          <Text>Product Name</Text>
          <Text>Price</Text>
          <Text>Rating</Text>
          <button>cart icon here</button>
        </View>
        
        <View style={[styles.contain]}>
          <Image source={require("./assets/icon.png")}></Image>
          <Text>Product Name</Text>
          <Text>Price</Text>
          <Text>Rating</Text>
          <button>cart icon here</button>
        </View>
    </SafeAreaView>
  );
}