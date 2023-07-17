import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import ViewAllScreen from './components/ViewAllScreen';
import { store } from './src/store';
import { Provider } from 'react-redux';
import Navigation from './navigation';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
