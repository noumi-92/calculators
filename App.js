import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginView from './src/views/auth/LoginView';
import RegisterView from './src/views/auth/RegisterView';
import Welcome from './src/views/auth/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/views/home/dashboard/Dashboard';
import RootStack from './src/navigation/RootStack';




export default function App() {
  return (
    <NavigationContainer>
        <RootStack/>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
