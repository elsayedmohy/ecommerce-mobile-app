import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet} from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListingsError from "../components/listingsError";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

function Listings({navigation}) {
    const getListingsApi = useApi(listingsApi.getListings);


    useEffect(() => {
        getListingsApi.requestData();
    }, []);

    return (
        <Screen style={styles.screen}>
            {getListingsApi.error && (
                <ListingsError onPress={getListingsApi.requestData}/>
            )}
            <ActivityIndicator visible={getListingsApi.loading}/>
            <FlatList
                data={getListingsApi.data}
                keyExtractor={(listItem) => listItem.id.toString()}
                renderItem={({item}) => (
                    <Card
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        title={item.title}
                        subTitle={item.price + " $"}
                        image={item.images[0].url}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        padding: 20,
    },
});
export default Listings;
