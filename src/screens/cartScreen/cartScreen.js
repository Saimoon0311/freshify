import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import {styles} from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function cartScreen() {
  const [loading, setLoading] = useState(true);
  const [cartData, setCartData] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ]);
  return (
    <>
      <BackHeader text="My Cart" />

      <ScrollView contentContainerStyle={{paddingBottom: hp('8')}}>
        <View style={{alignItems: 'center', marginTop: hp('3')}}>
          <FlatList
            data={cartData}
            keyExtractor={item => item.key}
            // contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row'}}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.maincomponent}>
                  <Image
                    source={require('../../images/Group.png')}
                    style={{
                      width: wp('23'),
                      height: hp('15'),
                      resizeMode: 'contain',
                      // backgroundColor: 'red',
                    }}
                  />
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        // backgroundColor: 'red',
                        width: wp('63'),
                      }}>
                      <Text
                        style={{
                          fontSize: hp('2.3'),
                          color: 'black',
                          marginLeft: wp('2'),
                        }}>
                        Olpers Milk 0.25 L
                      </Text>
                      <TouchableOpacity
                        style={{
                          marginLeft: 'auto',
                          height: hp('3.5'),
                          // alignSelf: '',
                        }}>
                        <Entypo name="cross" size={20} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.priceContainer}>
                      <Text>Rs 40 x 1 </Text>
                      <View style={styles.quantityContainer}>
                        <TouchableOpacity>
                          <FontAwesome5
                            color={color.textPrimaryColor}
                            name="minus"
                            size={10}
                          />
                        </TouchableOpacity>
                        <Text style={{marginLeft: wp('1')}}>1</Text>
                        <TouchableOpacity>
                          <MaterialIcons
                            color={color.textPrimaryColor}
                            style={{
                              marginRight: wp('-1.5'),
                            }}
                            name="add"
                            size={18}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <View style={styles.TotalMaincontainer}>
            <View
              style={{
                flexDirection: 'row',
                margin: wp('5'),
              }}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={{...styles.totalText, marginLeft: 'auto'}}>
                Rs 125
              </Text>
            </View>
            <TouchableOpacity style={styles.processButton}>
              <Text style={styles.processText}>Proceed To Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
