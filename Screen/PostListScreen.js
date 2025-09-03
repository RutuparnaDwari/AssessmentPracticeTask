import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import axios from "axios";

export default function PostListScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posts</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Details", { post: item })}
          >
            <View style={styles.postItem}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          </Pressable>
        )}
        ListFooterComponent={<Text style={styles.footer}>End of List</Text>}
      />
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
    textAlign: "center",
  },
  postItem: {
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  postTitle: { 
    fontSize: 16, 
    fontWeight: "bold" 
},
  footer: { 
    textAlign: "center", 
    padding: 10, 
    color: "gray" 
},
});
