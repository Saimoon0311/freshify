import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../color';
import {styles} from './style';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const HomeScreenAllProductData = props => {
  const [loading, setLoading] = useState(false);
  const [allProduct, setAllProduct] = useState([
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
  return loading ? (
    <SkeletonPlaceholder>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.mainContainer}></View>
        <View style={styles.mainContainer}></View>
        <View style={styles.mainContainer}></View>
        <View style={styles.mainContainer}></View>
      </View>
    </SkeletonPlaceholder>
  ) : (
    <FlatList
      data={allProduct}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={styles.mainContainer}
            onPress={() => props.ProductDetail()}>
            <View>
              <Text style={styles.topText}>Fresh Milk</Text>
              <Text style={styles.priceText}>Price 12585</Text>
              <Image
                source={require('../../images/1.png')}
                style={styles.insideImage}
              />
              <TouchableOpacity style={styles.addCartbutton}>
                <Ionicons name="add" size={25} color={'white'} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};
