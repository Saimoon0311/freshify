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
import NoProductView from '../../Reusedcomponents/NoProductView/noProductView';

export default function catergoryScreen({navigation}) {
  const {cartData} = useSelector(state => state.cartData);

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

  const [catergoryData, setCatergoryData] = useState([]);

  const getCategoryProduct = () => {
    let url = allCategoriesUrl;
    ApiGet(url).then(res => {
      if (res.success == true) {
        setCatergoryData(res.data);
        setLoading(false);
      } else if (res.success == false && res.data == 'Not Found') {
        setLoading(false);
        setCatergoryData([]);
      } else if (res.success == false) {
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
  const categoryPlacholder = () => {
    return (
      <View
        style={{
          ...styles.touchContainer,
          backgroundColor: 'transparent',
          borderWidth: 2,
          width: wp('28'),
        }}>
        <View
          style={{
            ...styles.imageStyle,
            borderRadius: 10,
            width: wp('25'),
            height: hp('5'),
            // marginTop: hp('-2'),
          }}
        />
        <View
          style={{
            ...styles.categoryName,
            height: hp('3'),
            backgroundColor: 'white',
            width: wp('25'),
            marginTop: hp('1'),
            marginBottom: hp('1'),
          }}
        />
      </View>
    );
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
              {categoryPlacholder()}
              {categoryPlacholder()}
              {categoryPlacholder()}
              {categoryPlacholder()}
              {categoryPlacholder()}
              {categoryPlacholder()}
              {categoryPlacholder()}
              {categoryPlacholder()}
              {categoryPlacholder()}
              {categoryPlacholder()}
              {categoryPlacholder()}
              {categoryPlacholder()}
            </View>
          </SkeletonPlaceholder>
        ) : catergoryData.length == 0 ? (
          <NoProductView text={'No Category Found.'} />
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
                  onPress={() => navigation.navigate('SubCategory', item)}
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
                  <Text style={styles.categoryName}>{item?.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </ScrollView>
    </View>
  );
}
