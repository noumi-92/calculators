import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import styles from '../styles/dashboard_styles';

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerGreetingText}>Good Morning,</Text>
                <Text style={styles.headerNameText}>Nouman</Text>
            </View>
            <TouchableOpacity style={styles.headerProfileButton}>
                <Ionicons name="notifications-outline" size={40} />
            </TouchableOpacity>
        </View>
    );
}