import { Text, View, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function LogIn() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image style={{marginVertical: 10}} source={require("../assets/images/obeid-home.png")} />
      
      <TextInput placeholder="User Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <TouchableOpacity onPress={() => router.push("/home")}>
        <Text style={styles.loginButton}>Login</Text>
      </TouchableOpacity>

      {/* Keep everything inside one Text component */}
      <Text style={styles.signupText}>
        Don't have an account?{" "}
        <Text style={styles.signupLink} onPress={() => router.push("/signin")}>
          Sign up here
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
   
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    
  },
  signupText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold"
  },
  signupLink: {
    color: "#1D9EC4",
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#1D9EC4",
    color:"black",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10
  }
});
