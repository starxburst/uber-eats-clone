import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { db } from "../../config/firebase";
import { getFirestore, collection, getDocs, addDoc, doc, setDoc } from 'firebase/firestore';
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const {items, restaurantName } = useSelector(state => state.cartReducer.selectedItems);
    

    const total = items
        .map((item => Number(item.price.replace("$", ""))))
        .reduce((acc, curr) => acc + curr, 0);

    const totalUSD = `$${total.toFixed(2)}`;
    console.log(totalUSD);

    const addOrderToFireBase = async() => {
        setLoading(true);
        const dbRef = collection(db, "Orders");
        await addDoc(dbRef, {
            restaurantName: restaurantName,
            createdAt: new Date(),
            items: items,
        });
        setTimeout(() => {
            setLoading(false);
            setModalVisible(false);
            navigation.navigate("OrderCompleted");
        },2500);
    }

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
        modalCheckoutContainer: {
            backgroundColor: "white",
            padding: 16,
            height: 500,
            borderWidth: 1,
        },

        restaurantName: {
            textAlign: "center",
            fontSize: 18,
            fontWeight: "600",
            marginBottom: 10,
        },

        subtotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,            
        },

        subtotalText: {
            textAlign: "left",
            fontSize: 15,
            fontWeight: "600",
            marginBottom: 10,
        },
    });

    const checkoutModelContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer} >
                        <Text style={styles.restaurantName} >{restaurantName}</Text>
                        {items.map((item, index) => {
                            return (
                                <OrderItem key={index} item={item} />
                            )
                        })}
                        <View style={styles.subtotalContainer} >
                            <Text style={styles.subtotalText} >Subtotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }} >
                            <TouchableOpacity 
                                onPress={() => {
                                    //setModalVisible(false)//
                                    addOrderToFireBase();
                                    setModalVisible(false);
                                    }
                                }
                                style={{
                                    marginTop: 20,
                                    backgroundColor: "green",
                                    alignItems: "center",
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                    position: "relative",
                                }} 
                                >
                                <Text style={{ color: "white", fontSize: 20 }} >Checkout</Text>
                                <Text style={{
                                    position: "absolute",
                                    right: 20,
                                    color: "white",
                                    fontSize: 15,
                                    top: 17}} >
                                    {total ? totalUSD: ""}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    /*const totalUSD = total.toLocalString("en", {style: "currency", currency: "USD"});

    console.log(totalUSD);*/

    return (
        <>
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)} >
            {checkoutModelContent()}
        </Modal>
        {total ? (
            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                position: "absolute",
                bottom: 50,
                zindex: 999,
            }} >
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",
                }} >
                    <TouchableOpacity style={{
                        marginTop: 20,
                        backgroundColor: "black",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        padding: 15,
                        borderRadius: 30,
                        width: 300,
                        position: "relative",
                        }}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={{color: "white", fontSize: 20, marginRight: 30}} >View Cart</Text>
                        <Text style={{ color: "white", fontSize: 20}} >{totalUSD}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ) : (
            <></>
        )}
        {loading? (<View style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            flex: 1,
        }}>
            <LottieView 
                style={{height: 200}}
                source={require("../../assets/animations/scanner.json")} autoPlay loop speed={3} />

        </View>): (<></>)}
        </>
    )
}