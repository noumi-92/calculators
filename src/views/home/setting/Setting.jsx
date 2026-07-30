import { View, Text, StyleSheet} from "react-native";



export default function Setting(){
    return(
        <View style={styles.container}>
        <Text style={styles.headingText}>Setting</Text>
    </View>
    );    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7c5f7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingText: {
    fontSize: 32,
    marginBottom: 20
  }
});