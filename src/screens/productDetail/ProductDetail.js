import React, {useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  Platform,
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
    console.log(345435345);
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
  const checkStock = () => {
    item.in_stock == 0 ? console.log('jahdbvfj') : addToCart();
  };
  const flatListProduct = [IMAGE_BASED_URL + item.image.url];
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
            {item.name}, 300gm Soft Pack
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
    </View>
  );
}
