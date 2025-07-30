import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FoodDetailScreen = ({ food, onBack, onNext }) => {
  if (!food) return null;

  return (
    <LinearGradient colors={food.color} style={styles.container}>
      <Text style={styles.title}>{food.name}</Text>

      <Image source={food.image} style={styles.foodImage} />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nutritional Info</Text>
        <Text style={styles.text}>🍽 Calories: {food.calories}</Text>
        <Text style={styles.text}>💧 Water: {food.water}</Text>
        <Text style={styles.text}>🍬 Sugar: {food.sugar}</Text>
        <Text style={styles.text}>🥄 Fiber: {food.fiber}</Text>
      </View>

      
      <TouchableOpacity style={styles.nextButton} onPress={onNext}>
        <Text style={styles.nextText}>Add & Go to Summary →</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default FoodDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  foodImage: {
    width: 140,
    height: 140,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderRadius: 15,
    elevation: 4,
    marginBottom: 30,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#e60023',
  },
  text: {
    fontSize: 16,
    marginBottom: 6,
    color: '#444',
  },
  backButton: {
    backgroundColor: '#444',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#e60023',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
  },
});
