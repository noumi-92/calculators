import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Progress from "./components/Progress";
import Topics from "./components/Topics";
import Learning from "./components/Learning";
import Activity from "./components/Activity";
import styles from './styles/dashboard_styles';

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Header/>
        {/* Profile Card */}
        <ProfileCard/>        
        {/* Progress */}
        <Progress/>        
        {/* Topics */}
        <Topics/>        
        {/* Continue Learning */}
        <Learning/>        
        {/* Recent Activities */}
        <Activity/>      

      </ScrollView>
    </SafeAreaView>
  );
}

