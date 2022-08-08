import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import About from "../components/restaurantDetail/About";
import { Divider } from "@rneui/themed";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function RestaurantDetail() {
    return (
        <View style={{height: "100%"}}>
            <About/>
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems />
        </View>
    )
}