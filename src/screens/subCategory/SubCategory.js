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
import {
  allCartDataUrl,
  FrontProductUrl,
  IMAGE_BASED_URL,
  SubCategoryUrl,
} from '../../Config/Url';
import {ApiGet, ApiPost} from '../../Config/helperFunction';
import {showMessage} from 'react-native-flash-message';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {globalStyles} from '../../Reusedcomponents/globalStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NoProductView from '../../Reusedcomponents/NoProductView/noProductView';
import {useSelector} from 'react-redux';
import getCartData from '../../Config/getCartData';

export default function SubCategory({route, navigation}) {
  const item = route?.params;
  const [active, setActive] = useState(1);
  const [isloading, setIsLoading] = useState(true);
  const [subCategoryFlatList, setSubCategoryFlatList] = useState([]);

  const {cartData} = useSelector(state => state.cartData);
  const [buttonLoading, setButtonLoading] = useState(false);

  const addToCart = item => {
    setButtonLoading(true);
    let url = allCartDataUrl + cartData?.id;
    let body = JSON.stringify({
      product_id: item?.id,
      variation_id: '0',
      quantity: 1,
    });
    ApiPost(url, body, false).then(res => {
      if (res.success == true) {
        showMessage({
          type: 'success',
          icon: 'success',
          message: 'Success',
          description: 'Your Cart has been Added',
          backgroundColor: color.textPrimaryColor,
        });
        setButtonLoading(false);
        getCartData();
      } else if (res.success == false) {
        showMessage({
          type: 'danger',
          icon: 'danger',
          message: 'Warning',
          description: 'SomeThing want wrong',
          backgroundColor: color.textPrimaryColor,
        });
        setButtonLoading(false);
      }
    });
  };

  const navigate = () => {
    navigation.goBack();
  };
  const getSubCategoryData = () => {
    if (item?.search == true) {
      let url = FrontProductUrl + '?keyword=' + item?.name;
      ApiGet(url).then(res => {
        if (res.success == true) {
          setSubCategoryFlatList(res.data);
          setIsLoading(false);
        } else if (res.success == false && res.data == 'Not Found') {
          setIsLoading(false);
          setSubCategoryFlatList([]);
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
    } else {
      let body = {
        slug: item.name,
      };
      ApiPost(SubCategoryUrl, item.name, true).then(res => {
        console.log(item?.name, 96);
        if (res.success == true) {
          setSubCategoryFlatList(res.data);
          setIsLoading(false);
        } else if (res.success == false && res.data == 'Not Found') {
          setIsLoading(false);
          setSubCategoryFlatList([]);
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
    }
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
          height: hp('25'),
          // justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <View
          style={{
            ...styles.topText,
            backgroundColor: 'white',
            height: hp('2'),
            width: wp('30'),
            // marginTop: hp('0.5'),
          }}
        />
        <View
          style={{...globalStyles.globalInsideImage, backgroundColor: 'white'}}
        />
        <View
          style={{
            ...styles.priceText,
            backgroundColor: 'white',
            height: hp('2'),
          }}
        />
      </View>
    );
  };
  useEffect(() => {
    getSubCategoryData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={{marginBottom: hp('2')}}>
        {console.log(item?.name, 157)}
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
              // height: hp('100'),
            }}>
            {loadingView()}
            {loadingView()}
            {loadingView()}
            {loadingView()}
            {loadingView()}
            {loadingView()}
            {loadingView()}
            {loadingView()}
            {loadingView()}
            {loadingView()}
            {loadingView()}
          </View>
        </SkeletonPlaceholder>
      ) : subCategoryFlatList.length == 0 ? (
        <NoProductView text={'No Products found.'} />
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
                  {item.in_stock > 0 && (
                    <View>
                      <TouchableOpacity
                        onPress={() => addToCart(item)}
                        style={styles.addCartbutton}>
                        <Ionicons name="add" size={hp('3')} color={'white'} />
                      </TouchableOpacity>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )}
    </View>
  );
}
