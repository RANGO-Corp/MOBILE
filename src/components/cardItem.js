import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

export default function CardItem({
  onPress,
  description,
  tittle,
  creationDate,
  units,

}) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={[styles.cardFlag, units <= 0 || !units ? {
        backgroundColor: '#eb2153',
      } : { backgroundColor: '#24C809' }]}
      />

      <View style={styles.middleSection}>
        <Text>{tittle}</Text>
        <Text style={styles.descriptionText}>
          {`Descrição: ${description}`}
        </Text>
        <Text style={styles.registerText}>
          {`Cadastrado em: ${creationDate}`}
        </Text>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.countStyle}>{units}</Text>
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
    marginVertical: 3,
  },
  cardFlag: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,

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
