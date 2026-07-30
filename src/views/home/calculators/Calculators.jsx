import { View, Text, StyleSheet } from "react-native";


export default function Calculators(){
    return(
        <View style={styles.container}>
        <Text style={styles.headingText}>Calculators</Text>
    </View>
    );    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5f7c5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingText: {
    fontSize: 32,
    marginBottom: 20
  }
});