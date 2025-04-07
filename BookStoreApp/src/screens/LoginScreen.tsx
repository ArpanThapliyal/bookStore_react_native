import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { WEB_CLIENT_ID } from '../utils/constants';

const LoginScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const storedEmail = route.params?.userEmail || '';
  const storedPassword = route.params?.userPassword || '';

  const handleLogin = () => {
    if (email === storedEmail && password === storedPassword) {
      Alert.alert('Login Successful!');
      navigation.navigate('Home'); // Navigate to Home page
    } else {
      Alert.alert('Invalid Email or Password!');
    }
  };

  const handleGoogleSignin = async () => {
    try {
      GoogleSignin.configure({
        offlineAccess: false,
        webClientId: WEB_CLIENT_ID,
      });
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const user = await GoogleSignin.signIn();
      console.log(user);
      if (!user) {
        Alert.alert('Error', 'Google Sign-In failed');
        return;
      }
     
      navigation.navigate('Home');
    } catch (error) {
      console.log('Google Sign-In Error:', error);
      Alert.alert('Error', error.message || 'Google Sign-In failed');
    }
  };

  const handleFacebookSignup = () => {
    Alert.alert('Facebook Signup Clicked');
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
      
      <Text style={styles.orText}>OR</Text>
      
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={handleGoogleSignin}>
          <MaterialIcons name="email" size={24} color="red" style={styles.socialIcon} />
          <Text style={styles.socialText}>Sign up with Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.socialButton} onPress={handleFacebookSignup}>
          <MaterialIcons name="facebook" size={24} color="blue" style={styles.socialIcon} />
          <Text style={styles.socialText}>Sign up with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation link to Signup screen */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.linkText}>Don't have an account? <Text style={styles.linkText2}>Sign Up</Text> </Text>
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
  orText: {
    fontSize: 16,
    color: '#777',
    marginVertical: 15,
  },
  socialContainer: {
    width: '100%',
    alignItems: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  socialIcon: {
    marginRight: 10,
  },
  socialText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  linkText: {
    marginTop: 20,
    color: '#A03037',
    textDecorationLine: 'underline',
  },
  linkText2: {
    marginTop: 20,
    fontWeight:'bold',
    color: 'red',
    fontSize:16
  },
});
