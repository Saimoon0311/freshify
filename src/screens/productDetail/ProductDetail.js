import React, {useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  Platform,
  Vibration,
} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BottomButton from '../../Reusedcomponents/BottomButton/bottomButton';
import {SliderBox, FastImage} from 'react-native-image-slider-box';
import {allCartDataUrl, IMAGE_BASED_URL} from '../../Config/Url';
import {ApiPost} from '../../Config/helperFunction';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {SkypeIndicator} from 'react-native-indicators';
import getCartData from '../../Config/getCartData';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function ProductDetail({navigation, route}) {
  const {cartData} = useSelector(state => state.cartData);
  const dispatch = useDispatch();
  const item = route.params;
  const [buttonLoading, setButtonLoading] = useState(false);

  const navigate = () => {
    navigation.goBack();
  };
  const addToCart = () => {
    setButtonLoading(true);
    let url = allCartDataUrl + cartData.id;
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
        Vibration.vibrate();
        setButtonLoading(false);
        getCartData();
        setShowAlert(true);
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
  const checkStock = () => {
    item.in_stock == 0 ? console.log('jahdbvfj') : addToCart();
  };
  const flatListProduct = [IMAGE_BASED_URL + item.image.url];
  const [showAlert, setShowAlert] = useState(false);

  const cancelContainer = () => {
    return (
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Product Confirm!"
        // message={'Want to View Cart ? \n Continue Shopping .'}
        contentContainerStyle={{
          maxWidth: wp('94'),
          backgroundColor: 'white',
          // height: hp('20'),
          // paddingBottom: hp('-5'),
        }}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={true}
        showCancelButton={true}
        showConfirmButton={true}
        confirmText="View Cart Details"
        cancelText="Continue Shopping"
        // overlayStyle={{backgroundColor: color.alertBackgroundColor}}
        confirmButtonStyle={styles.buttonstyle}
        cancelButtonStyle={styles.buttonstyle}
        confirmButtonTextStyle={{
          textAlign: 'center',
          color: color.textPrimaryColor,
          fontSize: hp('2.2%'),
        }}
        cancelButtonTextStyle={{
          textAlign: 'center',
          color: color.textPrimaryColor,
          fontSize: hp('2.2%'),
        }}
        titleStyle={{
          color: color.textPrimaryColor,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: hp('3'),
        }}
        messageStyle={{color: 'black', textAlign: 'center'}}
        onConfirmPressed={() => {
          setShowAlert(false);
          navigation.navigate('cartScreen');
        }}
        onCancelPressed={() => {
          setShowAlert(false);
        }}
      />
    );
  };
  return (
    <View style={styles.mainContainer}>
      <BackHeader
        Iconname="arrow-back-sharp"
        navigate={navigate}
        text="Product Details"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={{
          paddingBottom: hp('15'),
          width: wp('94'),
          alignSelf: 'center',
          paddingTop: hp('2'),
          // backgroundColor: 'yellow',
        }}>
        <SliderBox
          imageLoadingColor={color.textPrimaryColor}
          ImageComponent={FastImage}
          images={flatListProduct}
          style={styles.flatListMainContainer}
          dotColor={color.textPrimaryColor}
          inactiveDotColor="#90A4AE"
          resizeMode={'cover'}
          autoplay
          circleLoop
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
          }}
        />
        <View>
          <Text style={styles.textMainContainer}>
            {item.name} , {item?.product_sale_type?.pro_type_price}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: hp('2.5'),
                fontFamily: 'Poppins-SemiBold',
                color: '#434345',
              }}>
              Rs{' '}
            </Text>
            <Text style={{...styles.textMainContainer}}>{item.price}</Text>
          </View>
          <View>
            <Text style={styles.textDescription}>Description</Text>
            <View style={styles.textDescriptionContainer}>
              <Text style={styles.description}>{item?.short_description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        {buttonLoading ? (
          <SkypeIndicator color={color.textPrimaryColor} size={hp('6')} />
        ) : (
          <BottomButton
            onPress={checkStock}
            title={item.in_stock == 0 ? 'Out Of Stock' : 'Add to Cart'}
          />
        )}
      </View>
      {cancelContainer()}
    </View>
  );
}
