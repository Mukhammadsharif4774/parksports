import React from 'react';
import {Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import ParkSportsHeader from '../components/ParkSportsHeader';
import ParkSportsComponent from '../components/ParkSportsComponent';
import BackgroundImage from '../assets/background.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'ParkSportsHomeScreen'});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <ParkSportsHeader />

      <Image
        source={require('../assets/success_icon.png')}
        style={styles.image}
      />

      <Text style={styles.text}>Спасибо за резерв!</Text>

      <ParkSportsComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  text: {
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 30,
    marginTop: '25%',
    paddingVertical: 20,
  },
  description: {
    backgroundColor: COLORS.blue,
    paddingVertical: 15,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: 25,
    paddingHorizontal: 50,
  },
  image: {
    width: width * 0.5,
    height: width * 0.5,
    objectFit: 'contain',
    alignSelf: 'center',
    marginTop: '10%',
  },
});
