import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ApiCall from "../api/NewsApi";

   


const MainScreen = () => {

    const [fetchData, setFetchData] = useState({});
      const [errorMessage, setErrorMessage] = useState("");

         const fetchedData = async () => {
        
             const response = await ApiCall.get("/");
             setFetchData(response);
             console.log(response.data);
           
         };


    return (
        
        <View><Button onPress={fetchedData} title="Press Me"/></View>
    )
}

const styles = StyleSheet.create({});


export default MainScreen;