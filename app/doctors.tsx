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

export default function Doctors() {
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
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
       
      <Text style={styles.pageTitle}>Doctors</Text>
      <TouchableOpacity
                style={styles.logout}
                onPress={() => router.push("/")}
              >
                <Text style={{ color: "black" }}>Go Back</Text>
              </TouchableOpacity>
      </View>
      {/* Medical Info Options */}
      
        <View style={styles.content}>
          {[
            "Internal Medicine",
            "Surgery Department",
            "Cardiology Department",
            "Dental Department",
            "Oncology Department",
            "Children's Department"
          ].map((label, index) => (
            <TouchableOpacity key={index} style={styles.recordButton}>
              <Text style={{ fontSize: 20, alignSelf: "center"}}>{label}</Text>
            </TouchableOpacity>
          ))}
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
  logout: {
    backgroundColor: "#CDE7EF",
    alignSelf: "center",
    padding: 8,
    borderRadius: 5,
    
    marginRight: 10,
  },
});
