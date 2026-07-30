import { View, Text } from "react-native";
import styles from "./styles/profile_styles.js";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";




export default function Profile(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
        <Text style={styles.headingText}>Profile</Text>
        <Button title="Logout" onPress={() => navigation.navigate("Login")}/>
    </View>
    );    
}