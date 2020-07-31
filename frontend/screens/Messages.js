import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import ListItem from '../components/lists/ListItem'
import Screen from '../components/Screen'
import { ListItemSeparator, ListItemDeleteAction } from '../components/lists'

const initialMessages = [
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, qui. Officiis voluptatem quos asperiores error, amet earum autem sit ipsam omnis quam voluptate ad, rem expedita distinctio doloremque aliquid delectus tenetur qui in harum cum? Soluta enim blanditiis modi et, laborum quasi culpa incidunt nemo facere exercitationem possimus quas aliquam',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, qui. Officiis voluptatem quos asperiores error, amet earum autem sit ipsam omnis quam voluptate ad, rem expedita distinctio doloremque aliquid delectus tenetur qui in harum cum? Soluta enim blanditiis modi et, laborum quasi culpa incidunt nemo facere exercitationem possimus quas aliquam',
    image: require('../assets/abdoerrahiem.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/abdoerrahiem.jpg'),
  },
]

const Messages = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (messageId) => {
    setMessages(messages.filter((message) => message.id !== messageId))
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subtitle={item.description}
            onPress={() => {}}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D1',
              image: require('../assets/abdoerrahiem.jpg'),
            },
          ])
        }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})

export default Messages
