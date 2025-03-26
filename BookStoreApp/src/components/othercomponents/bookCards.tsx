import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BookModal from './bookModal';
import { useDispatch, useSelector } from 'react-redux';

// Cart actions & selectors
import {
  addToCart,
  selectIsBookInCart,
} from '../redux/slice/cartSlice';

// Wishlist actions & selectors
import {
  addToWishlist,
  removeFromWishlist,
  selectIsBookInWishlist
} from '../redux/slice/wishlistSlice';

const images = {
  "dontMakeMeThink.png": require('../assets/dontMakeMeThink.png'),
  "react.png": require('../assets/react.png'),
  "sharePoint.jpg": require('../assets/sharePoint.jpg'),
  "uxDummies.png": require('../assets/uxDummies.png'),
  "uxDesign.jpg": require('../assets/uxDesign.jpg'),
  "groupDescussion.jpg": require('../assets/groupDescussion.jpg'),
  "leanUx.jpg": require('../assets/leanUx.jpg'),
  "designEveryday.png": require('../assets/designEveryday.png'),
  "TheAlchemist.jpg": require('../assets/TheAlchemist.jpg'),
};

const BookCards = ({ item, isWishlistMode = false }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  // Check if the item is in the cart
  const isInCart = useSelector(selectIsBookInCart(item.id));
  // Check if the item is in the wishlist
  const isInWishlist = useSelector(selectIsBookInWishlist(item.id));

  const handleHeartPress = () => {
    if (isWishlistMode) {
      dispatch(removeFromWishlist(item.id));
    } else {
      if (isInWishlist) {
        dispatch(removeFromWishlist(item.id));
      } else {
        dispatch(addToWishlist(item));
      }
    }
  };

  const heartIcon = isInWishlist || isWishlistMode ? 'favorite' : 'favorite-border';
  const heartColor = isInWishlist || isWishlistMode ? '#A03037' : '#9D9D9D';

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(item));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperCard}>
        <TouchableOpacity onPress={() => setShowModal(!showModal)}>
          <Image source={images[item.img]} style={styles.image} />
        </TouchableOpacity>
      </View>

      <View style={styles.lowerCard}>
        <View style={styles.textpart}>
          <Text style={styles.text1}>{item.name}</Text>
          <Text style={styles.text2}>{item.author}</Text>
          <View style={styles.pricedesg}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
              Rs. {item.currentPrice}{' '}
            </Text>
            <Text style={{ textDecorationLine: 'line-through', color: 'grey', fontSize: 14, marginTop: 3 }}>
              Rs. {item.previousPrice}
            </Text>
          </View>
        </View>

        {!isInCart ? (
          <View style={styles.functionality}>
            <TouchableOpacity style={styles.wishList} onPress={handleHeartPress}>
              <Icon name={heartIcon} size={24} color={heartColor} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.addToCart} onPress={handleAddToCart}>
              <Text style={styles.addToCartText}>ADD TO BAG</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.addedToCartContainer}>
            <Text style={styles.addedToCartText}>ADDED TO BAG</Text>
          </View>
        )}
      </View>

      {showModal && (
        <BookModal showModal={showModal} setShowModal={setShowModal} item={item} />
      )}
    </View>
  );
};

export default BookCards;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.4,
    borderColor: 'grey',
    width: '47%',
    borderRadius: 6,
    elevation: 6,
    marginBottom: 23,
  },
  upperCard: {
    backgroundColor: '#e6e6e6',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 120,
    height: 140,
  },
  lowerCard: {
    padding: 8,
    backgroundColor: 'white',
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  textpart: {
    paddingHorizontal: 5,
  },
  text1: {
    fontSize: 15,
    fontWeight: '500',
  },
  text2: {
    color: 'grey',
    fontSize: 12,
  },
  pricedesg: {
    flexDirection: 'row',
    marginTop: 8,
  },
  functionality: {
    marginTop: 18,
    marginBottom: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wishList: {
    borderWidth: 0.8,
    borderColor: '#9D9D9D',
    borderRadius: 3,
    padding: 4,
    elevation: 2,
    backgroundColor: 'white',
  },
  addToCart: {
    borderWidth: 0.8,
    borderColor: '#A03047',
    backgroundColor: '#A03037',
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 6,
    elevation: 6,
  },
  addToCartText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFFFFF',
    padding: 4,
  },
  addedToCartContainer: {
    marginTop: 18,
    marginBottom: 4,
    backgroundColor: '#F5C7C7',
    borderWidth: 0.8,
    borderColor: '#A03037',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    elevation: 6,
  },
  addedToCartText: {
    color: '#A03037',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
