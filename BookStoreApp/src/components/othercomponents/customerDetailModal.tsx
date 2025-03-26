import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomerDetailModal = ({ visible, onClose, onSave }) => {
  // Form states
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [pincode, setPincode] = useState('');
  const [locality, setLocality] = useState('');
  const [address, setAddress] = useState('');
  const [cityTown, setCityTown] = useState('');
  const [landmark, setLandmark] = useState('');
  const [addressType, setAddressType] = useState('Home');

  const handleSave = () => {
    // Prepare the object to send back
    const customerData = {
      fullName,
      mobileNumber,
      pincode,
      locality,
      address,
      cityTown,
      landmark,
      addressType,
    };
    // Pass data back to parent
    onSave(customerData);
    // Close modal
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      {/* Semi-transparent overlay */}
      <View style={styles.overlay}>
        {/* Modal container */}
        <View style={styles.modalContainer}>
          {/* Close button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={24} color="#000" />
          </TouchableOpacity>

          {/* Scrollable form */}
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.heading}>Customer Details</Text>

            {/* Full Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
              />
            </View>

            {/* Mobile Number */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Mobile Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your mobile number"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
              />
            </View>

            {/* Pincode */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Pincode</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter pincode"
                keyboardType="number-pad"
                value={pincode}
                onChangeText={setPincode}
              />
            </View>

            {/* Locality */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Locality</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter locality"
                value={locality}
                onChangeText={setLocality}
              />
            </View>

            {/* Address (multi-line) */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={[styles.input, { height: 80 }]}
                multiline={true}
                placeholder="Enter address"
                value={address}
                onChangeText={setAddress}
              />
            </View>

            {/* City/Town */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>City/Town</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter city or town"
                value={cityTown}
                onChangeText={setCityTown}
              />
            </View>

            {/* Landmark */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Landmark</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter landmark (optional)"
                value={landmark}
                onChangeText={setLandmark}
              />
            </View>

            {/* Address Type: Home, Office, Other */}
            <Text style={styles.addressTypeLabel}>Type</Text>
            <View style={styles.addressTypeContainer}>
              {['Home', 'Office', 'Other'].map(type => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.typeOption,
                    addressType === type && styles.typeOptionSelected,
                  ]}
                  onPress={() => setAddressType(type)}
                >
                  <Text
                    style={[
                      styles.typeOptionText,
                      addressType === type && styles.typeOptionTextSelected,
                    ]}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>SAVE</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CustomerDetailModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    maxHeight: '85%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 12,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  addressTypeLabel: {
    fontSize: 14,
    marginBottom: 4,
    color: '#000',
  },
  addressTypeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  typeOption: {
    borderWidth: 1,
    borderColor: '#A03037',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginRight: 8,
  },
  typeOptionSelected: {
    backgroundColor: '#A03037',
  },
  typeOptionText: {
    fontSize: 14,
    color: '#A03037',
  },
  typeOptionTextSelected: {
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#A03037',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
