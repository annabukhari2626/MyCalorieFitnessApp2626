import { StyleSheet, Text, View } from 'react-native';

export default function final() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Happy Shopping</Text>
      <Text style={styles.emoji}>🎁</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },
  emoji: {
    fontSize: 80,
  },
});
