import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const SplashScreen = ({ onNext }) => {
  return (
    <LinearGradient
      colors={['#fdfcfb', '#e2d1c3']} // soft creamy gradient
      style={styles.container}
    >
      <Image
        source={require('../assets/images/logo.jpg')}
        style={styles.logo}
      />
      <Text style={styles.title}>NutriGlow</Text>
      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    borderRadius: 20,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginBottom: 40,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff758c',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
