import { View, Text, StyleSheet, Button } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5f4f7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingText: {
    fontSize: 32,
    marginBottom: 20
  }
});