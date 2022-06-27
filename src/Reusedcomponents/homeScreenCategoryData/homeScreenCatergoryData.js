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
import NoProductView from '../NoProductView/noProductView';

export const HomeScreenCategoryData = props => {
  const categoriesPlaceholder = () => {
    return (
      <View
        style={{
          ...styles.touchContainer,
          width: wp('19.6'),
          height: hp('10'),
          backgroundColor: 'transparent',
          borderWidth: 2,
          alignItems: 'center',
        }}>
        <View
          style={{
            ...styles.categoryImage,
            width: wp('15'),
            borderRadius: 10,
            height: hp('5'),
          }}
        />
        <View
          style={{
            ...styles.name,
            width: wp('10'),
            height: hp('2'),
            marginTop: hp('1'),
            borderRadius: 10,
          }}
        />
      </View>
    );
  };

  return (
    <View>
      {props?.isCategoryloading ? (
        <SkeletonPlaceholder>
          <View style={styles.placeholderView}>
            {categoriesPlaceholder()}
            {categoriesPlaceholder()}
            {categoriesPlaceholder()}
            {categoriesPlaceholder()}
            {categoriesPlaceholder()}
            {categoriesPlaceholder()}
            {categoriesPlaceholder()}
            {categoriesPlaceholder()}
          </View>
        </SkeletonPlaceholder>
      ) : props?.categoryFeatureProduct.length == 0 ? (
        <View
          style={{
            height: hp('30'),
            marginTop: hp('2'),
          }}>
          <NoProductView
            width={wp('50')}
            height={hp('20')}
            text="No Category Found"
          />
        </View>
      ) : (
        <View style={styles.main}>
          <Text style={styles.subTitle}>{props?.Subtitle}</Text>
          <FlatList
            data={props?.categoryFeatureProduct}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row'}}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => props?.navigation2(item)}
                  style={styles.touchContainer}>
                  <Image
                    style={styles.categoryImage}
                    resizeMode="contain"
                    source={{uri: IMAGE_BASED_URL + item?.icon?.url}}
                  />
                  <Text numberOfLines={1} style={styles.name}>
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
