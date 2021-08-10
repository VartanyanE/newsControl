import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ApiCall from "../api/NewsApi";

   


const MainScreen = () => {

    const [fetchData, setFetchData] = useState({});
      const [errorMessage, setErrorMessage] = useState("");

        useEffect(() => {
     
     
            const fetchedData = async () => {
           
                try {
                    const response = await ApiCall.get("/");
                    setFetchData(response);
                    console.log(response.data);
                } catch (err) {
                    setErrorMessage("something went wrong");
                }
            }

     fetchedData();
   }, []);


    return (
        
        <View><Text> PAge</Text></View>
    )
}

const styles = StyleSheet.create({});


export default MainScreen;