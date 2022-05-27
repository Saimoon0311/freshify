import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicatorBase,
  ScrollView,
  Vibration,
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
import {allCartDataUrl, IMAGE_BASED_URL} from '../../Config/Url';
import {globalStyles} from '../globalStyle';
import CartData from '../../Redux/Reducer/CartData';
import {ApiPost} from '../../Config/helperFunction';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import getCartData from '../../Config/getCartData';
import {store} from '../../Redux/Reducer';

export const HomeScreenAllProductData = props => {
  // const {cartData} = useSelector(state => state.cartData);
  let cartData = store.getState().cartData.cartData;
  console.log(32, cartData);
  const [buttonLoading, setButtonLoading] = useState(false);
  const dispatch = useDispatch();
  // const addToCart = item => {
  //   let url = allCartDataUrl + cartData.id;
  //   let body = JSON.stringify({
  //     product_id: item?.id,
  //     variation_id: '0',
  //     quantity: 1,
  //   });
  //   ApiPost(url, body, false).then(res => {
  //     if (res.success == true) {
  //       showMessage({
  //         type: 'success',
  //         icon: 'success',
  //         message: 'Success',
  //         description: 'Your Cart has been Added',
  //         backgroundColor: color.textPrimaryColor,
  //       });
  //       Vibration.vibrate();
  //       setButtonLoading(false);
  //       getCartData();
  //     } else if (res.success == false) {
  //       showMessage({
  //         type: 'danger',
  //         icon: 'danger',
  //         message: 'Warning',
  //         description: 'SomeThing want wrong',
  //         backgroundColor: color.textPrimaryColor,
  //       });
  //       setButtonLoading(false);
  //     } else {
  //       console.log(64, res);
  //       showMessage({
  //         type: 'danger',
  //         icon: 'danger',
  //         message: 'Warning',
  //         description: 'Network request Faild',
  //         backgroundColor: color.textPrimaryColor,
  //       });
  //     }
  //   });
  // };
  const productsPlaceholder = () => {
    return (
      <View
        style={{
          ...styles.mainContainer,
          height: hp('29%'),
          marginLeft: wp('4.5'),
          backgroundColor: 'transparent',
          width: wp('45'),
          borderWidth: 2,
        }}>
        <View
          style={{
            ...styles.topText,
            width: wp('30'),
            height: hp('2'),
            backgroundColor: 'white',
            marginLeft: wp('5'),
            borderRadius: 10,
          }}
        />
        <View style={globalStyles.globalInsideImage} />
        <View
          style={{
            ...styles.topText,
            width: wp('30'),
            height: hp('2'),
            backgroundColor: 'white',
            marginLeft: wp('5'),
            borderRadius: 10,
            marginTop: hp('3'),
          }}
        />
        <View
          style={{
            ...styles.topText,
            width: wp('27'),
            height: hp('2'),
            backgroundColor: 'white',
            marginLeft: wp('5'),
            borderRadius: 10,
          }}
        />
      </View>
    );
  };
  return (
    <View>
      {props?.isloading ? (
        <SkeletonPlaceholder direction="left">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              {productsPlaceholder()}
              {productsPlaceholder()}
              {productsPlaceholder()}
              {productsPlaceholder()}
              {productsPlaceholder()}
              {productsPlaceholder()}
              {productsPlaceholder()}
              {productsPlaceholder()}
            </View>
          </ScrollView>
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
                <Text numberOfLines={1} style={styles.topText}>
                  {item?.name}
                </Text>
                <Text style={styles.priceText}>Price {item?.price}</Text>
                <Image
                  source={{uri: IMAGE_BASED_URL + item.image.url}}
                  style={{
                    ...globalStyles.globalInsideImage,
                    marginBottom: hp('0.5'),
                  }}
                />
                {item?.in_stock == 0 ? (
                  <Text style={styles.outOfStockContainer}>Out of stock</Text>
                ) : (
                  <TouchableOpacity
                    style={styles.addCartbutton}
                    onPress={() => props?.addToCart(item)}>
                    <Ionicons name="add" size={25} color={'white'} />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};
