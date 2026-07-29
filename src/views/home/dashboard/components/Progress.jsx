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

export default function Progress() {
    return (
        <View>
            <Text style={styles.sectionHeading}>Your Progress</Text>
            <View style={styles.statSection}>
                <View style={styles.statItem}>
                    <Text style={[styles.statNumber, { color: "#616ACF" }]}>12</Text>
                    <Text style={styles.statText}>Completed</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={[styles.statNumber, { color: "#61A3CF" }]}>04</Text>
                    <Text style={styles.statText}>Lessons</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={[styles.statNumber, { color: "#61CF91" }]}>08</Text>
                    <Text style={styles.statText}>Remaining</Text>
                </View>
            </View>
        </View>
    );
}