import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url: "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: "1244",
        rating: "4.5",
    },
    {
        name: "Benihana",
        image_url: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: "1244",
        rating: "3.7",
    },
    {
        name: "India's Grill",
        image_url: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: "700",
        rating: "4.9",
    }
];

export default function RestaurantItem(props) {
    return (
        <TouchableOpacity activeOpacity={0.5} style={{ marginBottom: 30 }} >
            {props.restaurantData.map((restaurant, index) => {
                return (
                    <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }} >
                        <RestaurantImage image={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>
                    )
                })                
            }
            
        </TouchableOpacity>
    )
}

const RestaurantImage = (props) => {
    return (
        <>
            <Image
                source={{
                    uri: props.image
                }}
                style={{
                    width: "100%",
                    height: 180,
                }}
            />
            <TouchableOpacity style={{position: "absolute", right: 20, top: 20}} >
                <MaterialCommunityIcons name="heart-outline" size={20} color="red" />
            </TouchableOpacity>            
        </>
    )
};

const RestaurantInfo = (props) => {
    return (
        <View 
            style={{ 
                flexDirection: "row", 
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10, }} >
            <View>
                <Text style={{ fontSize: 15, fontWeight: "bold" }} >{props.name}</Text>
                <Text style={{ fontSize: 13, color: "gray" }} >30-45 min</Text>
            </View>
            <View 
                style={{ 
                    backgroundColor: "#eee", 
                    height: 30, 
                    width: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 15, }}>
                <Text>{props.rating}</Text>
            </View>
        </View>
    )
}