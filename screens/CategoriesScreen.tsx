import React from 'react';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import { Text, View } from '../components/Themed';

interface CategoryListData {
  key: number;
  title: string;
  image: ImageSourcePropType,
  backgroundColor: string;
  route: string;
}

export default function CategoriesScreen() {
  const categoriesData: CategoryListData[] = [
    {
      key: 1,
      title: 'Covid Essentials',
      image: require('../assets/images/01.png'),
      backgroundColor: '#d9e4ff',
      route: '/',
    },
    {
      key: 2,
      title: 'Beauty & Personal Care',
      image: require('../assets/images/02.png'),
      backgroundColor: '#d9ffde',
      route: '/',
    },
    {
      key: 3,
      title: 'Health Food & Beverages',
      image: require('../assets/images/03.png'),
      backgroundColor: '#f5ffd9',
      route: '/',
    },
    {
      key: 4,
      title: 'Health Drinks & Supplements',
      image: require('../assets/images/04.png'),
      backgroundColor: '#d9ffec',
      route: '/',
    },
    {
      key: 5,
      title: 'Home Care & Hygiene',
      image: require('../assets/images/05.png'),
      backgroundColor: '#efd9ff',
      route: '/',
    },
    {
      key: 6,
      title: 'Sports',
      image: require('../assets/images/06.png'),
      backgroundColor: '#d9fff8',
      route: '/',
    },
    {
      key: 7,
      title: 'Mother & Baby',
      image: require('../assets/images/07.png'),
      backgroundColor: '#f9d9ff',
      route: '/',
    },
    {
      key: 8,
      title: 'Ayurvedic & Herbal',
      image: require('../assets/images/08.png'),
      backgroundColor: '#d9ffe3',
      route: '/',
    },
    {
      key: 9,
      title: 'Orthopaedics',
      image: require('../assets/images/09.png'),
      backgroundColor: '#ffefd9',
      route: '/',
    },
    {
      key: 10,
      title: 'Devices & Aids',
      image: require('../assets/images/10.png'),
      backgroundColor: '#ffe2d9',
      route: '/',
    },
    {
      key: 11,
      title: 'School & Office Stationery',
      image: require('../assets/images/11.png'),
      backgroundColor: '#d9f7ff',
      route: '/',
    },
  ];

  return (
    <FlatGrid
      itemDimension={130}
      data={categoriesData}
      renderItem={({ item }) => (
        <View key={item.key} style={[styles.categoryCard, { backgroundColor: item.backgroundColor, }]}>
          <Image source={item.image} style={styles.imageContainer} />
          <View style={styles.titleContainer}>
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    elevation: 1,
  },
  imageContainer: {
    width: 100,
    height: 120,
  },
  titleContainer: {
    width: '100%',
    height: 40,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
  },
  categoryTitle: {
    fontSize: 15,
    textAlign: 'center',
  },
});
