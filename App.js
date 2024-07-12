import React from 'react';
import { View, StyleSheet } from 'react-native';

const Square = ({ color }) => {
  return <View style={[styles.square, { backgroundColor: color }]} />;
};

export default function App() {
  return (
    <View style={styles.container}>
      <Square color="#FF5733" />
      <Square color="#33FF57" />
      <Square color="#5733FF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  square: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
