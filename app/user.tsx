import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import { SafeAreaView } from "react-native-safe-area-context";

export default function User() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
            <Image style={{width: "100%", height: 95 }} source={require("../assets/images/obeid-new.png")}/>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 20}}>
                    <Text style={styles.title}>Patient's Profile</Text>
                    <TouchableOpacity style={styles.logout} onPress={() => router.push("/")}>
                        <Text style={{color: "white"}}>Log out</Text>
                    </TouchableOpacity> 
                </View>
            </View>

            <ScrollView contentContainerStyle={[styles.content, { paddingBottom: 20 }]}>
                <View>
                <Image style={{width: 100 , height: 100 }} source={require("../assets/images/profile-icon.png")} />
                <Text style={{paddingBottom: 10}}>
                Resident Number:
                </Text>
                <Text style={{paddingBottom: 10}}>
                Email:
                 </Text>
                <Text style={{paddingBottom: 10}}>
                Phone Number:
                </Text>
                <Text style={{paddingBottom: 10}}>
                Birthday:
                </Text>
                <Text style={{paddingBottom: 10}}>
                Address:
                </Text>
                <Text style={{paddingBottom: 10}}>
                Gender:
                </Text>
                <TouchableOpacity style={{ flexDirection: "row",
                     backgroundColor: "#0D6EFD" ,
                      width: 100, borderRadius: 5 ,
                       paddingVertical: 10,
                       paddingHorizontal: 15,
                       justifyContent: "center"}} onPress={()=> router.push("/edituser")}>
                <Feather name="edit" size={24} color="white" />
                    <Text style={{color: "white"}}>
                        Edit Profile
                    </Text>
                </TouchableOpacity>
                </View>
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
    }
});
