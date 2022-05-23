import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NineCubesLoader, BallIndicator} from 'react-native-indicators';
import {color} from '../../Reusedcomponents/color';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {allCategoriesUrl, IMAGE_BASED_URL} from '../../Config/Url';
import {ApiGet} from '../../Config/helperFunction';
import {Skeleton} from 'native-base';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function catergoryScreen({navigation}) {
  const {cartData} = useSelector(state => state.cartData);
  console.log(7687, cartData);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const onRefresh = useCallback(() => {
    // setRefreshing(true);
    setLoading(true);
    // setAloading(true);
    wait(2000).then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    getCategoryProduct();
  }, []);

  const [catergoryName, setCatergoryName] = useState([
    {id: 1},
    {id: 2},
    {id: 3},
  ]);
  const [catergoryData, setCatergoryData] = useState([]);

  const getCategoryProduct = () => {
    let url = allCategoriesUrl;
    ApiGet(url).then(res => {
      if (res.success == true) {
        setCatergoryData(res.data);
        setLoading(false);
      } else if (res.success == false) {
        setLoading(true);
        showMessage({
          type: 'danger',
          icon: 'danger',
          message: 'Warning',
          description: 'Some thing is wrong',
          backgroundColor: color.textPrimaryColor,
        });
      } else {
        setLoading(true);
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

  const navigate = () => {
    navigation.goBack();
  };

  return (
    <View>
      <BackHeader text="Catergory" navigate={navigate} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading ? (
          <SkeletonPlaceholder>
            <View style={{...styles.mainContainer, marginTop: hp('2')}}>
              <View
                style={{
                  ...styles.touchContainer,
                  width: wp('27'),
                  height: hp('11'),
                }}
              />
              <View
                style={{
                  ...styles.touchContainer,
                  width: wp('27'),
                  height: hp('11'),
                }}
              />
              <View
                style={{
                  ...styles.touchContainer,
                  width: wp('27'),
                  height: hp('11'),
                }}
              />
              <View
                style={{
                  ...styles.touchContainer,
                  width: wp('27'),
                  height: hp('11'),
                }}
              />
              <View
                style={{
                  ...styles.touchContainer,
                  width: wp('27'),
                  height: hp('11'),
                }}
              />
              <View
                style={{
                  ...styles.touchContainer,
                  width: wp('27'),
                  height: hp('11'),
                }}
              />
              <View
                style={{
                  ...styles.touchContainer,
                  width: wp('27'),
                  height: hp('11'),
                }}
              />
              <View
                style={{
                  ...styles.touchContainer,
                  width: wp('27'),
                  height: hp('11'),
                }}
              />
              <View
                style={{
                  ...styles.touchContainer,
                  width: wp('27'),
                  height: hp('11'),
                }}
              />
              <View
                style={{
                  ...styles.touchContainer,
                  width: wp('27'),
                  height: hp('11'),
                }}
              />
              <View
                style={{
                  ...styles.touchContainer,
                  width: wp('27'),
                  height: hp('11'),
                }}
              />
              <View
                style={{
                  ...styles.touchContainer,
                  width: wp('27'),
                  height: hp('11'),
                }}
              />
            </View>
          </SkeletonPlaceholder>
        ) : (
          <FlatList
            data={catergoryData}
            keyExtractor={item => item.id}
            numColumns={3}
            contentContainerStyle={{paddingBottom: hp('15')}}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('SubCategory')}
                  style={{
                    ...styles.touchContainer,
                    marginLeft: wp('3'),
                    marginRight: wp('2.0'),
                    marginTop: hp('1.5'),
                  }}>
                  <Image
                    resizeMode="contain"
                    style={styles.imageStyle}
                    source={{uri: IMAGE_BASED_URL + item?.image?.url}}
                  />
                  <Text
                    style={{
                      paddingTop: hp('0'),
                      color: '#6E6D6D',
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {item?.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </ScrollView>
    </View>
  );
}
