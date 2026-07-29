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

export default function Topics() {
    return (
        <View>
            <Text style={styles.sectionHeading}>Topics</Text>
            <View style={styles.topicSection}>
                <View style={styles.topic}>
                    <View style={styles.topicIcon}>
                        <Ionicons name="code-slash" size={22} color="#805BD9" />
                    </View>
                    <Text style={styles.topicName}>Variables</Text>
                </View>

                <View style={styles.topic}>
                    <View style={styles.topicIcon}>
                        <Ionicons name="terminal" size={22} color="#805BD9" />
                    </View>
                    <Text style={styles.topicName}>Functions</Text>
                </View>

                <View style={styles.topic}>
                    <View style={styles.topicIcon}>
                        <Ionicons name="layers" size={22} color="#805BD9" />
                    </View>
                    <Text style={styles.topicName}>Styling</Text>
                </View>

                <View style={styles.topic}>
                    <View style={styles.topicIcon}>
                        <Ionicons name="hardware-chip" size={22} color="#805BD9" />
                    </View>
                    <Text style={styles.topicName}>Flexbox</Text>
                </View>

                <View style={styles.topic}>
                    <View style={styles.topicIcon}>
                        <Ionicons name="cube" size={22} color="#805BD9" />
                    </View>
                    <Text style={styles.topicName}>Images</Text>
                </View>

                <View style={styles.topic}>
                    <View style={styles.topicIcon}>
                        <Ionicons name="git-branch" size={22} color="#805BD9" />
                    </View>
                    <Text style={styles.topicName}>Buttons</Text>
                </View>
            </View>
        </View>
    );
}