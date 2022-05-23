import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicatorBase,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../color';
import {styles} from './style';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ActivityIndicator} from 'react-native-paper';
import {IMAGE_BASED_URL} from '../../Config/Url';
export const HomeScreenAllProductData = props => {
  return (
    <View>
      {props?.isloading ? (
        <SkeletonPlaceholder>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                ...styles.mainContainer,
                height: hp('29%'),
                marginLeft: wp('4.5'),
              }}></View>
            <View
              style={{
                ...styles.mainContainer,
                height: hp('29%'),
              }}></View>
            <View
              style={{
                ...styles.mainContainer,
                height: hp('29%'),
              }}></View>
            <View
              style={{
                ...styles.mainContainer,
                height: hp('29%'),
              }}></View>
          </View>
        </SkeletonPlaceholder>
      ) : (
        <FlatList
          data={props?.allProduct}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          contentContainerStyle={{paddingRight: wp('3')}}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.mainContainer}
                onPress={() => props?.navigation1(item)}>
                <Text style={styles.topText}>{item?.name}</Text>
                <Text style={styles.priceText}>Price {item?.price}</Text>
                <Image
                  source={{uri: IMAGE_BASED_URL + item.image.url}}
                  // resizeMode="contain"
                  style={styles.insideImage}
                />
                <TouchableOpacity style={styles.addCartbutton}>
                  <Ionicons name="add" size={25} color={'white'} />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};
