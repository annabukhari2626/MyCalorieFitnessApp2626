import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SignScreen = ({ onNext }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient
      colors={['#fbc2eb', '#a6c1ee']}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.innerContainer}
      >
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to NutriGlow</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#777"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#777"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={onNext}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.textRow}>
          <Text style={styles.lightText}>{"Don't have an account?"}</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}> Sign Up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.linkSmall}>Already signed in? Continue without login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default SignScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 20,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffffdd',
    width: '100%',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6a11cb',
    width: '100%',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  textRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  lightText: {
    color: '#fff',
    fontSize: 14,
  },
  linkText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  linkSmall: {
    color: '#fff',
    fontSize: 12,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
