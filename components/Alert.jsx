import { StyleSheet, Text, View } from 'react-native';

const Alert = ({ message, type }) => {
  return (
    <View style={[styles.alert, styles[type]]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alert: {
    padding: 12,
    borderRadius: 8,
    margin: 10,
  },
  success: {
    backgroundColor: '#d4edda',
  },
  error: {
    backgroundColor: '#f8d7da',
  },
  text: {
    color: '#000',
  },
});

export default Alert;


