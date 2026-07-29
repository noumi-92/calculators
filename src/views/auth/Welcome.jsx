import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.welcomeImage}>
        <Image
          source={require("../../assets/images/hello.jpg")}
          style={styles.welcomeImageStyle}
        />
      </View>

      <View style={styles.welcomeView}>
        <Text style={styles.welcomeText}>Welcome to Our App</Text>
      </View>

      <View style={styles.welcomeForm}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeImage: {
    marginTop: 150,
    paddingHorizontal: 30,
    justifyContent: "center",
    height: "auto",
  },
  welcomeImageStyle: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  welcomeView: {
    marginTop: 20,
    paddingHorizontal: 30,
    justifyContent: "center",
    height: "auto",
  },
  welcomeText: {
    fontSize: 40,
    textAlign: "center",
  },
  welcomeForm: {
    marginTop: 20,
    paddingHorizontal: 30,
    justifyContent: "center",
    height: "auto",
  },
  loginButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  registerButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  registerButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});