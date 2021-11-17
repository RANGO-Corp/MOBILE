import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundGradient from '../../components/backgroundGradient';
import Logo from '../../components/logo';
import OnboardingButton from '../../components/onboardingButton';

export default function Donate() {
  return (
    <BackgroundGradient
      colors={['#f7e2cd', '#F1E6DB', '#f0c8a1']}
      start={[-0.3, 0]}
      end={[1, 1]}
      location={[0.15, 1, 1]}
      style={styles.container}
    >

      <View style={styles.header}>
        <Logo style={styles.logoStyle} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Donate</Text>
        <OnboardingButton text="Editar" style={styles.editButton} fontStyle={styles.text} />
        <OnboardingButton text="Excluir" style={styles.deleteButton} fontStyle={styles.text} />
      </View>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#ff9900',
    fontSize: 36,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  text: {
    color: 'white',
  },
  editButton: {
    backgroundColor: '#ff9900',
    height: 30,
    marginVertical: 5,
  },
  deleteButton: {
    height: 30,
    marginVertical: 5,
    backgroundColor: '#e32b47',
  },
  content: {
    flexDirection: 'column',
    marginHorizontal: 60,
  },
  logoStyle: {
    textAlign: 'left',
    fontSize: 60,
    marginTop: 5,
    marginLeft: 5,
  },
});
