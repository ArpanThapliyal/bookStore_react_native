import React,{useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/homeComponent/header';
import CartBookCard from '../components/othercomponents/CartBookCard';
import CustomerDetailModal from '../components/othercomponents/customerDetailModal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCustomerDetails, setCustomerDetails } from '../components/redux/slice/cartSlice';

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const customerDetails = useSelector(selectCustomerDetails);

  // Local state to control modal visibility (optional if you want to keep it in Redux as well)
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  // Calculate total price from cart items
  const totalPrice = cartItems.reduce((total, item) => total + item.currentPrice * item.quantity, 0);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>My Bag ({cartItems.length} Items)</Text>

        {/* Render Cart Item Cards */}
        {cartItems.map((item) => (
          <CartBookCard key={item.id} item={item} />
        ))}

        {/* Customer Details Button */}
        <TouchableOpacity style={styles.customerDetailsBtn} onPress={() => setShowCustomerModal(true)}>
          <Text style={styles.customerDetailsText}>Customer Details</Text>
          <Icon name="add" size={24} color="#A03037" />
        </TouchableOpacity>

        {/* Display Customer Details if available */}
        {customerDetails && (
          <View style={styles.customerDetailCard}>
            <View style={styles.customerDetailTopRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.customerName}>{customerDetails.fullName}</Text>
                <Text style={styles.customerPhone}>{customerDetails.mobileNumber}</Text>
                <Text style={styles.customerType}>{customerDetails.addressType}</Text>
              </View>
              <Icon name="radio-button-checked" size={24} color="#A03037" style={styles.radioIcon} />
            </View>
            <Text style={styles.customerAddress}>
              {customerDetails.address}
              {customerDetails.address ? ', ' : ''}
              {customerDetails.locality ? customerDetails.locality + ', ' : ''}
              {customerDetails.cityTown ? customerDetails.cityTown + ', ' : ''}
              {customerDetails.pincode}
            </Text>
          </View>
        )}

        {/* Divider */}
        <View style={styles.divider} />
      </ScrollView>

      {/* Fixed Summary Container */}
      <View style={styles.summaryContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>Rs. {totalPrice}</Text>
        </View>
        <TouchableOpacity style={styles.placeOrderBtn} onPress={() => navigation.navigate('OrderSuccess')}>
          <Text style={styles.placeOrderText}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>

      {/* Customer Details Modal */}
      <CustomerDetailModal
        visible={showCustomerModal}
        onClose={() => setShowCustomerModal(false)}
        onSave={(details) => dispatch(setCustomerDetails(details))}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerContainer: {
    height: 54,
    backgroundColor: 'white',
    elevation: 20,
    shadowColor: 'black',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    paddingBottom: 140,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  customerDetailsBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
  },
  customerDetailsText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  customerDetailCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  customerDetailTopRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  customerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  customerPhone: {
    fontSize: 14,
    color: '#000',
    marginTop: 2,
  },
  customerType: {
    fontSize: 14,
    color: '#000',
    marginTop: 2,
  },
  radioIcon: {
    marginLeft: 8,
  },
  customerAddress: {
    fontSize: 14,
    color: '#444',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  summaryContainer: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.6,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  totalContainer: {
    flexDirection: 'column',
  },
  totalLabel: {
    fontSize: 14,
    color: '#000',
  },
  totalPrice: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A03037',
  },
  placeOrderBtn: {
    backgroundColor: '#F5C7C7',
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  placeOrderText: {
    color: '#A03037',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
