import { useState } from 'react';
import { View } from 'react-native';
import CounterCalorie from './CounterCalorieScreen';
import FoodDetailScreen from './FoodDetailScreen';
import Rate from './Rate';
import SignScreen from './SignScreen';
import SplashScreen from './SplashSreen';
import Summary from './Summary';

const App = () => {
  const [screen, setScreen] = useState('splash');
  const [selectedFood, setSelectedFood] = useState(null);
  const [selectedFoods, setSelectedFoods] = useState([]);

  const goTo = (name) => setScreen(name);

  if (screen === 'splash') {
    return <SplashScreen onNext={() => goTo('sign')} />;
  }

  if (screen === 'sign') {
    return <SignScreen onNext={() => goTo('counter')} />;
  }

  if (screen === 'counter') {
    return (
      <CounterCalorie
        onFoodSelect={(food) => {
          setSelectedFood(food);
          goTo('foodDetail');
        }}
      />
    );
  }

  if (screen === 'foodDetail') {
    return (
      <FoodDetailScreen
        food={selectedFood}
        onBack={() => goTo('counter')}
        onNext={() => {
          setSelectedFoods([...selectedFoods, selectedFood]);
          goTo('summary');
        }}
      />
    );
  }

  if (screen === 'summary') {
    return (
      <Summary
        selectedFoods={selectedFoods}
        onBack={() => goTo('counter')}
        onRate={() => goTo('rate')}
      />
    );
  }

  if (screen === 'rate') {
    return <Rate onBack={() => goTo('summary')} />;
  }

  return <View />;
};

export default App;
