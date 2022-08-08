import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart() {

    const [modalVisible, setModalVisible] = useState(false);
    const {items, restaurentName } = useSelector(state => state.cartReducer.selectedItems);

    const total = items
        .map((item => Number(item.price.replace("$", ""))))
        .reduce((acc, curr) => acc + curr, 0);

    const totalUSD = `$${total.toFixed(2)}`;
    console.log(totalUSD);

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
                        <Text style={styles.restaurantName} >{restaurentName}</Text>
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
        )
        }
        </>
    )
}