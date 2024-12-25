import React, {useContext, useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from './AppContext';
import {COLORS, FONTS} from '../helpers/colors';

export default function ({item}) {
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);
  const [added, setAdded] = useState(false);

  const updateCart = useCallback(async () => {
    const cartList = await AsyncStorage.getItem('cartList');
    const cartArray = cartList ? JSON.parse(cartList) : [];
    const isProductInCart = cartArray.some(cart => cart.name === item.name);
    setAdded(isProductInCart);
  }, [item.name]);

  const handleCartUpdate = async action => {
    const cartList = await AsyncStorage.getItem('cartList');
    let cartArray = cartList ? JSON.parse(cartList) : [];

    if (action === 'add') {
      if (!cartArray.some(cart => cart.name === item.name)) {
        cartArray.push({...item, count: 1});
      }
    } else if (action === 'remove') {
      cartArray = cartArray.filter(cart => cart.name !== item.name);
    }

    await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    toggleRefresh(prev => !prev);
  };

  const toggleCart = () => {
    added ? handleCartUpdate('remove') : handleCartUpdate('add');
  };

  useEffect(() => {
    updateCart();
  }, [updateCart, shouldRefresh]);

  return (
    <View style={styles.main}>
      <Image source={item?.image} style={styles.image} />

      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          height: 140,
          paddingBottom: 10,
          paddingHorizontal: 5,
        }}>
        <Text style={styles.title}>{item?.name}</Text>

        <Text style={styles.description}>{item?.description}</Text>

        <View style={styles.row}>
          <Text style={styles.price}>{item?.price} $</Text>

          <TouchableOpacity onPress={toggleCart}>
            <Text style={styles.button}>{added ? 'УБРАТЬ' : 'КУПИТЬ'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '47%',
    alignSelf: 'center',
    height: 300,
    marginTop: 35,
    backgroundColor: COLORS.main,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 10,
  },
  image: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignSelf: 'center',
  },
  title: {
    fontSize: 15,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '100%',
    textAlign: 'center',
    marginTop: 5,
  },
  description: {
    fontSize: 11,
    fontFamily: FONTS.light,
    color: COLORS.black,
    width: '100%',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  price: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    textAlign: 'center',
    verticalAlign: 'middle',
    color: COLORS.white,
    borderRadius: 8,
    marginLeft: 5,
    backgroundColor: COLORS.black,
    paddingHorizontal: 5,
  },
  button: {
    fontFamily: FONTS.black,
    textAlign: 'center',
    fontSize: 14,
    color: COLORS.white,
    borderColor: COLORS.black,
    backgroundColor: COLORS.black,
    paddingHorizontal: 14,
    paddingVertical: 2,
    borderRadius: 8,
    marginRight: 5,
  },
  icon: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
});
