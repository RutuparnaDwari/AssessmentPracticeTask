import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Post Details</Text>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16 
},
  header: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20, 
    textAlign: "center" 
},
  postTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 10 
},
});
