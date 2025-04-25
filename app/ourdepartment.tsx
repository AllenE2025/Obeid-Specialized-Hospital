import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

// Icons
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function OurDepartment() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Image
          style={styles.bgImage}
          source={require("../assets/images/obeid-home-bg.png")}
        />

        <TouchableOpacity style={styles.logout} onPress={() => router.push("/home")}>
          <Text style={styles.logoutText}>Go Back</Text>
        </TouchableOpacity>

        <View style={styles.headerContent}>
          <View style={styles.iconTitleRow}>
          <FontAwesome name="building" size={100} color="black" />
            <Text style={styles.title}>Our Department</Text>
          </View>

          <Text style={styles.subtitle}>Book your doctor video consultation</Text>

          <TouchableOpacity style={styles.loginButton} onPress={()=>router.push("/login")}>
            <Text style={styles.loginText}>Login / Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    position: "relative",
    width: "100%",
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  logout: {
    backgroundColor: "#F2FCFF",
    alignSelf: "flex-end",
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
    zIndex: 1,
  },
  logoutText: {
    color: "black",
    fontWeight: "bold",
  },
  headerContent: {
    zIndex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  iconTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "black",
    marginLeft: 10,
    flexShrink: 1,
  },
  subtitle: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: "#F2FCFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  loginText: {
    color: "black",
    fontWeight: "bold",
  },
});
