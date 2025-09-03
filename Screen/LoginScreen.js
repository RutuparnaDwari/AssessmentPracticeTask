import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable, Alert } from "react-native";


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />
            <Pressable
                style={styles.button}
                onPress={() => {
                    Alert.alert("Entered Values", `Email: ${email}\nPassword: ${password}`);
                    navigation.navigate("Posts");
                }}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
             <View style={{ marginTop: 20 }}>
                <Pressable style={styles.counterButton} onPress={()=>navigation.navigate('Counter')}>
                    <Text style={styles.counterButtonText}>Go to Counter</Text>

                </Pressable>
             </View>

        </View>
    )
}



const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, alignItems: "center", justifyContent: 'center' },
    header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
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