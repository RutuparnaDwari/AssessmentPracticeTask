import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleLogin = async () => {
        if (name && email) {
            await AsyncStorage.setItem("user", JSON.stringify({ name, email }));
            navigation.navigate("Scan");

        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <TextInput
                placeholder="Enter Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <Pressable
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    )
}



const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        alignItems: "center", 
        justifyContent: 'center' 
    },
    header: { 
        fontSize: 24, 
        fontWeight: "bold", 
        marginBottom: 20 
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginVertical: 5,
        width: "80%",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginTop: 15,
        alignItems: "center",
        width: "80%",
    },
    counterButton: {
        borderWidth: 2,
        borderColor: "#007BFF",
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        alignItems: "center",
        width: "80%",
        marginTop: 10,
    },
    counterButtonText: {
        color: "#007BFF",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});