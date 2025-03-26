import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
// Redux
import { useSelector } from 'react-redux';
import { selectCartItems } from '../redux/slice/cartSlice';

const Header = () => {
  const navigation = useNavigation();

  // Get cart items from Redux
  const cartItems = useSelector(selectCartItems);

  // Compute total quantity (if each item has a 'quantity' field)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.secondContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Icon name='search' size={28} color={'#A03037'} />
      </TouchableOpacity>

        <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('WishList')}>
          <Icon name='favorite-border' size={28} color={'#A03037'} />
        </TouchableOpacity>

        {/* Cart Icon with Badge */}
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.navigate('Cart')}
        >
          <Icon name='shopping-cart' size={28} color={'#A03037'} />

          {/* If there are items in the cart, show the badge */}
          {cartCount > 0 && (
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  firstContainer: {
    alignContent: 'center',
  },
  logo: {
    marginTop: -4,
    height: 60,
    width: 134,
  },
  secondContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  icons: {
    marginLeft: 14,
    color: '#A03037',
    // Make sure position is 'relative' or 'absolute' if needed
  },
  // Badge styling
  badgeContainer: {
    position: 'absolute',
    // Adjust these so the badge appears nicely over the cart icon
    top: -5,
    right:15,
    backgroundColor: '#A03037',
    borderRadius: 8,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
