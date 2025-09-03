import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function CounterScreen() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Counter</Text>
            <Text style={styles.counter}>{count}</Text>
            <View style={styles.buttonRow}>
                <Pressable
                    onPress={() => setCount(count + 1)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
                <Pressable 
                onPress={() => setCount(count - 1)}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: "center"
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    counter: {
        fontSize: 32,
        margin: 20
    },
    buttonRow: {
        flexDirection: "row",
        gap: 10
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignItems: "center",
        minWidth: 50,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
});
