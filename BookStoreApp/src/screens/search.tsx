import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, selectRecentSearches } from '../components/redux/slice/searchSlice';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const recentSearches = useSelector(selectRecentSearches);

  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    // Dispatch the search term to Redux
    dispatch(setSearchTerm(inputValue));
    
    navigation.goBack();
  };

  const handleRecentSearchPress = (term: string) => {
    // If user taps a recent term, set that as the search and go back
    dispatch(setSearchTerm(term));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header Row */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#A03037" style={styles.backIcon} />
        </TouchableOpacity>

      <View style={styles.headerRow}>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search ..."
            placeholderTextColor="#999"
            value={inputValue}
            onChangeText={setInputValue}
            onSubmitEditing={handleSearch} 
          />
        </View>
      </View>

      {/* Recently Searched */}
      <Text style={styles.recentTitle}>Recently Searched</Text>
      <FlatList
        data={recentSearches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleRecentSearchPress(item)}>
            <Text style={styles.recentItem}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Copyright © 2020, Bookstore Private Limited. All Rights Reserved
        </Text>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  backIcon: {
    marginRight: 8,
  },
  searchContainer: {
    flex: 1,
  },
  searchInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#A03037',
    borderRadius: 4,
    paddingHorizontal: 8,
    color: '#000',
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 12,
    color: '#000',
  },
  recentItem: {
    fontSize: 14,
    padding: 8,
    color: '#000',
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    marginHorizontal: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#2E1D1E',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  footerText: {
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
  },
});
