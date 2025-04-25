import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useRouter } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditUser() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
            <Image style={{width: "100%", height: 95 }} source={require("../assets/images/obeid-new.png")}/>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 20}}>
                    <Text style={styles.title}>Edit Patient's Profile</Text>
                    <TouchableOpacity style={styles.logout} onPress={() => router.push("/")}>
                        <Text style={{color: "white"}}>Log out</Text>
                    </TouchableOpacity> 
                </View>
            </View>

            <ScrollView contentContainerStyle={[styles.content, { paddingBottom: 20 }]}>
               <View style={{flexDirection: "row", alignItems:"center"}}>
                <Image style={{width: 100 , height: 100 }} source={require("../assets/images/profile-icon.png")} />
                <TouchableOpacity style={styles.button1}>
                    <Text style={{color: "white"}}>
                        Change Picture
                    </Text>
                </TouchableOpacity>
                </View>
                 <TextInput placeholder="Resident Number" style={styles.input} />
               <TextInput placeholder="Email" style={styles.input}/>
               <TextInput placeholder="Phone Number" style={styles.input}/>
               <TextInput placeholder="Birthday" style={styles.input}/>
                <TextInput placeholder="address" style={styles.input}/>
                <TextInput placeholder="Gender" style={styles.input}/>
                <TouchableOpacity style={styles.button2} onPress={()=> router.push("/user")}>
                    <Text style={{color: "white"}}>
                        Save Changes
                    </Text>
                </TouchableOpacity>
              
            </ScrollView>

            <View style={styles.navigationBar}>
                <TouchableOpacity>
                    <View style={styles.activeBarButtons}>
                        <AntDesign name="user" size={24} color="white" />
                        <Text style={styles.iconText}>User Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/home")}>
                    <View style={styles.barButtons}>
                        <AntDesign name="home" size={24} color="white" />
                        <Text style={styles.iconText}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/appointment")}>
                    <View style={styles.barButtons}>
                        <AntDesign name="calendar" size={24} color="white" />
                        <Text style={styles.iconText}>Appointment</Text>
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
        paddingTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 10
    },
    departmentsTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 10,
        paddingVertical: 20
    },
    logout: {
        backgroundColor: "#233890",
        alignSelf: "flex-end",
        padding: 8,
        borderRadius: 5,
        marginTop: 10,
        marginRight: 10
    },
    navigationBar: {
        backgroundColor: "#233890",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 14,
    },
    barButtons: {
        alignItems: "center",
        
    },
    activeBarButtons: {
        alignItems: "center",
        backgroundColor: "gray",
        borderRadius: 100,
        padding: 10
        
    },
    iconText: {
        color: "white"
    },
    departments: {
        backgroundColor:"#233890",
        width: "47%",
        borderRadius: 5,
        alignItems: "center",
        paddingVertical: 20,
        marginVertical: 5,
    },
    departmentText: {
        color: "white",
        textAlign: "center",
        marginTop: 5
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        marginVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
      button2:{
            marginTop: 5,
                        flexDirection: "row",
                        backgroundColor: "#0D6EFD",
                        width: 100,
                            borderRadius: 5,
                            paddingVertical: 10, 
                            paddingHorizontal: 3,
                            justifyContent: "center"
      },
      button1: {
        backgroundColor: "#0D6EFD",
            borderRadius: 5,
            justifyContent: "center",
            height: 40,
            paddingHorizontal: 5,
      }
});
