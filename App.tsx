import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <AppStack />
      <StatusBar style='light' />
    </>
  );
}
