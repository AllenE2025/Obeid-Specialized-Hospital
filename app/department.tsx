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
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Department() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={{ alignItems: "flex-end", paddingRight: 10, backgroundColor: "#D9D9D9"}}>
      <Image
          style={styles.headerImage}
          source={require("../assets/images/obeid-new-reverse.png")}
        />
        </View>
<Text style={{fontWeight: "bold", fontSize: 30, paddingVertical: 20, marginHorizontal: 20}}>
    Our Departments
</Text>
      {/* Services Section */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.departments}>
            <Image source={require("../assets/images/internal-medicine.png")}/>
            <Text style={styles.departmentText}>Internal Medicine</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.departments}>
          <Image source={require("../assets/images/surgery-department.png")}/>
            <Text style={styles.departmentText}>Surgery Department</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.departments}>
          <Image source={require("../assets/images/cardiology-department.png")}/>
            <Text style={styles.departmentText}>Cardiology Department</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.departments}>
          <Image source={require("../assets/images/dental-department.png")}/>
            <Text style={styles.departmentText}>Dental Department</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.departments}>
          <Image source={require("../assets/images/laboratory-department.png")}/>
            <Text style={styles.departmentText}>Laboratory Department</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.departments}>
          <Image source={require("../assets/images/pediatrics-department.png")}/>
            <Text style={styles.departmentText}>Pediatrics Department</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.departments}>
          <Image source={require("../assets/images/radiology-department.png")}/>
            <Text style={styles.departmentText}>Radiology Department</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.departments}>
          <Image source={require("../assets/images/emergency-department.png")}/>
            <Text style={styles.departmentText}>Emergency Department</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.departments}>
          <Image source={require("../assets/images/physiotherapy-department.png")}/>
            <Text style={styles.departmentText}>Physiotherapy Department</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Navigation Bar */}
      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={()=> router.push("/home")}>
          <View style={styles.barButtons}>
            <AntDesign name="home" size={24} color="black" />
            <Text style={styles.iconText}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> router.push("/medicalfile")}>
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

        <TouchableOpacity>
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
  content: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  logout: {
    backgroundColor: "#CDE7EF",
    alignSelf: "flex-end",
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 10,
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
  headerImage: {
    width: "80%",
    height: 100,
    resizeMode: "contain",
    zIndex: 1,
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    elevation: 8,
    marginBottom: 5,
    borderRadius: 10,
    padding: 30,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  profileImage: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "lightgray",
    marginRight: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  profileStatsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    flexWrap: "wrap",
  },
  iconWithText: {
    alignItems: "center",
    marginRight: 10,
  },
  iconBox: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    marginBottom: 3,
  },
  viewMoreBtn: {
    backgroundColor: "#CDE7EF",
    alignSelf: "flex-end",
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  departments: {
    backgroundColor: "#FFFFFF",
    width: "47%",
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: 20,
    marginVertical: 5,
    elevation: 8,
  },
  departmentText: {
    color: "black",
    textAlign: "center",
    marginTop: 5,
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
  },
});
