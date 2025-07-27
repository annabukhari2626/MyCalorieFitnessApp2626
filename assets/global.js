import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: 'black',
    textAlign: 'justify',
    marginBottom: 10,
  },
  alert: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  alertPrimary: {
    backgroundColor: 'yellow',
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  alertDanger: {
    backgroundColor: 'red',
    borderColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  alertSuccess: {
    backgroundColor: 'green',
    borderColor: 'brown',
    padding: 10,
    borderRadius: 10,
  },
});

export default styles;

 