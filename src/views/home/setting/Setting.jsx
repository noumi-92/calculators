import { View, Text } from "react-native";
import styles from "./styles/setting_styles.js";



export default function Setting(){
    return(
        <View style={styles.container}>
        <Text style={styles.headingText}>Setting</Text>
    </View>
    );    
}