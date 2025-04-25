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

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Image
          style={styles.bgImage}
          source={require("../assets/images/obeid-home-bg.png")}
        />

        <TouchableOpacity
          style={styles.logout}
          onPress={() => router.push("/")}
        >
          <Text style={{ fontWeight: "bold" }}>Log out</Text>
        </TouchableOpacity>

        <Image
          style={styles.headerImage}
          source={require("../assets/images/obeid-home.png")}
        />

        <View style={styles.profileCard}>
          <Image
            style={styles.profileImage}
            source={require("../assets/images/arabian.png")}
          />
          <View>
            <Text style={styles.boldText}>Hello</Text>
            <Text>Test Patient</Text>
            <Text>Patient Number: *******</Text>
            <Text>Admission Date: March 28, 2025</Text>

            <View style={styles.profileStatsRow}>
              <View style={styles.iconWithText}>
                <Fontisto
                  style={styles.iconBox}
                  name="date"
                  size={24}
                  color="black"
                />
                <Text>Age</Text>
              </View>

              <View style={styles.iconWithText}>
                <MaterialCommunityIcons
                  style={styles.iconBox}
                  name="gender-male-female"
                  size={24}
                  color="black"
                />
                <Text>Gender</Text>
              </View>

              <View style={styles.iconWithText}>
                <Entypo
                  style={styles.iconBox}
                  name="location"
                  size={24}
                  color="black"
                />
                <Text>Location</Text>
              </View>

              <View style={styles.iconWithText}>
                <FontAwesome
                  style={styles.iconBox}
                  name="group"
                  size={24}
                  color="black"
                />
                <Text>Family</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.viewMoreBtn}>
              <Text style={{fontWeight: "bold"}}>View More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Services Section */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.departments} onPress={()=> router.push("/bookappointment")}>
            <Ionicons name="calendar-sharp" size={24} color="black" />
            <Text style={styles.departmentText}>Book Appointment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.departments} onPress={()=> router.push("/medicalfiles")}>
            <FontAwesome5 name="file-medical" size={24} color="black" />
            <Text style={styles.departmentText}>Medical Files</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.departments} onPress={()=> router.push("/onlineconsultation")}>
            <FontAwesome6 name="user-doctor" size={24} color="black" />
            <Text style={styles.departmentText}>Online Consultation</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.departments} onPress={()=> router.push("/myapprovals")}>
            <MaterialCommunityIcons
              name="file-check"
              size={24}
              color="black"
            />
            <Text style={styles.departmentText}>My Approvals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.departments} onPress={()=> router.push("/ourdepartment")}>
          <FontAwesome name="building" size={24} color="black" />
            <Text style={styles.departmentText}>Our Department</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.departments} onPress={()=>router.push("/onlinepayment")}>
          <FontAwesome name="credit-card-alt" size={24} color="black" />
            <Text style={styles.departmentText}>Online Payment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.departments} onPress={()=>router.push("/laboratoryresults")}>
          <FontAwesome6 name="flask" size={24} color="black" />
            <Text style={styles.departmentText}>Laboratory Results</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Navigation Bar */}
      <View style={styles.navigationBar}>
        <TouchableOpacity>
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

        <TouchableOpacity onPress={()=>router.push("/appointment")}>
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
  content: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  logout: {
    backgroundColor: "#F2FCFF",
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
    width: "60%",
    height: 160,
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
