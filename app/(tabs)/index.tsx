import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Screen from '../components/Screen';
import Buttons from '../components/Buttons';
import React, { useState } from 'react';

interface AppContextProps {
  screen: string;
  setScreen: (screen: string) => void;
  equation: string,
  setEquation: (equation: string) => void;
  error: string,
  setError: (error: string) => void;
}

export const AppContext = React.createContext<AppContextProps>({
  screen: "0.00",
  setScreen: () => {},
  equation: "",
  setEquation: () => {},
  error: "",
  setError: () => {},
});


export default function HomeScreen() {
  const [ screen, setScreen ] = useState("");
  const [ equation, setEquation ] = useState("");
  const [ error, setError ] = useState("");

  return (
    <AppContext.Provider value={{ screen, setScreen, equation, setEquation, error, setError }}>
      <View style={styles.container}>
        <Header />
        <Screen />
        <Buttons />
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4EB075',
    paddingTop: 30
  }
});
