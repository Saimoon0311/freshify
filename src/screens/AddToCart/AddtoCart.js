import React from 'react';
import {Image, Text, View} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import {styles} from './styles';

export default function AddtoCart() {
  return (
    <View style={styles.mainContainer}>
      <BackHeader text="Add To Cart" />
      <View style={styles.container}>
        <View style={styles.topButtonMainContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>300gm</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>900gm</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>600gm</Text>
          </View>
        </View>
        <View style={styles.flatListMainContainer}>
          <View style={{}}>
            <Image
              style={styles.image}
              source={require('../../images/PureMilk.png')}
            />
          </View>
        </View>
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
          <View style={styles.cartButton}>
            <Text
              style={{
                flex: 1,
                flexDirection: 'row',
                textAlign: 'center',
                textAlignVertical: 'center',
                color: color.white,
              }}>
              Add to Cart
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
