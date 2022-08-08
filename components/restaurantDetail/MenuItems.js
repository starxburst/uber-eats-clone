import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView, StyleSheet } from "react-native";
import { Divider } from "@rneui/themed";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";


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
        margin: 10,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    }
})

export default function MenuItems({ restaurantName }) {

    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => {
        dispatch ({
            type: "ADD_TO_CART",
            payload: {...item, restaurantName: restaurantName, checkboxValue: checkboxValue},
        })
    }

    const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

    const isFoodInCart = (food, cartItems) => {
        return Boolean(cartItems.find(item => item.title == food.title));
    }

        return (
            <ScrollView showsVerticalScrollIndicator={false} /*style={{borderWidth: 5,  borderColor: 'red'}}*/ >
                {foods.map((food, index) => {
                    return (
                        <View key={index} >
                            <View key={index} style={styles.menuItemStyle} >
                                <BouncyCheckbox 
                                    iconStyle = {{borderColor: "lightgray", borderRadius: 5}}
                                    fillColor="green"
                                    onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                                    isChecked={isFoodInCart(food, cartItems)}
                                    />
                                <FoodInfo food={food} />
                                <FoodImage food={food} />
                            </View>
                            <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20}} />
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