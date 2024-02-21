import { Text, View, StyleSheet, Image, Switch, TextInput } from 'react-native';
import {useState} from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [Enable, setEnable] = useState('');

  return (
    <View style = {{backgroundColor: Enable ? "yellow":"black"}}>
      <Text style = {{textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop:300, color: Enable ? "black":"white"}}>AMC MP1</Text>
      <View style = {{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={Enable ? require('./Light.jpg'):require('./Bulb.jpg')} style = {{height: 150, width: 150, marginTop: 15,}}/>
        <Switch
        value = {Enable}
        onValueChange = {setEnable}
        style = {{marginTop: 15, marginBottom: 300}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
