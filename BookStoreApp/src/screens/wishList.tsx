// src/screens/wishList.tsx

import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../components/homeComponent/header';
import { useSelector } from 'react-redux';
import { selectWishlistItems } from '../components/redux/slice/wishlistSlice';
import BookCards from '../components/othercomponents/bookCards';

const WishList = () => {
  const wishlistItems = useSelector(selectWishlistItems);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Wishlist ({wishlistItems.length} Items)</Text>

        <FlatList
          data={wishlistItems}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ padding: 10 }}
          renderItem={({ item }) => (
            // Pass isWishlistMode={true}
            <BookCards item={item} isWishlistMode={true} />
          )}
        />
      </View>
    </View>
  );
};

export default WishList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 54,
    backgroundColor: 'white',
    elevation: 20,
    shadowColor: 'black',
  },
  body: {
    marginVertical: 4,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 14,
    marginVertical: 10,
    color: '#000',
  },
});
