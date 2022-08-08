import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import About from "../components/restaurantDetail/About";
import { Divider } from "@rneui/themed";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
    {
        title: "Lasagna",
        description: "creamy ricotta cheese mixture, savory meat sauce, and mozzarella cheese",
        price: "$13.50",
        image: "https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe.jpg",
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian Dish.  It comes out succulent and intensely flavorful, and leftovers are great",
        price: "$19.2",
        image: "https://healthyrecipesblogs.com/wp-content/uploads/2021/05/tandoori-chicken-1-2021.jpg",
    },
    {
        title: "Chilaquiles",
        description: "Filled with spicy salsa verde, creamy cheeses, and crunchy tortilla chips, you won’t be able to stop yourself from snacking!",
        price: "$14.50",
        image: "https://keviniscooking.com/wp-content/uploads/2021/12/Chilaquiles-Verdes-square-1000x1000.jpg",
    },
    {
        title: "Chicken Caesar Salad",
        description: "Topped with juicy sliced chicken breast and parmesan cheese. Easy to make and perfect for lunch or light dinner option.",
        price: "$14.50",
        image: "https://healthyfitnessmeals.com/wp-content/uploads/2022/02/Grilled-chicken-kale-Caesar-salad-7-819x1024.jpg",
    },
    {
        title: "Chorizo-and-Kimchi Dogs",
        description: "At Claudette Zepeda's regional Mexican restaurant in San Diego, this dish is served as an homage to the Sonoran hot dog. Easy hacks like crumbled chorizo make this restaurant favorite easy to pull off for backyard entertaining.",
        price: "$14.50",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2013%2F05%2Fchorizo-and-kimchi-dogs-FT-RECIPE0819.jpg",
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