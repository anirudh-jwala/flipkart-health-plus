import React from 'react';
import { Entypo, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SectionList, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export default function AccountScreen() {
  const colorScheme = useColorScheme();

  const sectionData = [
    {
      title: "Your Details",
      data: [
        {
          key: 1,
          icon: <Ionicons name="clipboard-outline" size={22} color={Colors[colorScheme].iconColor} />,
          title: "My Orders",
          route: "/",
        },
        {
          key: 2,
          icon: <MaterialCommunityIcons name="prescription" size={22} color={Colors[colorScheme].iconColor} />,
          title: "My Prescriptions",
          route: "/",
        },
        {
          key: 3,
          icon: <Ionicons name="location-sharp" size={22} color={Colors[colorScheme].iconColor} />,
          title: "My Addresses",
          route: "/",
        },
      ],
    },
    {
      title: "Others",
      data: [
        {
          key: 1,
          icon: <Ionicons name="help" size={22} color={Colors[colorScheme].iconColor} />,
          title: "Need Help",
          route: "/",
        },
        {
          key: 2,
          icon: <Ionicons name="document-outline" size={22} color={Colors[colorScheme].iconColor} />,
          title: "Terms and Conditions",
          route: "/",
        },
        {
          key: 3,
          icon: <Feather name="key" size={22} color={Colors[colorScheme].iconColor} />,
          title: "Change Password",
          route: "/",
        },
        {
          key: 3,
          icon: <MaterialCommunityIcons name="exit-to-app" size={22} color={Colors[colorScheme].iconColor} />,
          title: "Log Out",
          route: "/",
        },
      ],
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.listHeader}>+91-7981970397</Text>

      <SectionList
        sections={sectionData}
        style={[styles.sectionConatiner, colorScheme === 'light' ? { backgroundColor: '#f7f7f7' } : {}]}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
          <View style={styles.detailsList}>
            <View style={styles.detailsContainer}>
              <View style={styles.iconConatiner}>{item.icon}</View>
              <Text style={styles.listTileTitle}>{item.title}</Text>
              <View style={styles.emptyStrechConainer}></View>
              <Entypo name="chevron-right" size={22} color={Colors[colorScheme].iconColor} />
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.listHeader}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  sectionConatiner: {
    width: '100%',
  },
  listHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 12,
    paddingVertical: 12,
  },
  detailsList: {
    padding: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconConatiner: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 8,
    padding: 8,
  },
  listTileTitle: {
    fontSize: 14,
    marginLeft: 12,
  },
  emptyStrechConainer: {
    flex: 1,
  }
});
