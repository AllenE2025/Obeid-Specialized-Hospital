import { Text, View, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function SignIn() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top image container */}
      <View style={styles.topContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/obeid.jpg")}
          resizeMode="contain"
        />
      </View>

      {/* Sign-up form container */}
      <View style={styles.formContainer}>
        <TextInput placeholder="Full Name" style={styles.input} />
        <TextInput placeholder="Enter your email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry />
        <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry />
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.signinButton}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Already have an account?{" "}
          <Text style={styles.signupLink} onPress={() => router.push("/login")}>
            Log in
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
  },
  image: {
    width: "100%",
    height: 150,
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  },
  signupLink: {
    color: "#1D9EC4",
    fontWeight: "bold",
  },
  signinButton: {
    backgroundColor: "#1D9EC4",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
});
