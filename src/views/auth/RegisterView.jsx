import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default function Register() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/register.png")}
                style={styles.registerImageStyle}
            />
            <View style={styles.registerView}>
                <Text style={styles.registerText}>Register</Text>
            </View>
            <View style={styles.registerForm}>
                <TextInput style={styles.emailField} placeholder="Enter your email" keyboardType='email-address' />
                <TextInput style={styles.passwordField} placeholder="Enter your password" secureTextEntry={true} />
                <TouchableOpacity style={styles.registerButton} onPress={() => {navigation.navigate("Dashboard");}}>
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.loginTextView}>
                <Text>Already have account?</Text>
                <TouchableOpacity onPress={() => {navigation.navigate("Login");}}>
                    <Text> Login Here</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    registerView: {
        marginTop: 20,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 'auto',
    },
    registerImageStyle: {
        width: 200,
        height: 200,
        alignSelf: "center",
    },
    registerText: {
        fontSize: 40,
    },
    registerForm: {
        marginTop: 20,
        justifyContent: 'center',
        height: 'auto',
    },
    emailField: {
        borderWidth: 1,
        marginHorizontal: 30,
        height: 60,
        borderColor: 'black',
        padding: 10,
        alignItems: 'center',
        fontSize: 20,
        borderRadius: 10,
    },
    passwordField: {
        borderWidth: 1,
        marginHorizontal: 30,
        height: 60,
        borderColor: 'black',
        padding: 10,
        alignItems: 'center',
        fontSize: 20,
        marginTop: 20,
        borderRadius: 10,
    },
    registerButton: {
        width: 300,
        height: 60,
        marginTop: 40,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    registerButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    loginTextView: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'centre',
        alignItems: 'center',
        alignSelf: 'center'
    }
});