import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import QRCode from 'react-native-qrcode-svg';
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

      <Text style={styles.text}>Спасибо за заказ!</Text>

      <View style={styles.qrContainer}>
        <QRCode
          value="https://respecthall-booking.ru/restorani_i_bari/Music-Sport-Bar"
          size={Dimensions.get('window').width / 2.5}
          color={COLORS.black}
        />
      </View>

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
  qrContainer: {
    alignItems: 'center',
    marginTop: '25%',
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  successIcon: {
    marginTop: 20,
    width: width * 0.5,
    height: width * 0.5,
    objectFit: 'contain',
    alignSelf: 'center',
  },
  text: {
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 32,
    marginTop: '15%',
    paddingVertical: 15,
  },
  image: {
    width: width * 0.5,
    height: width * 0.5,
    objectFit: 'contain',
    alignSelf: 'center',
    marginTop: '10%',
  },
});
