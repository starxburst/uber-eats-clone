import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";

const yelpRestaurentInfo = {
    name: "Farmhouse Kitchen That Chisine",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: "$$",
    reviews: "1500",
    rating: "4.5",
    categories: [{ title: "Thai"}, { title: "Comfort Fodd"}],
};



export default function About(props) {

    const {name, image, price, review_count, rating, categories} = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const description = `${formattedCategories} ${price ? " • " + price: ""} • 💸 • ${rating} ⭐(${review_count}+)`;

    return (
        <View>
            <RestaurantImage image={image}/>
            <RestaurantName title={name}/>
            <RestaurantDescription description={description}/>
        </View>
    )
}

const RestaurantImage = (props) => {
    return (
        <Image source={{uri: props.image}} style={{ width: "100%", height: 180 }} />
    )
}

const RestaurantName = (props) => {
    return (
        <Text 
            style={{
                fontSize: 29,
                fontWeight: "600",
                marginTop: 10,
                marginHorizontal: 15,
            }} 
        >
            {props.title}
        </Text>

    )
}

const RestaurantDescription = (props) => {
    return (
        <Text
            style={{
                marginTop: 10,
                marginHorizontal: 15,
                fontSize: 15.5,
                fontWeight: "400",
            }}
        >
            {props.description}
        </Text>
    )
}