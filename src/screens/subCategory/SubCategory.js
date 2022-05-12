import React, {useState} from 'react';
import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function SubCategory({navigation, props}) {
  const [active, setActive] = useState(1);
  const subCategoryFlatList = [
    {
      id: 1,
      name: 'Yogurt',
    },
    {
      id: 2,
      name: 'Eggs',
    },
    {
      id: 3,
      name: 'Breads',
    },
    {
      id: 4,
      name: 'Milk',
    },
  ];

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
    {
      id: 7,
    },
  ]);
  const navigate = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BackHeader
        text="Dairy & Eggs"
        Iconname="arrow-back"
        navigate={navigate}
      />
      <View style={styles.subContainer}>
        <FlatList
          data={subCategoryFlatList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.topButtonMainContainerActive}>
                <TouchableOpacity onPress={() => setActive(item.id)}>
                  <View
                    style={
                      active == item.id ? styles.button : styles.inactiveButton
                    }>
                    <Text
                      style={
                        active == item.id
                          ? styles.buttonText
                          : styles.inactiveButtonText
                      }>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>

      <FlatList
        numColumns={2}
        data={allProduct}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp('2')}}
        renderItem={({item}) => {
          return (
            <View style={styles.categoryContainer}>
              <TouchableOpacity
                style={styles.mainContainer}
                onPress={() => navigation.navigate('ProductDetail')}>
                <Text style={styles.topText}>Fresh Milk</Text>
                <Image
                  // source={require('../../images/1.png')}
                  source={{
                    uri: 'http://api.thefreshify.com/storage/products/kptqzoxPeWfFQdeOCl5r0ACOD3i9DSh5WGw3OBMb.jpg',
                  }}
                  style={styles.insideImage}
                  // resizeMode="cover"
                />
                <Text style={styles.priceText}>Rs50 Per/L</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.mlText}>225 ml</Text>
                  <TouchableOpacity style={styles.addCartbutton}>
                    <Ionicons name="add" size={25} color={'white'} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
