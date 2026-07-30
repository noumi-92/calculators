import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../views/home/dashboard/Dashboard';
import Calculators from '../views/home/calculators/Calculators';
import Setting from '../views/home/setting/Setting';
import Profile from '../views/home/profile/Profile';
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Dashboard} options={{
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
