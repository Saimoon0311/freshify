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

export default function catergoryScreen({navigation}) {
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading ? (
          <View style={{marginTop: hp('20%'), marginBottom: hp('10')}}>
            <BallIndicator
              size={50}
              color={color.textPrimaryColor}
              dotRadius={10}
            />
          </View>
        ) : (
          <FlatList
            data={catergoryName}
            keyExtractor={item => item.key}
            contentContainerStyle={{paddingBottom: hp('15')}}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View>
                  <Text style={styles.headText}>Fresh Meat (Frozen)</Text>
                  <View style={styles.mainContainer}>
                    {catergoryData.map(res => {
                      return (
                        <TouchableOpacity
                          onPress={() => navigation.navigate('SubCategory')}
                          style={styles.touchContainer}>
                          <Image
                            style={{
                              width: wp('28'),
                              height: hp('7'),
                              marginTop: hp('1'),
                              borderRadius: 20,
                            }}
                            // resizeMode="cover"
                            source={require('../../images/milkPack.png')}
                          />
                          <Text
                            style={{
                              paddingTop: hp('0'),
                              // paddingBottom: hp('1'),
                              color: '#6E6D6D',
                              fontFamily: 'Poppins-Regular',
                            }}>
                            Chicken
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              );
            }}
          />
        )}
      </ScrollView>
    </View>
  );
}
