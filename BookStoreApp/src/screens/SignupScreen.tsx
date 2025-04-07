import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User account created');
        navigation.navigate('Login', { userEmail: email, userPassword: password });
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');
    }
  });
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      
      <TextInput
        style={styles.input}
        placeholder="jonedoe@gmail.com"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 30, 
    color: '#A03037',
  },
  input: {
    width: '100%', 
    height: 50, 
    borderWidth: 1, 
    borderColor: '#ccc',
    borderRadius: 5, 
    paddingHorizontal: 15, 
    marginBottom: 15,
    fontSize: 16,
    color: 'brown',
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#A03037', 
    paddingVertical: 15, 
    borderRadius: 5, 
    width: '100%', 
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold',
  },
 
  
});
