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
import {IMAGE_BASED_URL, SubCategoryUrl} from '../../Config/Url';
import {ApiPost} from '../../Config/helperFunction';
import {showMessage} from 'react-native-flash-message';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {globalStyles} from '../../Reusedcomponents/globalStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NoProductView from '../../Reusedcomponents/NoProductView/noProductView';

export default function SubCategory({route, navigation}) {
  const item = route.params;
  const [active, setActive] = useState(1);
  const [isloading, setIsLoading] = useState(true);
  const [subCategoryFlatList, setSubCategoryFlatList] = useState([]);

  const navigate = () => {
    navigation.goBack();
  };
  const getSubCategoryData = () => {
    ApiPost(SubCategoryUrl, item.name, true).then(res => {
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
  const loadingView = () => {
    return (
      <View
        style={{
          ...styles.mainContainer,
          marginLeft: wp('3'),
          marginRight: wp('3'),
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderColor: 'black',
        }}>
        <View style={{...styles.topText, backgroundColor: 'white'}} />
        <View
          style={{...globalStyles.globalInsideImage, backgroundColor: 'white'}}
        />
        <View style={{...styles.priceText, backgroundColor: 'white'}} />
      </View>
    );
  };
  useEffect(() => {
    getSubCategoryData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={{marginBottom: hp('2')}}>
        <BackHeader
          text={item?.name}
          Iconname="arrow-back"
          navigate={navigate}
        />
      </View>
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
            }}>
            {loadingView()}
            <View
              style={{
                ...styles.mainContainer,
                marginLeft: wp('3'),
                marginRight: wp('3'),
                height: hp('25'),
              }}></View>
          </View>
        </SkeletonPlaceholder>
      ) : subCategoryFlatList.length == 0 ? (
        <NoProductView />
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
                  onPress={() => navigation.navigate('ProductDetail', item)}>
                  <Text numberOfLines={1} style={styles.topText}>
                    {item?.name}
                  </Text>
                  <Image
                    source={{
                      uri: IMAGE_BASED_URL + item?.image?.url,
                    }}
                    style={globalStyles.globalInsideImage}
                    // resizeMode=""
                  />
                  <Text numberOfLines={1} style={styles.priceText}>
                    Rs{item?.price} {item?.product_sale_type?.single_qty_text}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    {/* <Text style={styles.mlText}>225 ml</Text> */}
                    <TouchableOpacity style={styles.addCartbutton}>
                      <Ionicons name="add" size={hp('3')} color={'white'} />
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
