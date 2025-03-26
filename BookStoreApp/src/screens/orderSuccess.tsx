import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Header from '../components/homeComponent/header'; 
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OrderSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Header />
      </View>

      {/* Main content */}
      <View style={styles.contentContainer}>
        {/* Example success image (replace path as needed) */}
        {/* <Image
          source={require('../components/assets/success.png')}
          style={styles.successImage}
        /> */}
        <Text style={styles.orderPlacedText}>Order Placed Successfully</Text>
        <Text style={styles.orderDetailsText}>
          hurray!!! your order is confirmed the order id is #123456 
          save the order id for further communication...
        </Text>

        <TouchableOpacity
          style={styles.continueShoppingBtn}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.continueShoppingText}>CONTINUE SHOPPING</Text>
        </TouchableOpacity>
      </View>

      {/* Footer with icons */}
      <View style={styles.footerContainer}>
        {/* Row 1: Email & Phone */}
        <View style={styles.footerRow}>
          <Icon name="email" size={16} color="#555" style={styles.footerIcon} />
          <Text style={styles.footerText}>admin@bookstore.com</Text>
          <Text style={[styles.footerText, { marginHorizontal: 6 }]}>|</Text>
          <Icon name="phone" size={16} color="#555" style={styles.footerIcon} />
          <Text style={styles.footerText}>+91 8163475881</Text>
        </View>

        {/* Row 2: Address */}
        <View style={[styles.footerRow, { marginTop: 4 }]}>
          <Icon name="location-on" size={16} color="#555" style={styles.footerIcon} />
          <Text style={styles.footerText}>
            42, 14th Main, 15th Cross, Sector 4, opp to BDA complex, 
            near Kumarakom restaurant, HSR Layout, Bangalore 560034
          </Text>
        </View>

        {/* Row 3: Copyright */}
        <View style={[styles.footerRow, { marginTop: 4 }]}>
          <Icon name="copyright" size={16} color="#555" style={styles.footerIcon} />
          <Text style={styles.footerText}>2020, Bookstore Private Limited.</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    height: 54,
    backgroundColor: 'white',
    elevation: 20,
    shadowColor: 'black',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  successImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  orderPlacedText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
    textAlign: 'center',
  },
  orderDetailsText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginHorizontal: 16,
    marginBottom: 24,
    lineHeight: 20,
  },
  continueShoppingBtn: {
    backgroundColor: '#A03037',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  continueShoppingText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  /* Footer styles */
  footerContainer: {
    padding: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  footerIcon: {
    marginRight: 4,
  },
  footerText: {
    fontSize: 12,
    color: '#555',
  },
});
