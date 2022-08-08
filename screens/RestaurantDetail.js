import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import About from "../components/restaurantDetail/About";
import { Divider } from "@rneui/themed";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce",
        price: "$13.50",
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian Dish",
        price: "$19.2",
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        title: "Chilaquiles",
        description: "Chilaquiles ChilaquilesChilaquiles good",
        price: "$14.50",
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        title: "Chicken Caesar Salad",
        description: "Chilaquiles ChilaquilesChilaquiles good",
        price: "$14.50",
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    
];

export default function RestaurantDetail({route, navigation}) {
    return (
        <View style={{height: "100%"}}>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems restaurantName={route.params.name} foods={foods}/>
            <ViewCart navigation={navigation} />
        </View>
    )
}