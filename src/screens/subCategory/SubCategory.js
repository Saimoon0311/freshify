import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SubCategoryUrl} from '../../Config/Url';
import {ApiPost} from '../../Config/helperFunction';
import {showMessage} from 'react-native-flash-message';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function SubCategory({route, navigation}) {
  const item = route.params;
  const [active, setActive] = useState(1);
  const [isloading, setIsLoading] = useState(true);
  const [subCategoryFlatList, setSubCategoryFlatList] = useState([]);

  const navigate = () => {
    navigation.goBack();
  };
  const getSubCategoryData = () => {
    let body = {
      slug: item.name,
    };
    console.log(78, body);
    ApiPost(SubCategoryUrl, body, true).then(res => {
      console.log(88, res);

      if (res.success == true) {
        setSubCategoryFlatList(res.data);
        // setIsLoading(false);
      } else if (res.success == false) {
        setIsLoading(true);
        showMessage({
          type: 'danger',
          icon: 'danger',
          message: 'Warning',
          description: 'SomeThing want wrong',
          backgroundColor: color.textPrimaryColor,
        });
      }
    });
  };
  useEffect(() => {
    getSubCategoryData();
  }, []);
  return (
    <View style={styles.container}>
      <BackHeader text={item?.name} Iconname="arrow-back" navigate={navigate} />
      {/* <View style={styles.subContainer}>
        <FlatList
          data={subCategoryFlatList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.topButtonMainContainerActive}>
                <TouchableOpacity onPress={() => setActive(item.id)}>
                  <View
                    style={
                      active == item.id ? styles.button : styles.inactiveButton
                    }>
                    <Text
                      style={
                        active == item.id
                          ? styles.buttonText
                          : styles.inactiveButtonText
                      }>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View> */}
      {isloading ? (
        <SkeletonPlaceholder>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignSelf: 'center',
              width: wp('100'),
              justifyContent: 'center',
              marginTop: hp('3'),
            }}>
            <View
              style={{
                ...styles.mainContainer,
                height: hp('29%'),
                marginLeft: wp('3'),
                marginRight: wp('3'),
              }}></View>
            <View
              style={{
                ...styles.mainContainer,
                marginLeft: wp('3'),
                marginRight: wp('3'),
                height: hp('29%'),
              }}></View>
            <View
              style={{
                ...styles.mainContainer,
                marginLeft: wp('3'),
                marginRight: wp('3'),
                height: hp('29%'),
              }}></View>
            <View
              style={{
                ...styles.mainContainer,
                marginLeft: wp('3'),
                marginRight: wp('3'),
                height: hp('29%'),
              }}></View>
            <View
              style={{
                ...styles.mainContainer,
                marginLeft: wp('3'),
                marginRight: wp('3'),
                height: hp('29%'),
              }}></View>
            <View
              style={{
                ...styles.mainContainer,
                marginLeft: wp('3'),
                marginRight: wp('3'),
                height: hp('29%'),
              }}></View>
            <View
              style={{
                ...styles.mainContainer,
                marginLeft: wp('3'),
                marginRight: wp('3'),
                height: hp('29%'),
              }}></View>
            <View
              style={{
                ...styles.mainContainer,
                marginLeft: wp('3'),
                marginRight: wp('3'),
                height: hp('29%'),
              }}></View>
          </View>
        </SkeletonPlaceholder>
      ) : (
        <FlatList
          numColumns={2}
          data={subCategoryFlatList}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: hp('2')}}
          renderItem={({item}) => {
            return (
              <View style={styles.categoryContainer}>
                <TouchableOpacity
                  style={styles.mainContainer}
                  onPress={() => navigation.navigate('ProductDetail')}>
                  <Text style={styles.topText}>Fresh Milk</Text>
                  <Image
                    source={{
                      uri: 'https://api.thefreshify.com/storage/products/kptqzoxPeWfFQdeOCl5r0ACOD3i9DSh5WGw3OBMb.jpg',
                    }}
                    style={styles.insideImage}
                    // resizeMode="cover"
                  />
                  <Text style={styles.priceText}>Rs50 Per/L</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.mlText}>225 ml</Text>
                    <TouchableOpacity style={styles.addCartbutton}>
                      <Ionicons name="add" size={25} color={'white'} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )}
    </View>
  );
}
