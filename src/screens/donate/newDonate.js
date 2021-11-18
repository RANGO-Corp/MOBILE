import React, { useState } from 'react';
import {
  StyleSheet, Text, Button, View, StatusBar,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-date-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast';
import BackgroundGradient from '../../components/backgroundGradient';
import Logo from '../../components/logo';
import OnboardingInput from '../../components/onboardingInput';
import OnboardingButton from '../../components/onboardingButton';

export default function NewDonate({ navigation, route }) {
  const radioProperties = [
    { label: 'Perecível', value: 0 },
    { label: 'Não perecível', value: 1 },
  ];
  const [perishability, setPerishability] = useState('');

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
      <View style={styles.fieldContainer}>
        <Text style={styles.title}>Nova doação</Text>
        <View>
          <OnboardingInput title="Título" />
          <OnboardingInput title="Descrição" containerStyle={{ marginVertical: 5 }} />
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ color: '#ff9900' }}>Durabilidade</Text>
          <RadioForm
            radio_props={radioProperties}
            initial={0}
            buttonColor="#ff9900"
            onPress={(value) => { setPerishability(value); }}
            labelColor="#ff9900"
            selectedButtonColor="#ff8800"
            formHorizontal
            labelHorizontal
          />
        </View>
        <View style={{ marginVertical: 5 }}>
          <OnboardingInput title="Data de Fabricação" placeholder="dd/mm/aaaa" />
        </View>
        <View style={{ marginVertical: 5 }}>
          <OnboardingInput title="Data de Validade" placeholder="dd/mm/aaaa" />
        </View>
        <View style={styles.buttonContainer}>
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
  title: {
    fontSize: 26,
    color: '#ff9900',
    textAlign: 'center',
  },
  fieldContainer: {
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },

});
