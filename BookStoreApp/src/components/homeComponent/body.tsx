import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../othercomponents/bookCards';
import { useSelector } from 'react-redux';
import { selectBooks } from '../redux/slice/bookSlice';
// Import the search selector
import { selectSearchTerm } from '../redux/slice/searchSlice';

const Body = () => {
  // All books from Redux
  const books = useSelector(selectBooks);

  // The current search term from Redux
  const searchTerm = useSelector(selectSearchTerm);

  // Filter books by the search term (case-insensitive)
  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Title component
  const Title = () => (
    <View style={styles.title}>
      <Text style={{ fontSize: 26, fontWeight: '500' }}>Books</Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          marginTop: 10,
          marginLeft: 6,
          color: 'grey',
        }}
      >
        ({filteredBooks.length} items)
      </Text>
    </View>
  );

  // Footer component
  const Footer = () => (
    <View style={{ backgroundColor: '#2E1D1E' }}>
      <Text style={{ color: '#FFF', fontSize: 12, padding: 10 }}>
        Copyright © 2020, Bookstore Private Limited.
        All Rights Reserved
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredBooks}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}
        ListHeaderComponent={<Title />}
        ListFooterComponent={<Footer />}
        ListHeaderComponentStyle={{
          marginHorizontal: 10,
        }}
      />
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    marginBottom: 50,
  },
  title: {
    marginVertical: 16,
    flexDirection: 'row',
  },
  list: {},
});
