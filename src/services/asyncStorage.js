import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('donates', JSON.stringify(value));
  } catch (e) {
    console.info(e);
  }
};

export async function donateId(value) {
  let donateStorage = await AsyncStorage.getItem('donates') || '[]';
  donateStorage = JSON.parse(donateStorage);

  return donateStorage.findIndex((device) => device.id === value);
}

async function generateId(donateStorage) {
  let id = donateStorage.length ? donateStorage.length : 0;

  while (donateStorage.findIndex((device) => device.id === id) !== -1) {
    id += 1;
  }

  return id;
}

export async function editDonate(donate) {
  let donateStorage = await AsyncStorage.getItem('donates') || '[]';
  donateStorage = JSON.parse(donateStorage);

  const index = await donateId(donate.id);

  donateStorage[index].description = donate.description;
  donateStorage[index].perishability = donate.perishability;
  donateStorage[index].tittle = donate.tittle;
  donateStorage[index].expirationDate = donate.expirationDate;
  donateStorage[index].manufacturingDate = donate.manufacturingDate;
  donateStorage[index].units = donate.units;

  await storeData(donateStorage);
}

export async function deleteDonate(id) {
  try {
    let donateStorage = await AsyncStorage.getItem('donates') || '[]';
    donateStorage = JSON.parse(donateStorage);
    const newDevices = donateStorage.filter((device) => device.id !== id);
    storeData(newDevices);
  } catch (e) {
    console.log(e);
  }
}

export async function getDonates() {
  return JSON.parse(await AsyncStorage.getItem('donates'));
}
export async function registerDonate(donate) {
  try {
    let donateStorage = await AsyncStorage.getItem('donates') || '[]';
    donateStorage = JSON.parse(donateStorage);
    const id = await generateId(donateStorage);
    console.log(donateStorage);
    donate.id = id;
    donateStorage.push(donate);
    storeData(donateStorage);
  } catch (e) {
    console.info(e);
  }
}
