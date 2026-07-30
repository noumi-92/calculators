import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../views/home/dashboard/Dashboard';
import Calculators from '../views/home/calculators/Calculators';
import Setting from '../views/home/setting/Setting';
import Profile from '../views/home/profile/Profile';
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Dashboard} options={{
                tabBarIcon: () => (
                    <Text>🏠</Text>
                ),
            }}
            />
            <Tab.Screen name="Calculators" component={Calculators} options={{
                tabBarIcon: () => (
                    <Text>🧮</Text>
                ),
            }} />
            <Tab.Screen name="Setting" component={Setting} options={{
                tabBarIcon: () => (
                    <Text>⚙️</Text>
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: () => (
                    <Text>👤</Text>
                ),
            }} />
        </Tab.Navigator>
    );
}
