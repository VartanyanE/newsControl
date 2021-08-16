import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList, } from "react-native";
import { Card, ListItem, Icon } from "react-native-elements";

import ApiCall from "../api/NewsApi";

   


const MainScreen = () => {

    const [fetchData, setFetchData] = useState();
      const [errorMessage, setErrorMessage] = useState("");

         const fetchedData = async () => {
        
             const response = await ApiCall.get("/");
             setFetchData(response.data.articles);
             await console.log(fetchData);
           
         };


    return (
      <View style={styles.main}>
        <Button onPress={fetchedData} title="Press Me" />
        <FlatList
          data={fetchData}
          keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
          <Card>
                        <Card.Title>{item.title}</Card.Title>
          <Card.Divider />
                        <Card.Title>{item.source.title}</Card.Title>
          <Card.Divider />
                        <Card.Title>{item.link}</Card.Title>
        </Card>
            
          )}
        />
        
      </View>
    );
}

const styles = StyleSheet.create({

    main: {
        margin: 10
    }
});


export default MainScreen;