import { Text, View, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function AppoinmentSummary () {

const router = useRouter()

    return (
        <View>
            <Text>
                Appointment Summary
            </Text>
            <TouchableOpacity onPress={()=> router.push("/appointment")}>
                <Text>
                    Go Back
                </Text>
            </TouchableOpacity>
        </View>
    )
}