import React, {useState} from 'react';
import { FlatList, StyleSheet } from 'react-native';
import {ListItem, ListItemsSeparator, ListItemDelete} from '../components/list';
import Screen from '../components/Screen';



const initialMessages =[ {
    id:1,
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book 1",
    image:require("../assets/seller.jpg")
},
{
    id:2,
    title: 'Title 2',
    description:"Description 2",
    image:require("../assets/seller.jpg")
},
{
    id:3,
    title: 'Title 3',
    description:"Description 3",
    image:require("../assets/seller.jpg")
}]

function MessagesScreen(props) {
   const [messages, setNewMessages] = useState(initialMessages);
   const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
    const newMessages = messages.filter((m)=> m.id !== message.id)
        setNewMessages(newMessages)
    }

    return (
        <Screen>
            <FlatList
                refreshing={refreshing}
                onRefresh={()=> setNewMessages([{
                    id:2,
                    title: 'Title 2',
                    description:"Description 2",
                    image:require("../assets/seller.jpg")
                }])}
                data={messages}
                keyExtractor={message => message.id.toString()}
                ItemSeparatorComponent={ListItemsSeparator}
                renderItem={({item}) => <ListItem 
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={()=> console.log(item)}
                renderRightActions={() => <ListItemDelete 
                onPress={()=>handleDelete(item)}
                />}
        />}
        />
       </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default MessagesScreen;