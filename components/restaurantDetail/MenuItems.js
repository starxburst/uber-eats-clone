import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView, StyleSheet } from "react-native";
import { Divider } from "@rneui/themed";

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

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    }
})

export default function MenuItems() {
    return (
            <ScrollView showsVerticalScrollIndicator={false} style={{borderWidth: 5,  borderColor: 'red'}} >
                {foods.map((food, index) => {
                    return (
                        <View key={index} >
                            <View key={index} style={styles.menuItemStyle} >
                                <FoodInfo food={food} />
                                <FoodImage food={food} />
                            </View>
                            <Divider width={0.5} orientation="vertical" />
                        </View>
                    )
                })}
            </ScrollView>
    )
}

const FoodInfo = (props) => {
    return (
        <View style={{width: 240, justifyContent: "space-evenly"}} >
            <Text style={styles.titleStyle} >{props.food.title}</Text>
            <Text>{props.food.description}</Text>
            <Text>{props.food.price}</Text>
        </View>
    )
}

const FoodImage = (props) => {
    return (
        <View>
            <Image source={{uri: props.food.image}} style={{width: 100, height: 100, borderRadius: 8}} />
        </View>

    )
}