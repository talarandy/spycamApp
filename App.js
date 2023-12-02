import {useState} from 'react';
import {SafeAreaView, StyleSheet, Switch, Text} from "react-native";
import { myColors } from './src/styles/colors';
import { ThemeContext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeyboard';

export default function App(){
  const [theme, setTheme] = useState('light');
  return(
    <Text>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <SafeAreaView style={[styles.container, styles.safeArea]}>
          
        </SafeAreaView>
      </ThemeContext.Provider>
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})