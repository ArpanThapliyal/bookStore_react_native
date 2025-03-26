import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const storedEmail = route.params?.userEmail || '';
  const storedPassword = route.params?.userPassword || '';

  const handleLogin = () => {
    if (email === storedEmail && password === storedPassword) {
      alert('Login Successful!');
      navigation.navigate('Home'); // Navigate to Home page
    } else {
      alert('Invalid Email or Password!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

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
