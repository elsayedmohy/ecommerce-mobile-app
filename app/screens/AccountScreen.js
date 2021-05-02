import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import  colors  from '../config/colors';
import Icon from '../components/Icon';
import {ListItem, ListItemsSeparator} from '../components/list';
import Screen from '../components/Screen';
import routes from "../navigation/routes"

const AccountData = [{
    id:1,
    Title:"My Listings",
    icon:{
        name:"format-list-bulleted",
        backgroundColor:colors.primary,
    }
},
{
    id:2,
    Title:"My Messages",
    icon:{
        name:"email",
        backgroundColor:colors.secondary,
    },
    targetScreen:routes.MESSAGES
}]

function AccountScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
                <View style={styles.container}>
                    <ListItem
                        title="Elsayed Mohy"
                        subTitle="elsayedmohy@gmail.com"
                        image={require('../assets/seller.jpg')}
                    />
                </View>
                <View style={styles.container}>
                    <FlatList
                        data={AccountData}
                        keyExtractor={(data)=> data.id.toString()}
                        ItemSeparatorComponent={()=><ListItemsSeparator/>}
                        renderItem={({item})=> <ListItem
                            title={item.Title}
                            IconComponent={
                            <Icon 
                            name={item.icon.name}  
                            backgroundColor={item.icon.backgroundColor}/>}
                            onPress={()=> navigation.navigate(item.targetScreen)}
                        />
                    }
                    />
                </View>
                <View style={styles.container}>
                    <ListItem
                        title="Log Out"
                        IconComponent={<Icon name="logout" backgroundColor={colors.lightyellow}
                        />
                    }
                    />
                </View>
                
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.light
    },
    container:{
        backgroundColor:colors.white,
        marginVertical:15
    }
})
export default AccountScreen;