import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
    StyleSheet,
    SafeAreaView,
    Image,
    Dimensions,
    ScrollView,
    PixelRatio,
    FlatList,


} from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'

import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default InfoScreen = () => {

    const navigation = useNavigation()
    const route = useRoute()
    return (
        <SafeAreaView style={styles.backGround} >
            <FlatList
                style={{}}
                horizontal
                data={route.params.images}
                initialScrollIndex={0}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.image_View}>
                            <Image style={styles.image}
                                resizeMode="stretch"
                                source={item}
                            />
                            

                        </View>
                    );


                }

                }

            />

            <View style={{ backgroundColor: "black", height: "48%", borderRadius: 20, borderWidth: 5, borderStyle: "dotted", borderColor: "black", marginHorizontal: "3%", paddingHorizontal: "3%", paddingBottom: "3%",marginBottom:PixelRatio.getPixelSizeForLayoutSize(10) }}>
                <Text style={{ textAlign: "center", fontSize: PixelRatio.getFontScale() * 40, fontWeight: "bold", color: "red" }}>{route.params.name}</Text>
                
                <ScrollView>
                    <Text style={{ fontSize: PixelRatio.getFontScale() * 20, color: "white" }}>
                        {route.params.about}
                    </Text>
                </ScrollView>
               
            </View>


        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        backgroundColor: "grey",


    },
    image_View: {
        width: Dimensions.get("screen").width / 1.05,
     //  height: Dimensions.get("screen").height/2.5,
     height:"90%",
        marginHorizontal:PixelRatio.getPixelSizeForLayoutSize(4),
        marginTop:PixelRatio.getPixelSizeForLayoutSize(5),
        borderRadius: 25,
        borderStyle:"dotted",
        borderColor:"black",
        borderWidth:5,
        justifyContent:"center",
        alignContent:"center",

    },

    image: {
        width:"100%",
        
        flex: 1,
        borderRadius: 25,
        
        

    },


})

