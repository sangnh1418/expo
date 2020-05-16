import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LearningExpo from 'LearningExpo'

export default function App() {
  return (
    <React.Fragment>
      <LearningExpo />
    </React.Fragment>
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
