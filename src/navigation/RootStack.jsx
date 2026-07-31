import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../views/home/dashboard/Dashboard';
import LoginView from '../views/auth/LoginView';
import RegisterView from '../views/auth/RegisterView';
import Welcome from '../views/auth/Welcome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calculators from '../views/home/calculators/Calculators';
import Setting from '../views/home/setting/Setting';
import Profile from '../views/home/profile/Profile';
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function RootStack() {
    return (
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{
            headerStyle: {
                backgroundColor: "#1565C0",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontSize: 22,
                fontWeight: "bold",
            },
            headerTitleAlign: "center",
        }}>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginView} options={{
                title: "Login Here",
            }} />
            <Stack.Screen name="Register" component={RegisterView} options={{ title: "Register Here" }} />
            <Stack.Screen name="Home" component={HomeNavigationTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

function HomeNavigationTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Dashboard" component={Dashboard} options={{
                tabBarIcon: () => (<Ionicons name="home" />),
            }}
            />
            <Tab.Screen name="Calculators" component={Calculators} options={{
                tabBarIcon: () => (<Ionicons name="calculator" color='#d5f7c5' />),
            }} />
            <Tab.Screen name="Setting" component={Setting} options={{
                tabBarIcon: () => (<Ionicons name="settings" color='#e7c5f7' />),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: () => (<Ionicons name="person" color='#c5f4f7' />),
            }} />
        </Tab.Navigator>
    );
}


