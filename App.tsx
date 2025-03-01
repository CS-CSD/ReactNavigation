import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { styles } from './styles/styles';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

