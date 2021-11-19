import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, StyleSheet, View,
  StatusBar,
} from 'react-native';
import BackgroundGradient from '../../components/backgroundGradient';
import ListItem from '../../components/listItem';
import Logo from '../../components/logo';
import OnboardingButton from '../../components/onboardingButton';
import { getDonates } from '../../services/asyncStorage';

export default function ListDonates({ navigation, route }) {
  const [donates, setDonates] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setDonates(await getDonates());
      } catch (e) {
        console.info(e);
      }
    })();
  });

  return (
    <BackgroundGradient
      colors={['#f7e2cd', '#F1E6DB', '#f0c8a1']}
      start={[-0.3, 0]}
      end={[1, 1]}
      location={[0.15, 1, 1]}
      style={styles.container}
    >
      <Logo />
      <SafeAreaView style={styles.listContainer}>
        <View style={styles.listContainer}>
          {
        donates
          ? (<ListItem data={donates} route={route} navigation={navigation} />) : (<> </>)

        }
        </View>
        <OnboardingButton
          style={styles.newDonateButton}
          text="Nova doação"
          transparency
          onPress={() => navigation.navigate('donateCreate')}
        />
      </SafeAreaView>
      <StatusBar style="auto" />
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
    marginBottom: 10,
  },
  newDonateButton: {
    height: 40,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF9900',
    borderRadius: 6,
    paddingVertical: 3,
  },
  actionsCardContainer: {
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
