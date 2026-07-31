import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Login() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Image
                source={require("../../assets/images/login.png")}
                style={styles.loginImageStyle}
            />

            <View style={styles.loginView}>
                <Text style={styles.loginText}>Login</Text>
            </View>

            <View style={styles.loginForm}>
                <TextInput
                    style={styles.emailField}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.passwordField}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => {navigation.reset({ index: 0, routes: [{ name: "Home" }] });}}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.registerTextView}>
                <Text>Don't have account?</Text>
                <TouchableOpacity onPress={() => {navigation.reset({ index: 0, routes: [{ name: "Register" }] });}}>
                    <Text> Register Here</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    loginImageStyle: {
        width: 200,
        height: 200,
        alignSelf: "center",
    },
    loginView: {
        marginTop: 20,
        paddingHorizontal: 30,
        justifyContent: "center",
        height: "auto",
    },
    loginText: {
        fontSize: 40,
    },
    loginForm: {
        marginTop: 20,
        justifyContent: "center",
        height: "auto",
    },
    emailField: {
        borderWidth: 1,
        marginHorizontal: 30,
        height: 60,
        borderColor: "black",
        padding: 10,
        alignItems: "center",
        fontSize: 20,
        borderRadius: 10,
    },
    passwordField: {
        borderWidth: 1,
        marginHorizontal: 30,
        height: 60,
        borderColor: "black",
        padding: 10,
        alignItems: "center",
        fontSize: 20,
        marginTop: 20,
        borderRadius: 10,
    },
    loginButton: {
        width: 300,
        height: 60,
        marginTop: 40,
        borderRadius: 10,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
    },
    loginButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    welcomeImageStyle: {
        width: 100,
        height: 100,
        alignSelf: "center",
    },
    registerTextView: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'centre',
        alignItems: 'center',
        alignSelf: 'center'
    }
});