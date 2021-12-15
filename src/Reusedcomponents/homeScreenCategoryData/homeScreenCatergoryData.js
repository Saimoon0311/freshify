import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../color';
import {styles} from './styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const HomeScreenCategoryData = () => {
  const [loading, setLoading] = useState(false);
  const [categoryData, setcategoryData] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });
  return loading ? (
    <SkeletonPlaceholder>
      <View style={styles.main}>
        <View
          style={{
            ...styles.touchContainer,
            width: wp('19.6'),
            height: hp('10'),
          }}></View>
      </View>
    </SkeletonPlaceholder>
  ) : (
    <View style={styles.main}>
      <FlatList
        data={categoryData}
        keyExtractor={item => item.key}
        contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row'}}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.touchContainer}>
              <Image
                style={{width: wp('19.6'), height: hp('10')}}
                source={require('../../images/No.png')}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
