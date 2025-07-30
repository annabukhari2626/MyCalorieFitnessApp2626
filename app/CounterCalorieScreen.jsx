import { LinearGradient } from 'expo-linear-gradient';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

const CounterCalorie = ({ onFoodSelect }) => {
  const foods = [
    {
      name: 'Apple',
      image: require('../assets/images/apple.png'),
      calories: '95 kcal',
      water: '86%',
      sugar: '19g',
      fiber: '4g',
      color: ['#ff6a6a', '#ffb3b3'],
    },
    {
      name: 'Banana',
      image: require('../assets/images/banana.jpg'), // placeholder
      calories: '105 kcal',
      water: '75%',
      sugar: '14g',
      fiber: '3g',
      color: ['#f6d365', '#fda085'],
    },
    {
      name: 'Grapes',
      image: require('../assets/images/grapes.jpg'),
      calories: '62 kcal (per 100g)',
      water: '81%',
      sugar: '15g',
      fiber: '1g',
      color: ['#c471f5', '#fa71cd'],
    },
    {
      name: 'Strawberries',
      image: require('../assets/images/stawberry.jpg'),
      calories: '33 kcal',
      water: '91%',
      sugar: '4.9g',
      fiber: '2g',
      color: ['#f953c6', '#b91d73'],
    },
    {
      name: 'Egg',
      image: require('../assets/images/egg.jpg'),
      calories: '78 kcal',
      water: '75%',
      sugar: '0.6g',
      fiber: '0g',
      color: ['#f9d423', '#ff4e50'],
    },
  ];

  return (
    <LinearGradient colors={['#ff758c', '#ffb199']} style={styles.container}>
      <Text style={styles.heading}>Select a Food to See Calories</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        {foods.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => onFoodSelect(item)}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.label}>{item.name}</Text>
            <Text style={styles.subtext}>Tap to view details</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default CounterCalorie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '85%',
    marginBottom: 20,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e60023',
  },
  subtext: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
  },
});
