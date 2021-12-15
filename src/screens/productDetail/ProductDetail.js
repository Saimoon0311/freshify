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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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

export default function ProductDetail() {
  return (
    <View style={styles.mainContainer}>
      <BackHeader text="Add To Cart" />
      <View style={styles.container}>
        <View style={styles.topButtonMainContainer}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>300gm</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>900gm</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>600gm</Text>
            </View>
          </TouchableOpacity>
        </View>
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
                // resizeMode="contain"
              />
            );
          }}
        />
        <ScrollView contentContainerStyle={{paddingBottom: hp('100')}}>
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
              <View style={styles.textDescriptionContainer}></View>
            </View>
            <View>
              <Text style={styles.textDescription}>Description</Text>
              <View style={styles.textDescriptionContainer}></View>
            </View>
            <View>
              <Text style={styles.textDescription}>Description</Text>
              <View style={styles.textDescriptionContainer}></View>
            </View>
            <View>
              <Text style={styles.textDescription}>Description</Text>
              <View style={styles.textDescriptionContainer}></View>
            </View>

            <View>
              <Text style={styles.textDescription}>Description</Text>
              <View style={styles.textDescriptionContainer}></View>
            </View>

            <TouchableOpacity>
              <View style={styles.cartButton}>
                <Text style={styles.textCart}>Add to Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
