import React, {useState} from 'react';
import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import {styles} from './styles';

export default function SubCategory({navigation, props}) {
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
              <View style={styles.topButtonMainContainer}>
                <TouchableOpacity>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>{item.name}</Text>
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
        renderItem={({item}) => {
          return (
            <View style={styles.categoryContainer}>
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
            </View>
          );
        }}
      />
    </View>
  );
}
