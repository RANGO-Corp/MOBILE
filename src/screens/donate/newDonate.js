import React from 'react';
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native';
import BackgroundGradient from '../../components/backgroundGradient';
import Logo from '../../components/logo';
import OnboardingInput from '../../components/onboardingInput';
import OnboardingButton from '../../components/onboardingButton';

export default function NewDonate() {
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
      <View>
        <Text>Nova doação</Text>
        <View>
          <OnboardingInput title="Título" />
          <OnboardingInput title="Descrição" />
        </View>
        <View>
          <OnboardingButton text="Cadastrar" transparency />
        </View>
      </View>
      <StatusBar style="auto" />
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {

  },
  logoStyle: {
    textAlign: 'left',
    fontSize: 60,
    marginTop: 5,
    marginLeft: 5,
  },
});
