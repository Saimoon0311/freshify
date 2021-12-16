import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function catergoryScreen({navigation}) {
  const [catergoryName, setCatergoryName] = useState([
    {id: 1},
    {id: 2},
    {id: 3},
  ]);
  const [catergoryData, setCatergoryData] = useState([
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
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
  ]);
  return (
    <View>
      <BackHeader text="Catergory" />
      <FlatList
        data={catergoryName}
        keyExtractor={item => item.key}
        contentContainerStyle={{paddingBottom: hp('15')}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View>
              <Text
                style={{
                  marginLeft: wp('5'),
                  marginTop: hp('3'),
                  fontFamily: 'Poppins-Regular',
                  fontSize: hp('2.3'),
                  color: 'black',
                }}>
                Fresh Meat (Frozen)
              </Text>
              <View
                style={{
                  width: wp('90'),
                  flexDirection: 'row',
                  alignSelf: 'center',
                  // justifyContent: 'space-around',
                  flexWrap: 'wrap',
                  // display: 'flex',
                  justifyContent: 'space-between',
                }}>
                {catergoryData.map(res => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('SubCategory')}
                      style={{
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 5,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 10,
                        elevation: hp('0.5'),
                        backgroundColor: 'white',
                        marginBottom: hp('1.5'),
                        // width: wp('28'),
                        // height: hp('10'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 6,
                      }}>
                      <Image
                        style={{
                          width: wp('28'),
                          height: hp('10'),
                          borderRadius: 20,
                        }}
                        source={require('../../images/catergory.png')}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
