import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import BottomTabs from "../components/home/BottomTabs";
import SearchBar from '../components/home/SearchBar';
import RestaurantItems, { localRestaurants } from "../components/home/RestaurantItems";
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { YELP_API_KEY } from "@env";
import { Divider } from "@rneui/themed";




export default function Home() {

    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("New York");
    const [activeTab, setActiveTab] = useState("Delivery");

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
        setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())));
    }

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, marginTop: StatusBar.currentHeight }}>
            <View style={{ backgroundColor: "white", padding: 15, }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar setCity={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs />
        </SafeAreaView>
    );

}