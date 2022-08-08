import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Image, ScrollView, StatusBar } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import { db } from "../config/firebase";
import { getFirestore, collection, getDocs, getDoc, query, orderBy, limit, get } from 'firebase/firestore';
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function Ordercompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Bologna",
                description: "With Butter and Cheese",
                price: "$13.50",
                image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            }
        ]
    });
    const {items, restaurantName } = useSelector(state => state.cartReducer.selectedItems);
    

    const total = items
        .map((item => Number(item.price.replace("$", ""))))
        .reduce((acc, curr) => acc + curr, 0);

    const totalUSD = `$${total.toFixed(2)}`;
    console.log(totalUSD);

    const getStatusBarHeight = () => {
        console.log('statusBarHeight: ', StatusBar.currentHeight);
        return initialWindowMetrics?.insets.top || 0
    }

    const getFirebaseDocs = async() => {
        //get last order
        const dbRef = collection(db, "Orders");
        const q = query(dbRef, orderBy("createdAt", "desc"), limit(1));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => doc.data());
        console.log(data);
        setLastOrder(data[0]);
    }

    useEffect(() => {
        getFirebaseDocs();
    },[]);

    return (
        <SafeAreaView style={{marginTop: StatusBar.currentHeight, flex: 1, backgroundColor: "white"}} >
            <LottieView 
                style={{
                    height: 100,
                    alignSelf: "center",
                    marginBottom: 30,
                }}
                source={require("../assets/animations/check-mark.json")} autoPlay loop={false}/>
                <Text>
                    Your order at {restaurantName} has been placed for {totalUSD}
                </Text>
                <MenuItems foods={lastOrder.items} hideCheckbox={true} />
                <LottieView 
                style={{
                    height: 100,
                    alignSelf: "center",
                    marginBottom: 30,
                }}
                source={require("../assets/animations/cooking.json")} autoPlay loop={false}/>
        </SafeAreaView>
    )
}