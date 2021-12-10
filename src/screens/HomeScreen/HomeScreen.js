import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../../Reusedcomponents/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from '../HomeScreen/style';
import {InputField} from '../../Reusedcomponents/InputField/inputFeild';

export default function HomeScreen({navigation, route}) {
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
      <ScrollView>
        <View>
          <TouchableOpacity style={styles.search}>
            <Ionicons name="search" size={20} color={'gray'} />
            <TextInput
              placeholder="Search fresh grocery"
              placeholderTextColor={'gray'}
            />
          </TouchableOpacity>
          <View style={{marginTop: hp('5'), marginLeft: wp('2.6')}}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{flexDirection: 'row'}}>
              <Image source={require('../../images/sale.png')} />
              <Image source={require('../../images/sale.png')} />
              <Image source={require('../../images/sale.png')} />
              <Image source={require('../../images/sale.png')} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
