import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import {GOOGLE_API_KEY} from '@env'

export default function SearchBar({setCity}) {
    return (
        <View style={{ marginTop: 15, flexDirection: "row" }}>
            <GooglePlacesAutocomplete 
                query={{ key: process.env.GOOGLE_API_KEY }}
                onPress={(data, details = null) => {
                    console.log(data.description);
                    const city = data.description.split(',')[0];
                    setCity(city);
                }}
                placeholder="Search" 
                styles={{
                    textInput : {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10,
                    }
                }} 
                renderLeftButton={() => {
                    return (
                        <View style={{marginLeft: 10}}>
                            <Ionicons name="location-sharp" size={24} />
                        </View>
                    )
                }}
                renderRightButton={() => {
                    return (
                        <View style={{
                            flexDirection: "row",
                            marginRight: 8,
                            backgroundColor: "white",
                            padding: 9,
                            borderRadius: 30,
                            alignItems: "center",
                        }}>                            
                            <AntDesign 
                                name="clockcircle" 
                                size={11} 
                                style={{ marginRight: 6 }} />
                            <Text>Search</Text>
                        </View>
                    )
                }}
                />
        </View>
    )
}