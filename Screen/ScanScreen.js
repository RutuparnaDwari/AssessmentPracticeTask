
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function ScanScreen({ navigation }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedText, setScannedText] = useState("");
  const [scanned, setScanned] = useState(false); 

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>Camera access is required</Text>
        <Pressable style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </Pressable>
      </View>
    );
  }

  const handleScan = ({ data }) => {
    if (!scanned) {
      setScannedText(data);
      setScanned(true); 
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {!scanned ? (
        <>
          <CameraView
            style={{ flex: 1 }}
            barcodeScannerSettings={{
              barcodeTypes: ["qr", "ean13", "code128"],
            }}
            onBarcodeScanned={handleScan}
          />
          <Text style={styles.tip}>Point camera at QR/Barcode</Text>
        </>
      ) : (
        <View style={styles.result}>
          <Text style={styles.text}>Scanned: {scannedText}</Text>

          <Pressable
            style={styles.buttonLocation}
            onPress={() => navigation.navigate("Location")}
          >
            <Text style={styles.buttonText}>Go to Location Check</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => {
              setScanned(false); 
              setScannedText("");
            }}
          >
            <Text style={styles.buttonText}>Scan Again</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  result: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  tip: {
    textAlign: "center",
    margin: 10,
    fontSize: 16,
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
  buttonLocation: {
    backgroundColor: "#28A745",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

