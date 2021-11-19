import React from 'react';
import {
  StyleSheet, Text, View, Dimensions, StatusBar,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import BackgroundGradient from '../../components/backgroundGradient';
import Logo from '../../components/logo';
import OnboardingButton from '../../components/onboardingButton';
import OnboardingInput from '../../components/onboardingInput';
import TextHint from '../../components/textHint';
import { statesInitials } from '../../../assets/states';

export default function Register({ route, navigation }) {
  const { width } = Dimensions.get('window');

  return (
    <BackgroundGradient
      colors={['#f7e2cd', '#F1E6DB', '#f0c8a1']}
      start={[-0.3, 0]}
      end={[1, 1]}
      location={[0.15, 1, 1]}
      style={styles.container}
    >
      <Logo />
      <View style={styles.fieldsContainer}>
        <OnboardingInput
          containercontainerStyle={styles.buttonStyle}
          tittle="Nome"
        />
        <OnboardingInput
          containerStyle={styles.buttonStyle}
          tittle="E-mail"
          keyboardType="email-address"
        />
        <OnboardingInput
          containerStyle={styles.buttonStyle}
          tittle="Telefone"
          dataDetectorTypes="phoneNumber"
          keyboardType="phone-pad"
          placeholder="(xx) xxxxx-xxxx"
        />
        <OnboardingInput
          containerStyle={styles.buttonStyle}
          tittle="Senha"
          secureTextEntry
        />
        <OnboardingInput
          containerStyle={styles.buttonStyle}
          tittle="Confirme sua senha"
          secureTextEntry
        />
        <View style={styles.inlineFields}>
          <OnboardingInput
            tittle="Endereço"
            containerStyle={{ width: (width * 0.5) }}
            dataDetectorTypes="address"
          />
          <OnboardingInput
            containerStyle={{ width: (width * 0.2), marginVertical: 5 }}
            tittle="Número"
            keyboardType="number-pad"
            maxLength={5}
          />
        </View>
        <View style={styles.inlineFields}>

          <OnboardingInput
            tittle="Cidade"
            containerStyle={{ width: (width * 0.5) }}
          />
          <View>
            <Text style={{
              textAlign: 'left',
              color: '#F99900',
            }}
            >
              Estado

            </Text>
            <ModalDropdown
              initValue="Estado"
              style={{
                width: (width * 0.2),
                borderWidth: 1,
                justifyContent: 'center',
                borderColor: '#F99900',
                borderRadius: 5,
                height: 25,
              }}
              textStyle={
            {

              color: '#F99900',
              textAlign: 'center',
            }
          }
              tittle="Estado"
              options={statesInitials}
            />
          </View>
        </View>
        <OnboardingInput
          tittle="CEP"
          keyboardType="number-pad"
        />
        <View style={styles.inlineFieldsEvenly}>

          <TextHint
            text="Doador"
            style={styles.textHintContainer}
            textStyle={styles.textHint}
          />
          <TextHint
            text="Receptor"
            style={styles.textHintContainer}
            textStyle={styles.textHint}
          />
        </View>
        <View style={styles.fieldsButtom}>
          <TextHint
            text="Voltar"
            onPress={() => navigation.goBack()}
            textStyle={styles.textHint}
          />
          <OnboardingButton text="Criar conta" transparency />
        </View>
      </View>
      <StatusBar style="auto" />
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 30,
  },
  fieldsContainer: {
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 10,
  },
  inlineFields: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inlineFieldsEvenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  fieldsButtom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  buttonStyle: {
    marginVertical: 5,
  },
  textHintContainer: {
    marginVertical: 10,
  },
  textHint: {
    fontWeight: 'bold',
  },
});
