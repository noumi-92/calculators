import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  scrollViewContent: {
    padding: 16,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerGreetingText: {
    fontSize: 14,
    color: "gray",
  },
  headerNameText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  headerProfileButton: {
    backgroundColor: "white",
    padding: 4,
    borderRadius: 10,
  },
  profileCard: {
    backgroundColor: "blue",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
  },
  profileData: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileInitials: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  profileInitialsText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "blue",
  },
  profileDataList: {
    paddingLeft: 12,
  },
  profileDataName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  profileDataBio: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
  },
  profileDataActivity: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
    marginRight: 6,
  },
  profileDataActivityText: {
    color: "white",
    fontSize: 12,
  },
  editProfileButton: {
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 14,
    alignItems: "center",
  },
  editProfileButtonText: {
    fontWeight: "600",
    color: "black",
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },
  statSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 10,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "800",
  },
  statText: {
    fontSize: 12,
    color: "gray",
    marginTop: 2,
  },
  topicSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  topic: {
    width: "30%",
    backgroundColor: "white",
    paddingVertical: 12,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  topicIcon: {
    backgroundColor: "#EFEAFA",
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  topicName: {
    marginTop: 6,
    fontSize: 12,
    color: "#333",
  },
  learningCard: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
  },
  learningHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  learningIcon: {
    backgroundColor: "#EFEAFA",
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  learningTextContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  learningTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  learningSubtitle: {
    fontSize: 12,
    color: "gray",
  },
  learningContinueIcon: {
    backgroundColor: "#EFEAFA",
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  progressBarBackground: {
    height: 8,
    width: "100%",
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    width: "65%",
    backgroundColor: "#616ACF",
    borderRadius: 4,
  },
  progressData: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  progressText: {
    fontSize: 12,
    color: "gray",
  },
  progressButton: {
    backgroundColor: "#616ACF",
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  progressButtonText: {
    color: "white",
    fontWeight: "600",
  },
  activitySection: {
    gap: 10,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 12,
  },
  activityItemIcon: {
    backgroundColor: "#EFEAFA",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 15,
    fontWeight: "600",
  },
  activitySubTitle: {
    fontSize: 12,
    color: "gray",
  },
  activityTime: {
    fontSize: 12,
    color: "gray",
  },
});