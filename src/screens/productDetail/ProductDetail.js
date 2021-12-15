import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import {styles} from './styles';

const flatListProduct = [
  {
    id: 1,
    image: require('../../images/PureMilk.png'),
  },
  {
    id: 2,
    image: require('../../images/Product.jpg'),
  },
  {
    id: 3,
    image: require('../../images/PureMilk.png'),
  },
];
const flatGramButtonLists = [
  {
    id: 1,
    name: '300gm',
  },
  {
    id: 2,
    name: '600gm',
  },
  {
    id: 3,
    name: '900gm',
  },
];

export default function ProductDetail() {
  return (
    <View style={styles.mainContainer}>
      <BackHeader text="Add To Cart" />

      <View style={styles.container}>
        <FlatList
          data={flatGramButtonLists}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.topButtonMainContainer}>
                <TouchableOpacity>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>300gm</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <ScrollView>
          <FlatList
            data={flatListProduct}
            horizontal
            showsHorizontalScrollIndicator={false}
            //   keyExtractor={(item)}
            renderItem={({item}) => {
              return (
                // <TouchableOpacity onPress={() => console.log(item.id)}>

                <Image
                  style={styles.flatListMainContainer}
                  source={item?.image}
                  resizeMode="contain"
                />
              );
            }}
          />
          <View>
            <Text style={styles.textMainContainer}>
              Fresify Pure Milk, 300gm Soft Pack
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  textAlignVertical: 'center',
                }}>
                Rs
              </Text>
              <Text style={styles.textMainContainer}>605</Text>
            </View>
            <View>
              <Text style={styles.textDescription}>Description</Text>
              <View style={styles.textDescriptionContainer}>
                <Text>hello world</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.cartButton}>
        <Text style={styles.textCart}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
