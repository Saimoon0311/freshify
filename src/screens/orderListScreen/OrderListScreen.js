import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {color} from '../../Reusedcomponents/color';
const OrderListScreen = ({navigation}) => {
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
  const navigate = () => {
    navigation.goBack();
  };
  return (
    <View>
      <BackHeader text={'OrderList'} navigate={navigate} />
      <View style={styles.container}>
        <FlatList
          data={cartData}
          keyExtractor={item => item.key}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('OrderDetails')}
                style={{
                  ...styles.TotalMaincontainer,
                  flexDirection: 'row',
                  marginBottom: hp('3'),
                  padding: wp('2'),
                }}>
                <Image
                  source={require('../../images/Group.png')}
                  style={{
                    width: wp('20'),
                    height: hp('12'),
                    alignSelf: 'center',
                    resizeMode: 'contain',
                  }}
                />
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: wp('63'),
                    }}>
                    <Text style={styles.operaMilkTextContainer}>
                      Olpers Milk 0.25 L
                    </Text>
                    <TouchableOpacity
                      style={{
                        marginLeft: 'auto',
                        height: hp('3.5'),
                      }}>
                      <Entypo name="cross" color={'gray'} size={20} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={{color: 'gray'}}>Rs 40 x 1 </Text>
                    {/* <View style={styles.quantityContainer}>
                      <TouchableOpacity>
                        <FontAwesome5
                          color={color.textPrimaryColor}
                          name="minus"
                          size={10}
                        />
                      </TouchableOpacity>
                      <Text style={{marginLeft: wp('1'), color: 'black'}}>
                        1
                      </Text>
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
                    </View> */}
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default OrderListScreen;
