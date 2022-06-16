import React, { useRef, useState, useEffect } from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    Image,
    FlatList,
    SafeAreaView,
    PixelRatio,
    TouchableOpacity,
    ScrollView,
    Button,


} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
//    react-native-vector-icons-----https://github.com/oblador/react-native-vector-icons

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SelectItems from './Data/SelectItems';




let movieType = "Mix";



export default HomeScreen = () => {
    return <FilterAction />

}
let numberCount,setnumberCount;
const Data = SelectItems;
const FilterAction = () => {
    
     [numberCount,setnumberCount] = useState(Data.count);

    const [filterDataMovies, setfilterDataMovies] = useState(Data.movies.filter(a => a.id < "5"));
  

   




return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.backGround}>
                <View style={{ flexDirection: "row",width:Dimensions.get("screen").width,marginTop:"3%" }}>
                  
                    <Choose whichDropdown={0}  data={Data.type.filter(a=>Data.movies.find(b=>b.type===a||a=="Mix"))}  default_value={"Choose Type"} />
                 
                    
                    <Choose whichDropdown={1}  data={numberCount} default_value={"Select Movie Quantity"} />
                   

                </View>
                <View style={styles.button_view} >

                    <TouchableHighlight

                        style={styles.button}
                        onPress={() => {//random(Data.movies.length)
                            const dt = [];
                            let filterTypeMovies = Data.movies;
                            if (movieType != "Mix") {
                                filterTypeMovies = Data.movies.filter(a => a.type == movieType)
                                if (filterTypeMovies.length < 1) filterTypeMovies =Data.movies;
                            }
                            else if (movieType == "Mix") { filterTypeMovies = Data.movies }

                            

                           
                                const rd = random(filterTypeMovies.length)

                                for (let i = 0; i < rd.length; i++) {

                                    dt.push(filterTypeMovies[rd[i]])
                                
                            }
                            setfilterDataMovies(dt)

                        }
                        }

                    >
                        <Text style={styles.button_text}> Random </Text>
                    </TouchableHighlight>
                </View>

                <Goster data={filterDataMovies} />
            </View>
        </SafeAreaView>
    );

}


const styles = StyleSheet.create({
    backGround: {

        flexGrow: 1,
        backgroundColor: "grey",
        // alignSelf: "center",




    },
    button_view: {
        //height:Dimensions.get("screen").height/7.2,
        height: "12%",
        width: "90%",
        //width:Dimensions.get("screen").width/1.2,
        marginHorizontal: "5%",
        marginTop: "5%",
        //backgroundColor: "red",
        borderWidth: 5,
        borderRadius: 20,
        borderStyle: 'dashed',
        borderColor: "white",
    },

    button_text: {

        color: "white",
        fontWeight: '900',
        backgroundColor: "black",
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: PixelRatio.getFontScale() * 40,
        borderRadius: 20,
        flex: 1,

    },

    button: {
        flex: 1,
      buttonStyle:{}
    },

    rank_card_view: {
        backgroundColor: "black",
        marginVertical: Dimensions.get("screen").height / 30,

        /* marginLeft: Dimensions.get("screen").width / 10,
         
         marginRight: Dimensions.get("screen").width / 10,*/

        marginHorizontal: Dimensions.get("screen").width / 20,

        width: Dimensions.get("screen").width / 1.1,
        height: "85%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 5,
        borderColor: "white",
        borderStyle: 'dashed',
        borderRadius: 30,
        
    },

})

let selectcountitem = 0;
const Choose = (props) => {
    return (

        <View style={[props.sty]}>
            <SelectDropdown
            buttonStyle={{backgroundColor:"black",borderRadius:20,borderWidth:3,borderColor:"white" }}
            buttonTextStyle={{color:"white"}}
            rowStyle={{backgroundColor:"black",borderRadius:20,borderWidth:2,borderColor:"white"}}
            rowTextStyle={{color:"white"}}
            dropdownStyle={{backgroundColor:"transparent"}}
           
                data={props.data}
                
                
                onSelect={(item, index) => {
                    if (props.whichDropdown === 0) {
                        movieType = item   
                        setnumberCount(((Data.movies.filter(a=>a.type===movieType).length)<5&&(Data.movies.filter(a=>a.type===movieType).length)>0)? (Data.count.filter(b=> b<=(Data.movies.filter(a=>a.type===movieType).length))) : Data.count)                  
                    }
                   

                }}
                buttonTextAfterSelection={(item, index) => {
                   
                   
                    if (props.whichDropdown === 1) {
                        selectcountitem = index
                                      
                                        
                    }



                    return item
                }}

                defaultButtonText={props.default_value}
                dropdownIconPosition={"right"}
                renderDropdownIcon={() => {
                    return (<Ionicons name={"ios-caret-down-outline"} light={true} color="white" size={Dimensions.get("screen").height / 20} />);
                }}

            />
        </View>
    );
    /* Choose.propTypes={
         whichDropdown:PropTypes.number,
     } 
     */
}

const Goster = (props) => {
    const list = useRef(null);

    const go = () => { list.current.scrollToIndex({ animated: true, index: 0 }) }


    useEffect(() => {

        return () => {
            go();
        };
    }, [props.data]);


    return (


        <FlatList style={{ /*flexWrap: "wrap"*/  height: "80%" }}
            horizontal

            data={props.data}


            ref={list}


            removeClippedSubviews={true}
            maxToRenderPerBatch={1}
            initialNumToRender={3}
            initialScrollIndex={0}//Başangıç noktası gosterilecek

            decelerationRate={0.95}
            scrollsToTop={false}//Scrool çubuğu ile sürüklem özelliği
            showsHorizontalScrollIndicator={false}//Scrool çubuğunun görünümünü kapatır

            //keyExtractor={item=>item.id}

            renderItem={({ item }) => {


                return (

                    <RankCard name={item.name} images={item.images} items={item} />
                )


            }}

        />
    );



}

const RankCard = (props) => {
    const navigation = useNavigation();
    return (
        
        <TouchableOpacity
            activeOpacity={1}

            onPress={() => { navigation.navigate("Info", props.items) }}>

            <View style={styles.rank_card_view}>
            <Text style={{textAlign:"right",color:"red",fontSize: PixelRatio.getFontScale() * 20,fontWeight:"bold"}}>{props.items.category}</Text>
                <Image
                    resizeMode='stretch'

                    source={props.images[0]}
                    style={{ flex: 1, width: "100%" }}


                />
                
                <Text style={{ fontSize: PixelRatio.getFontScale() * 45, textAlign: "center", color: "white" , margin:2 }}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const random = (max = 1) => {
    let randomNumbers = [];
    
    
    let a = 0;
    if (selectcountitem + 1 > max) selectcountitem = max - 1
    for (let i = 0; i < selectcountitem + 1; i++) {
        while (true) {
            a = (Math.floor(Math.random() * max));
            if (randomNumbers.findIndex(x => x === a) >= 0) { continue; }
            else {
                randomNumbers.push(a);
                break;
            }
        }
    }
    return randomNumbers
}