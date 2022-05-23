import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../color';
import {styles} from './styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ScrollView} from 'native-base';
import {IMAGE_BASED_URL} from '../../Config/Url';

export const HomeScreenCategoryData = props => {
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
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // });
  return (
    <View>
      {props?.isCategoryloading ? (
        // <View style={styles.main}>
        <SkeletonPlaceholder>
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              flexWrap: 'wrap',
              alignSelf: 'center',
              width: wp('100'),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                ...styles.touchContainer,
                width: wp('19.6'),
                height: hp('10'),
              }}
            />
            <View
              style={{
                ...styles.touchContainer,
                width: wp('19.6'),
                height: hp('10'),
              }}
            />
            <View
              style={{
                ...styles.touchContainer,
                width: wp('19.6'),
                height: hp('10'),
              }}
            />
            <View
              style={{
                ...styles.touchContainer,
                width: wp('19.6'),
                height: hp('10'),
              }}
            />
            <View
              style={{
                ...styles.touchContainer,
                width: wp('19.6'),
                height: hp('10'),
              }}
            />
            <View
              style={{
                ...styles.touchContainer,
                width: wp('19.6'),
                height: hp('10'),
              }}
            />
            <View
              style={{
                ...styles.touchContainer,
                width: wp('19.6'),
                height: hp('10'),
              }}
            />
            <View
              style={{
                ...styles.touchContainer,
                width: wp('19.6'),
                height: hp('10'),
              }}
            />
          </View>
        </SkeletonPlaceholder>
      ) : (
        <View style={styles.main}>
          <FlatList
            data={props?.categoryFeatureProduct}
            keyExtractor={item => item.key}
            contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row'}}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.touchContainer}>
                  <Image
                    style={{width: wp('19.6'), height: hp('7')}}
                    resizeMode="contain"
                    source={{uri: IMAGE_BASED_URL + item?.icon?.url}}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: hp('1.5'),
                      textAlign: 'center',
                    }}>
                    {item?.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};
