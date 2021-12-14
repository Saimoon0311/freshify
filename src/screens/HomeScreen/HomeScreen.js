import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  FlatList,
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

export default function HomeScreen({navigation, route}) {
  const [loading, setLoading] = useState(true);
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
  return (
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
        contentContainerStyle={{paddingBottom: hp('15')}}>
        <View>
          <TouchableOpacity style={styles.search}>
            <Ionicons name="search" size={20} color={'gray'} />
            <TextInput
              placeholder="Search fresh grocery"
              placeholderTextColor={'gray'}
            />
          </TouchableOpacity>
          <View
            style={{
              marginTop: hp('5'),
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
            <HomeScreenAllProductData />
            <HomeBrandAllText name="Popular Deals" />
            <HomeScreenAllProductData />
            <View style={{flexDirection: 'row'}}>
              <HomeBrandAllText name="Categories" />
              <TouchableOpacity style={styles.viewmore}>
                <Text style={{color: color.textPrimaryColor}}>View more</Text>
              </TouchableOpacity>
            </View>
            <HomeScreenCategoryData />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}