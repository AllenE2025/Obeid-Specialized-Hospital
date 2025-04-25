import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

// Icons
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function MedicalFile() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require("../assets/images/obeid-new-reverse.png")}
        />
      </View>

      {/* Title */}
      <Text style={styles.pageTitle}>Medical Record</Text>

      {/* Medical Info Options */}
      
        <View style={styles.content}>
          {[
            "Past Medical History",
            "Family Medical History",
            "Current Medications",
            "Treatment Plans",
            "Laboratory Results",
          ].map((label, index) => (
            <TouchableOpacity key={index} style={styles.recordButton}>
              <Text style={{ fontSize: 20, alignSelf: "center"}}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      

      {/* Bottom Navigation */}
      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={() => router.push("/home")}>
          <View style={styles.barButtons}>
            <AntDesign name="home" size={24} color="black" />
            <Text style={styles.iconText}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.barButtons}>
            <AntDesign name="filetext1" size={24} color="black" />
            <Text style={styles.iconText}>Medical File</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.barButtons}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text style={styles.iconText}>My Appointment</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/department")}>
          <View style={styles.barButtons}>
            <FontAwesome6 name="building" size={24} color="black" />
            <Text style={styles.iconText}>Department</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "flex-end",
    paddingRight: 10,
    backgroundColor: "#D9D9D9",
  },
  headerImage: {
    width: "80%",
    height: 100,
    resizeMode: "contain",
  },
  pageTitle: {
    fontWeight: "bold",
    fontSize: 30,
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  recordButton: {
    elevation: 8,
    backgroundColor: "#f0f0f0",
    marginBottom: 25,
    borderRadius: 20,
    padding: 30,
  },
  navigationBar: {
    backgroundColor: "#CDE7EF",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
  barButtons: {
    alignItems: "center",
  },
  iconText: {
    color: "black",
    fontSize: 12,
  },
});
