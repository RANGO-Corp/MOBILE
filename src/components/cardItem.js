import React from 'react';
import {
  StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function CardItem({ onPress }) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.cardFlag} />

      <View style={styles.middleSection}>
        <Text>Maçã</Text>
        <Text style={styles.descriptionText}>
          O que temos que ter sempre em mente é que o consenso sobre a necessidade de
          qualificação ainda não demonstrou convincentemente que vai participar na
          mudança das condições financeiras e administrativas exigidas.
        </Text>
        <Text style={styles.registerText}>Cadastrado em: 09/09/2020</Text>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.countStyle}>9</Text>
        <Text style={styles.unityStyle}>un.</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    height: 80,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardFlag: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#24C809',
    height: 80,
    width: 15,
  },
  middleSection: {
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical: 5,
    maxHeight: 80,
    flexWrap: 'nowrap',
    flex: 5,
  },
  descriptionText: {
    fontSize: 7,
    textAlign: 'justify',
    marginTop: 5,
  },
  registerText: {
    fontSize: 8,
    marginTop: 5,
  },
  rightSection: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countStyle: {
    fontSize: 32,
    fontWeight: '400',
  },
  unityStyle: {
    fontWeight: '100',
  },
});
