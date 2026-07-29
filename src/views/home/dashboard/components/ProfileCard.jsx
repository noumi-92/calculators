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

export default function ProfileCard() {
    return (
        <View style={styles.profileCard}>
            <View style={styles.profileData}>
                <View style={styles.profileInitials}>
                    <Text style={styles.profileInitialsText}>NK</Text>
                </View>
                <View style={styles.profileDataList}>
                    <Text style={styles.profileDataName}>Nouman Karim</Text>
                    <Text style={styles.profileDataBio}>React Native Student</Text>
                    <View style={styles.profileDataActivity}>
                        <View style={styles.circle} />
                        <Text style={styles.profileDataActivityText}>
                            Currently Learning
                        </Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                style={styles.editProfileButton}
            >
                <Text style={styles.editProfileButtonText}>View Profile</Text>
            </TouchableOpacity>
        </View>
    );
}