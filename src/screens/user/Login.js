import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import OnboardingInput from '../../components/onboardingInput';
import BackgroundGradient from '../../components/backgroundGradient';
import Logo from '../../components/logo';
import OnboardingButton from '../../components/onboardingButton';
import TextHint from '../../components/textHint';
import * as actions from '../../redux/modules/auth/actions';

export default function Login({ route, navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    await dispatch(actions.loginSuccess({ token: '12312312' }));
  }

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
          onChangeText={setEmail}
          background="white"
          value={email}
          tittle="E-mail"
        />
        <OnboardingInput
          onChangeText={setPassword}
          background="white"
          value={password}
          tittle="Senha"
          secureTextEntry
          containerStyle={styles.fields}
        />
      </View>
      <OnboardingButton
        text="Entrar"
        style={styles.buttonStyle}
        onPress={() => { login(); }}
        transparency
      />
      <TextHint
        text="Criar uma nova conta"
        style={styles.registerTextContainer}
        textStyle={styles.registerText}
        onPress={() => navigation.navigate('Register')}
      />
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
    marginHorizontal: 40,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderRadius: 10,
    padding: 10,
  },
  fields: {
    marginVertical: 5,
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: 10,
  },
  registerTextContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 25,
  },
  registerText: {
    textAlign: 'center',
  },
});
