import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
// If you're using the new cartSlice:
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart
} from '../redux/slice/cartSlice';

// Add ALL images you might use
const images: any = {
  'dontMakeMeThink.png': require('../assets/dontMakeMeThink.png'),
  'react.png': require('../assets/react.png'),
  'sharePoint.jpg': require('../assets/sharePoint.jpg'),
  'uxDummies.png': require('../assets/uxDummies.png'),
  'uxDesign.jpg': require('../assets/uxDesign.jpg'),
  'groupDescussion.jpg': require('../assets/groupDescussion.jpg'),
  'leanUx.jpg': require('../assets/leanUx.jpg'),
  'designEveryday.png': require('../assets/designEveryday.png'),
  'TheAlchemist.jpg': require('../assets/TheAlchemist.jpg'),
};

const CartBookCard = ({ item }) => {
  const dispatch = useDispatch();

  // If your item has .quantity, display that in the UI
  // and use your slice’s incrementQuantity/decrementQuantity
  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item.id));
    }
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  // Safely get the image from the dictionary
  const imageSource = images[item.img];

  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.bookImage} />

      <View style={styles.bookInfoContainer}>
        {/* Title */}
        <View style={styles.titleRow}>
          <Text style={styles.bookTitle}>{item.name}</Text>
          <TouchableOpacity onPress={handleRemove}>
            <Icon name="close" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Author */}
        <Text style={styles.bookAuthor}>by {item.author}</Text>

        {/* Price Row */}
        <View style={styles.priceRow}>
          <Text style={styles.currentPrice}>Rs. {item.currentPrice}</Text>
          <Text style={styles.previousPrice}>Rs. {item.previousPrice}</Text>
        </View>

        {/* Quantity */}
        <View style={styles.quantityRow}>
          <TouchableOpacity style={styles.quantityBtn} onPress={handleDecrement}>
            <Icon name="remove" size={20} color="#000" />
          </TouchableOpacity>

          <Text style={styles.quantityText}>{item.quantity}</Text>

          <TouchableOpacity style={styles.quantityBtn} onPress={handleIncrement}>
            <Icon name="add" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartBookCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 0.4,
    borderColor: 'grey',
    marginBottom: 10,
    padding: 10,
    elevation: 2,
    alignItems:'center'
  },
  bookImage: {
    width: 80,
    height: 90,
    resizeMode: 'cover',
    marginRight: 12,
  },
  bookInfoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft:10
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    maxWidth: '80%',
    color: '#000',
  },
  bookAuthor: {
    color: 'grey',
    fontSize: 14,
    marginVertical: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
    color: '#000',
  },
  previousPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: 'grey',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    padding: 3,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
