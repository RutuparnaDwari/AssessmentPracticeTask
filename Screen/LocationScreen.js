

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import * as Location from "expo-location";

const AIRPORT_LAT = 28.5562;
const AIRPORT_LNG = 77.1000;

function getSimpleDistance(lat1, lon1, lat2, lon2) {
  const R = 111;
  const x = (lat2 - lat1) * R;
  const y = (lon2 - lon1) * R * Math.cos((lat1 * Math.PI) / 180);
  return Math.sqrt(x * x + y * y);
}

export default function LocationScreen({ navigation }) {
  const [message, setMessage] = useState("Checking location...");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setMessage("Permission denied.");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      console.log("User Latitude (lat1):", latitude);
      console.log("User Longitude (lon1):", longitude);
      console.log("Airport Latitude (lat2):", AIRPORT_LAT);
      console.log("Airport Longitude (lon2):", AIRPORT_LNG);

      const distance = getSimpleDistance(
        latitude,
        longitude,
        AIRPORT_LAT,
        AIRPORT_LNG
      );

      if (distance <= 2) {
        setMessage("Inside Airport Zone");
      } else {
        setMessage("Outside Airport Zone");
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate("Scan")}>
        <Text style={styles.buttonText}>Back to Scan</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    marginBottom: 20
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
  },
});

