import React, { useState } from 'react';
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import Toast from 'react-native-tiny-toast';
import BackgroundGradient from '../../components/backgroundGradient';
import Logo from '../../components/logo';
import OnboardingInput from '../../components/onboardingInput';
import OnboardingButton from '../../components/onboardingButton';
import validateFields, { generateErrorString } from '../../utils/validation';
import { editDonate } from '../../services/asyncStorage';

export default function EditDonate({ navigation, route }) {
  const radioProperties = [
    { label: 'Perecível', value: 0 },
    { label: 'Não perecível', value: 1 },
  ];
  const { item } = route.params;
  const [perishability, setPerishability] = useState('');
  const [tittle, setTittle] = useState('');
  const [description, setDescription] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [manufacturingDate, setManufacturingDate] = useState('');
  const [units, setUnits] = useState('');
  let errors = [];

  function clearFields() {
    setTittle('');
    setDescription('');
    setExpirationDate('');
    setManufacturingDate('');
  }

  async function edit() {
    const fields = [
      {
        value: tittle,
        type: null,
        mandatory: true,
        name: 'Título',
        minLength: 6,
        maxLength: 25,
      },
      {
        value: description,
        type: null,
        mandatory: true,
        name: 'Descrição',
        minLength: 8,
        maxLength: 100,

      },
      {
        value: units,
        type: 'number',
        mandatory: true,
        name: 'Quantidade',
      },
      {
        value: expirationDate,
        type: 'date',
        mandatory: true,
        name: 'Data de validade',
      },
      {
        value: manufacturingDate,
        type: 'date',
        mandatory: true,
        name: 'Data de fabricação',
      },
    ];

    errors = await validateFields(fields);

    if (errors.length === 0) {
      const donate = {
        tittle,
        description,
        expirationDate,
        manufacturingDate,
        perishability,
        units,
        id: item.id,
        creationDate: item.creationDate,
      };

      await editDonate(donate);

      Toast.showSuccess('Doação editada com sucesso!');
      clearFields();
      navigation.navigate('donateList');
    } else {
      const errorString = await generateErrorString(errors);
      Toast.show(errorString);
      errors = [];
      clearFields();
    }
  }

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
        <Text style={styles.tittle}>Nova doação</Text>
        <View>
          <OnboardingInput
            tittle="Título"
            value={tittle}
            onChangeText={setTittle}
            placeholder={item.tittle}
          />
          <OnboardingInput
            tittle="Descrição"
            containerStyle={{ marginVertical: 5 }}
            value={description}
            onChangeText={setDescription}
            placeholder={item.description}
          />
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
        <View>
          <OnboardingInput
            tittle="Quantidade"
            value={units}
            onChangeText={setUnits}
            placeholder={item.units}
          />
        </View>
        <View style={{ marginVertical: 5 }}>
          <OnboardingInput
            tittle="Data de Fabricação"
            placeholder={item.manufacturingDate}
            value={manufacturingDate}
            onChangeText={setManufacturingDate}
          />
        </View>
        <View style={{ marginVertical: 5 }}>
          <OnboardingInput
            tittle="Data de Validade"
            placeholder={item.expirationDate}
            onChangeText={setExpirationDate}
            value={expirationDate}
          />
        </View>
        <View style={styles.buttonContainer}>
          <OnboardingButton
            text="Cadastrar"
            transparency
            onPress={() => edit()}
          />
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
  tittle: {
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
