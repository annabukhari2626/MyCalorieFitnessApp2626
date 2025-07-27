import { Text, View } from 'react-native';
import Alert from '../components/Alert'; // Adjust path if needed

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Alert message="Hello from global Alert!" type="success" />
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
}
