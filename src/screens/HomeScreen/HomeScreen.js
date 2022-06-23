import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
  RefreshControl,
  StatusBar,
  Platform,
  Vibration,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../../Reusedcomponents/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from '../HomeScreen/style';
import {InputField} from '../../Reusedcomponents/InputField/inputFeild';
import {HomeBrandAllText} from '../../Reusedcomponents/homeBrandAllText/homeBrandAllText';
import {HomeScreenAllProductData} from '../../Reusedcomponents/HomeScreenProductAllData/homeScreenAllProductData';
import {HomeScreenCategoryData} from '../../Reusedcomponents/homeScreenCategoryData/homeScreenCatergoryData';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {FAB} from 'react-native-paper';
import {Fab, Icon, NativeBaseProvider, Box, extendTheme} from 'native-base';
import {ApiGet, ApiPost} from '../../Config/helperFunction';
import {
  allCartDataUrl,
  allCategoriesUrl,
  createCartIdUrl,
  FrontProductUrl,
} from '../../Config/Url';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {LoginHeader} from '../../Reusedcomponents/loginHeader';
import getCartData from '../../Config/getCartData';
import types from '../../Redux/type';
import {SliderBox, FastImage} from 'react-native-image-slider-box';

export default function HomeScreen({navigation, route}) {
  const [allProduct, setAllProduct] = useState([]);
  const [categoryFeatureProduct, setCategoryFeatureProduct] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isCategoryloading, setIsCategoryLoading] = useState(true);
  const {cartData} = useSelector(state => state.cartData);
  const [searchHome, setSearchHome] = useState('');

  const getFrontProduct = () => {
    ApiGet(FrontProductUrl).then(res => {
      if (res.success == true) {
        setAllProduct(res.data);
        setIsLoading(false);
      } else if (res.success == false) {
        setIsLoading(true);
        showMessage({
          type: 'danger',
          icon: 'danger',
          message: 'Warning',
          description: 'Some thing is wrong',
          backgroundColor: color.textPrimaryColor,
        });
      } else {
        setIsLoading(true);
        showMessage({
          type: 'danger',
          icon: 'danger',
          message: 'Warning',
          description: 'Success not found',
          backgroundColor: color.textPrimaryColor,
        });
      }
    });
  };
  const addToCart = item => {
    let url = allCartDataUrl + cartData.id;
    let body = JSON.stringify({
      product_id: item?.id,
      variation_id: '0',
      quantity: 1,
    });
    ApiPost(url, body, false).then(res => {
      if (res.success == true) {
        getCartData();
        showMessage({
          type: 'success',
          icon: 'success',
          message: 'Success',
          description: 'Your Cart has been Added',
          backgroundColor: color.textPrimaryColor,
        });
        Vibration.vibrate();
      } else if (res.success == false) {
        showMessage({
          type: 'danger',
          icon: 'danger',
          message: 'Warning',
          description: 'SomeThing want wrong',
          backgroundColor: color.textPrimaryColor,
        });
      } else {
        showMessage({
          type: 'danger',
          icon: 'danger',
          message: 'Warning',
          description: 'Network request Faild',
          backgroundColor: color.textPrimaryColor,
        });
      }
    });
  };
  const getFeathureFrontProduct = () => {
    let url = allCategoriesUrl + '?is_featured=1';
    ApiGet(url).then(res => {
      if (res.success == true) {
        setCategoryFeatureProduct(res.data);
        setIsCategoryLoading(false);
      } else if (res.data == []) {
        setIsCategoryLoading(false);
        setCategoryFeatureProduct([]);
      } else if (res.success == false) {
        setIsCategoryLoading(true);
        showMessage({
          type: 'danger',
          icon: 'danger',
          message: 'Warning',
          description: 'Some thing is wrong',
          backgroundColor: color.textPrimaryColor,
        });
      } else {
        setIsCategoryLoading(true);
        showMessage({
          type: 'danger',
          icon: 'danger',
          message: 'Warning',
          description: 'Success not found',
          backgroundColor: color.textPrimaryColor,
        });
      }
    });
  };
  const navigation1 = item => {
    navigation.navigate('ProductDetail', item);
  };
  const navigation2 = item => {
    navigation.navigate('SubCategory', item);
  };
  const theme = extendTheme({
    components: {
      FAB: {
        baseStyle: {},
        defaultProps: {},
        variants: {},
        sizes: {},
      },
    },
  });
  const [silderData, setSliderData] = useState([
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
  ]);

  const [images, setImage] = useState([
    require('../../images/sale.png'),
    require('../../images/sale.png'),
    require('../../images/sale.png'),
    require('../../images/sale.png'), // Network image
    require('../../images/sale.png'),
  ]);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const dispatch = useDispatch();
  const createCartId = async () => {
    if (!cartData.id) {
      let url = createCartIdUrl;
      let body = {};
      ApiPost(url, body).then(res => {
        if (res.success == true) {
          dispatch({
            type: types.CreateCart,
            payload: res.data,
          });
        } else {
          showMessage({
            type: 'danger',
            icon: 'danger',
            message: 'Warning',
            description:
              'Please check your internet connection and restart you app for successfully initialize the app !',
            backgroundColor: color.textPrimaryColor,
          });
        }
      });
    } else {
      console.log('kjadbfbak');
    }
  };
  useEffect(() => {
    (async () => {
      await createCartId();
      getCartData();
      getFrontProduct();
      getFeathureFrontProduct();
    })();
  }, [cartData]);
  const searchHomeProducts = () => {
    if (searchHome != '' && searchHome !== null) {
      navigation.navigate('SubCategory', {
        name: searchHome,
        search: true,
      });
      setSearchHome('');
    } else {
      showMessage({
        type: 'danger',
        icon: 'danger',
        message: 'Warning',
        description: 'Kindly write some text to search.',
        backgroundColor: color.textPrimaryColor,
      });
    }
  };
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const onRefresh = useCallback(() => {
    setIsLoading(true);
    setIsCategoryLoading(true);
    setRefreshing(true);
    wait(2000).then(() => {
      getFrontProduct();
      getFeathureFrontProduct();
      setRefreshing(false);
    });
  }, []);
  return (
    <NativeBaseProvider theme={theme}>
      <View >
        <StatusBar
          hidden={false}
          barStyle={Platform.OS == 'ios' ? 'dark-content' : 'light-content'}
          // backgroundColor={'white'}
        />
        {/* <View style={styles.header}>
          <View style={{width: wp('20')}} />
          <View style={styles.locationText}>
            <Ionicons
              name="location-outline"
              color={color.textSecondaryColor}
              size={20}
            />
            <Text style={styles.headerText}>Delivery To</Text>
            <Text
              style={{...styles.headerText, color: color.textSecondaryColor}}>
              Gulshan-e-Iqbal, Karachi, Sindh
            </Text>
          </View>
          <View style={styles.headerArrowStyle}>
            <TouchableOpacity>
              <Ionicons name="arrow-down" color="black" size={30} />
            </TouchableOpacity>
          </View>
        </View> */}
        <LoginHeader />

        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{...styles.container,paddingBottom: hp('23'),}}>
          <View>
            <View style={styles.search}>
              <TouchableOpacity onPress={() => searchHomeProducts()}>
                <Ionicons name="search" size={20} color={'gray'} />
              </TouchableOpacity>
              <TextInput
                placeholder="Search fresh grocery"
                placeholderTextColor={'gray'}
                style={styles.searchInput}
                onChangeText={e => setSearchHome(e)}
                onSubmitEditing={() => searchHomeProducts()}
                value={searchHome}
                autoFocus={false}
                focusable={true}
                autoCorrect={false}
              />
            </View>
            <View>
              {/* <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{flexDirection: 'row'}}>
                {silderData?.length > 0 &&
                  silderData?.map(res => {
                    return <Image source={require('../../images/sale2.png')} />;
                  })}
              </ScrollView> */}
              <SliderBox
                imageLoadingColor={color.textPrimaryColor}
                ImageComponent={FastImage}
                images={images}
                style={styles.flatListMainContainer}
                dotColor={color.textPrimaryColor}
                inactiveDotColor="#90A4AE"
                resizeMode={'contain'}
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
              <HomeBrandAllText name="Dairy Products" />
              <HomeScreenAllProductData
                navigation1={navigation1}
                allProduct={allProduct?.Dairy}
                isloading={isloading}
                addToCart={addToCart}
              />
              <HomeBrandAllText name="Meat Products" />
              <HomeScreenAllProductData
                navigation1={navigation1}
                allProduct={allProduct?.Meat}
                isloading={isloading}
                addToCart={addToCart}
              />
              <View style={{flexDirection: 'row'}}>
                <View style={{marginTop: hp('1.3')}}>
                  <HomeBrandAllText name="Categories" />
                </View>
                <TouchableOpacity
                  style={styles.viewmore}
                  onPress={() => navigation.navigate('catergoryScreen')}>
                  <Text style={{color: color.textPrimaryColor}}>View more</Text>
                </TouchableOpacity>
              </View>
              <HomeScreenCategoryData
                navigation2={navigation2}
                categoryFeatureProduct={categoryFeatureProduct?.Meat}
                isCategoryloading={isCategoryloading}
                Subtitle="Meat"
              />
              <HomeScreenCategoryData
                navigation2={navigation2}
                categoryFeatureProduct={categoryFeatureProduct?.Dairy}
                isCategoryloading={isCategoryloading}
                Subtitle="Dairy"
              />
            </View>
          </View>
        </ScrollView>
      </View>
      {/* <Fab
        renderInPortal={false}
        shadow={2}
        style={{backgroundColor: color.textPrimaryColor}}
        fontStyle={{color: 'red'}}
        size="sm"
        label={'Track your order'}
      /> */}
    </NativeBaseProvider>
  );
}
