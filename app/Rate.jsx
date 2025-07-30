import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Rate = ({ onBack }) => {
  return (
    <LinearGradient colors={['#f6d365', '#fda085']} style={styles.container}>
      <Text style={styles.title}>Rate Our App!</Text>

      <Image
        source={require('../assets/images/ratingstars.jpg')}
        style={styles.image}
      />

      <Text style={styles.text}>Your feedback keeps us growing 💖</Text>

      <TouchableOpacity onPress={onBack} style={styles.backBtn}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Rate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  backBtn: {
    marginTop: 40,
  },
  backText: {
    fontSize: 16,
    color: '#fff',
  },
});
