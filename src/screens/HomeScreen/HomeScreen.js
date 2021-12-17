import React, {useState, useCallback} from 'react';
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

export default function HomeScreen({navigation, route}) {
  const ProductDetail = item => {
    navigation.navigate('ProductDetail', item);
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
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const onRefresh = useCallback(() => {
    // setRefreshing(true);
    setLoading(true);
    // setAloading(true);
    wait(2000).then(() => {
      setLoading(false);
    });
  }, []);
  return (
    <NativeBaseProvider theme={theme}>
      <View>
        <View style={styles.header}>
          <View style={{width: wp('20')}}></View>
          <View style={styles.locationText}>
            <Ionicons
              name="location-outline"
              color={color.textPrimaryColor}
              size={20}
            />
            <Text style={styles.headerText}>Delivery To</Text>
            <Text style={{...styles.headerText, color: 'green'}}>
              Gulshan-e-Iqbal, Karachi, Sindh
            </Text>
          </View>
          <View
            style={{
              width: wp('20'),
              justifyContent: 'center',
              // backgroundColor: 'yellow',
            }}>
            <TouchableOpacity
              style={{
                // marginLeft: 'auto',
                // marginRight: wp('2'),
                alignSelf: 'center',
              }}>
              <Ionicons name="arrow-down" color="black" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{paddingBottom: hp('20')}}>
          <View>
            <View style={styles.search}>
              <TouchableOpacity>
                <Ionicons name="search" size={20} color={'gray'} />
              </TouchableOpacity>
              <TextInput
                placeholder="Search fresh grocery"
                placeholderTextColor={'gray'}
                style={styles.searchInput}
              />
            </View>
            <View
              style={{
                marginTop: hp('2'),
                marginLeft: wp('3'),
              }}>
              {/* <FlatList
           data={data}

           /> */}
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{flexDirection: 'row'}}>
                {silderData?.length > 0 &&
                  silderData?.map(res => {
                    return <Image source={require('../../images/sale.png')} />;
                  })}
              </ScrollView>
              <HomeBrandAllText name="Top Selling" />
              <HomeScreenAllProductData ProductDetail={ProductDetail} />
              <HomeBrandAllText name="Popular Deals" />
              <HomeScreenAllProductData ProductDetail={ProductDetail} />
              <View style={{flexDirection: 'row'}}>
                <HomeBrandAllText name="Categories" />
                <TouchableOpacity
                  style={styles.viewmore}
                  onPress={() => navigation.navigate('catergoryScreen')}>
                  <Text style={{color: color.textPrimaryColor}}>View more</Text>
                </TouchableOpacity>
              </View>
              <HomeScreenCategoryData />
            </View>
          </View>
        </ScrollView>
        {/* <Fab
          placement="bottom-right"
          colorScheme="#38B349"
          size="lg"
          style={{
            bottom: hp('7'),
            alignItems: 'center',
            // width: wp('17'),
            // height: hp('10'),
          }}
          label={'Track Your Order'}
          textAlign={'center'}
          fontSize={hp('1')}
          // icon={<Icon name="share" type="Entypo" />}
        /> */}
      </View>
    </NativeBaseProvider>
  );
}
