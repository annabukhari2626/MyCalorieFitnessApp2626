import { LinearGradient } from 'expo-linear-gradient';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Summary = ({ selectedFoods = [], onBack, onRate }) => {
  const showAlert = () => {
    Alert.alert(
      'Health Tips 🍀',
      'Fresh fruits & protein are essential for energy and immunity. Drink water, walk daily, and eat balanced meals.',
      [{ text: 'OK' }]
    );
  };

  return (
    <LinearGradient colors={['#a1c4fd', '#c2e9fb']} style={styles.container}>
      <Text style={styles.title}>Summary 🍽</Text>

      <View style={styles.card}>
        <Text style={styles.subtitle}>You selected:</Text>
        {selectedFoods.map((food, index) => (
          <Text key={index} style={styles.foodText}>• {food.name} ({food.calories})</Text>
        ))}
      </View>

      <TouchableOpacity style={styles.alertBtn} onPress={showAlert}>
        <Text style={styles.alertText}>Show Health Tips 🧠</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rateBtn} onPress={onRate}>
        <Text style={styles.rateText}>Rate Us ⭐</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onBack} style={styles.backBtn}>
        <Text style={styles.backText}>← Back to Food</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    elevation: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  foodText: {
    fontSize: 16,
    marginBottom: 5,
  },
  alertBtn: {
    backgroundColor: '#00c6ff',
    padding: 12,
    borderRadius: 25,
    marginBottom: 10,
  },
  alertText: {
    color: '#fff',
    fontSize: 16,
  },
  rateBtn: {
    backgroundColor: '#ff6a00',
    padding: 12,
    borderRadius: 25,
    marginBottom: 20,
  },
  rateText: {
    color: '#fff',
    fontSize: 16,
  },
  backBtn: {
    marginTop: 10,
  },
  backText: {
    color: '#333',
    fontSize: 16,
  },
});
