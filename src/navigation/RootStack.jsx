import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../views/home/dashboard/Dashboard';
import LoginView from '../views/auth/LoginView';
import RegisterView from '../views/auth/RegisterView';
import Welcome from '../views/auth/Welcome';
import Home from '../views/home/Home';

const Stack = createNativeStackNavigator();
const options = {
    headerStyle: {
        backgroundColor: "#1565C0",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontSize: 22,
        fontWeight: "bold",
    },
    headerTitleAlign: "center",
};
const loginHeader = {
    title: "Login Here",
}

export default function RootStack() {
    return (
        <Stack.Navigator initialRouteName='Welcome' screenOptions={options}>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginView} options={{
                title: "Login Here",
            }} />
            <Stack.Screen name="Register" component={RegisterView} options={{ title: "Register Here" }} />
            <Stack.Screen name="Dashboard" component={Home} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}
