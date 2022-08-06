import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems, { localRestaurants } from "../components/RestaurantItems";
import SearchBar from '../components/SearchBar';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { YELP_API_KEY } from "@env";



export default function Home() {

    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("Hong Kong");

    const getStatusBarHeight = () => {
        console.log('statusBarHeight: ', StatusBar.currentHeight);
        return initialWindowMetrics?.insets.top || 0
    }
    

    const getRestaurantsFromYelp = async (term, location) => {
        const response = await fetch(`https://api.yelp.com/v3/businesses/search?term=restaurent&location=${city}`, {
            headers: {
                Authorization: `Bearer ${process.env.YELP_API_KEY}`
            }
        });
        const json = await response.json();
        setRestaurantData(json.businesses);
    }

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city])

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, marginTop: StatusBar.currentHeight }}>
            <View style={{ backgroundColor: "white", padding: 15, }}>
                <HeaderTabs />
                <SearchBar setCity={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    );

}