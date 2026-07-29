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

export default function Activity() {
    return (
        <View>
            <Text style={styles.sectionHeading}>Recent Activities</Text>
            <View style={styles.activitySection}>
                <View style={styles.activityItem}>
                    <View style={styles.activityItemIcon}>
                        <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
                    </View>
                    <View style={styles.activityContent}>
                        <Text style={styles.activityTitle}>JavaScript Variables</Text>
                        <Text style={styles.activitySubTitle}>Lesson Completed</Text>
                    </View>
                    <Text style={styles.activityTime}>10m</Text>
                </View>

                <View style={styles.activityItem}>
                    <View style={styles.activityItemIcon}>
                        <Ionicons name="trophy" size={22} color="#FFC107" />
                    </View>
                    <View style={styles.activityContent}>
                        <Text style={styles.activityTitle}>JavaScript Quiz</Text>
                        <Text style={styles.activitySubTitle}>
                            Score: 17 out of 20
                        </Text>
                    </View>
                    <Text style={styles.activityTime}>10m</Text>
                </View>
            </View>
        </View>
    );
}