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

export default function Learning() {
    return (
        <View>
            <Text style={styles.sectionHeading}>Continue Learning</Text>
            <View style={styles.learningCard}>
                <View style={styles.learningHeader}>
                    <View style={styles.learningIcon}>
                        <Ionicons name="book" size={24} color="#805BD9" />
                    </View>
                    <View style={styles.learningTextContainer}>
                        <Text style={styles.learningTitle}>React Native Flexbox</Text>
                        <Text style={styles.learningSubtitle}>
                            Styling and Responsive Layouts
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.learningContinueIcon}>
                        <Ionicons name="chevron-forward" size={18} color="#805BD9" />
                    </TouchableOpacity>
                </View>

                {/* Progress Bar */}
                <View style={styles.progressBarBackground}>
                    <View style={styles.progressBarFill} />
                </View>

                <View style={styles.progressData}>
                    <Text style={styles.progressText}>65% Completed</Text>
                    <Text style={styles.progressText}>20 Minutes</Text>
                </View>

                <TouchableOpacity style={styles.progressButton}>
                    <Ionicons name="play-circle" size={20} color="white" style={{ marginRight: 6 }} />
                    <Text style={styles.progressButtonText}>Continue Lesson</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}