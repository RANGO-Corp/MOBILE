import React from 'react';
import {
  StyleSheet, Dimensions, Text, View, StatusBar,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts, Qwigley_400Regular } from '@expo-google-fonts/qwigley';
import AppLoading from 'expo-app-loading';
import { Inter_100Thin, Inter_300Light } from '@expo-google-fonts/inter';
import BackgroundGradient from '../../components/backgroundGradient';
import OnboardingButton from '../../components/onboardingButton';

export default function Profile() {
  const [fontsLoaded] = useFonts({
    Qwigley_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (

    <BackgroundGradient
      colors={['#f7e2cd', '#F1E6DB', '#f0c8a1']}
      start={[-0.3, 0]}
      end={[1, 1]}
      location={[0.15, 1, 1]}
      style={styles.container}
    >
      <View style={styles.content}>

        <View style={styles.profilePictureContainer}>
          <MaterialCommunityIcons name="account-cowboy-hat" style={styles.profilePicture} size={98} />
        </View>
        <View>
          <Text style={styles.textName}>Fulano da Silva</Text>
        </View>

        <View style={styles.personalInformationContainer}>
          <View style={styles.linePersonalInformation}>
            <View><Text style={styles.textPersonalInformation}>E-mail:</Text></View>
            <View><Text style={styles.textPersonalInformation}>fulanodasilva@gmail.com</Text></View>
          </View>
          <View style={styles.linePersonalInformation}>
            <View>
              <Text style={styles.textPersonalInformation}>Telefone:</Text>
            </View>
            <View>
              <Text style={styles.textPersonalInformation}>(11) 88888-8888</Text>
            </View>
          </View>
          <View style={styles.linePersonalInformation}>
            <View>
              <Text style={styles.textPersonalInformation}>Endereço:</Text>
            </View>
            <View>
              <Text style={styles.textPersonalInformation}>
                Av. Bonifácio fácil n 98 - Vila villa - Sampa/SP
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonDisconnectContainer}>

          <OnboardingButton
            text="Desconectar"
            style={styles.buttonDisconnect}
            fontStyle={styles.buttonDisconnectText}
          />

        </View>
      </View>

      <StatusBar style="auto" />
    </BackgroundGradient>
  );
}
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 20,
    flexDirection: 'column',
  },
  profilePictureContainer: {
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 100 / 2,
    borderColor: '#ff9900',
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  profilePicture: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ff7e05',
    fontSize: 40,
    paddingTop: 30,
    textAlign: 'center',
  },
  textName: {
    fontFamily: 'Qwigley_400Regular',
    textAlign: 'center',
    fontSize: 42,
    color: '#ff9900',
    fontWeight: 'bold',
  },
  linePersonalInformation: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  personalInformationContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  textPersonalInformation: {
    fontSize: 12,
  },
  buttonDisconnectContainer: {
    justifyContent: 'flex-end',
    marginTop: height * 0.43,
  },
  buttonDisconnect: {
    backgroundColor: '#ff0550',
    height: 30,
  },
  buttonDisconnectText: {
    color: 'white',
  },
});
