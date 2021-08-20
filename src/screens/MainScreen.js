import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, Button, FlatList, TextInput, TouchableOpacity , View} from "react-native";
import { Card, ListItem, Icon } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";


import ApiCall from "../api/NewsApi";

   


const MainScreen = () => {

    const [fetchData, setFetchData] = useState();
    const [errorMessage, setErrorMessage] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");

         const fetchedData = async () => {
        
             const response = await ApiCall.get("/", {
                 params: {
                     q: {text}
               }
             });
           
            setLink(response.data.articles[0].link)
             setFetchData(response.data.articles);
             setText("");
          //  await console.log();
           
           
         };
    
  const handleOpenWithWebBrowser = () => {
       console.log(link)
       WebBrowser.openBrowserAsync(link);
      
    };


    return (
      <ScrollView style={styles.main}>
        <TextInput
          style={{ height: 60 , margin: 10}}
          placeholder="Whats your poison?"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <View style={styles.buttonMain}>
        <Button onPress={fetchedData} title="Extract News" color="#841584"
 />
        </View>
        <FlatList
          data={fetchData}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Card >
              <TouchableOpacity
                onPress={handleOpenWithWebBrowser}
              ><Card.Title>{item.title}</Card.Title>
              </TouchableOpacity>
              
              <Card.Divider />
              <Card.Title>{item.source.title}</Card.Title>
            </Card>
          )}
        />
      </ScrollView>
    );
}

const styles = StyleSheet.create({

  
  

    main: {
        backgroundColor: "#e0ebeb"
    },
    buttonMain: {
        height: 60,
        width: "100%",
        color: "#000000"
        
        
    }
});


export default MainScreen;