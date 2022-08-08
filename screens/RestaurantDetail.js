import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import About from "../components/restaurantDetail/About";
import { Divider } from "@rneui/themed";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

export default function RestaurantDetail({route, navigation}) {
    return (
        <View style={{height: "100%"}}>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems restaurantName={route.params.name} />
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </View>
    )
}