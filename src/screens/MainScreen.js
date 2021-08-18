import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, Button, FlatList, TextInput, TouchableOpacity } from "react-native";
import { Card, ListItem, Icon } from "react-native-elements";


import ApiCall from "../api/NewsApi";

   


const MainScreen = () => {

    const [fetchData, setFetchData] = useState();
    const [errorMessage, setErrorMessage] = useState("");
      const [text, setText] = useState("");

         const fetchedData = async () => {
        
             const response = await ApiCall.get("/", {
                 params: {
                     q: {text}
                 }});
             setFetchData(response.data.articles);
             await console.log(fetchData);
           
         };
    
    const linkURL = async () => {
        
    }


    return (
      <ScrollView style={styles.main}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Whats your poison?"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Button onPress={fetchedData} title="News" />
        <FlatList
          data={fetchData}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Card>
              <Card.Title>{item.title}</Card.Title>
              <Card.Divider />
              <Card.Title>{item.source.title}</Card.Title>
                  <Card.Divider />
                  <TouchableOpacity onPress={linkURL}>

                <Card.Title>{item.link}</Card.Title></TouchableOpacity>
              
            </Card>
            
            
          )}
        />
      </ScrollView>
    );
}

const styles = StyleSheet.create({

    main: {
        margin: 10
    }
});


export default MainScreen;