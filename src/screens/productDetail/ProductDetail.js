import React, {useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  Platform,
} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BottomButton from '../../Reusedcomponents/BottomButton/bottomButton';
import {SliderBox, FastImage} from 'react-native-image-slider-box';
import {IMAGE_BASED_URL} from '../../Config/Url';

// const flatListProduct = [
//   {
//     id: 1,
//     image: require('../../images/PureMilk.png'),
//   },
//   {
//     id: 2,
//     image: require('../../images/Product.jpg'),
//   },
//   {
//     id: 3,
//     image: require('../../images/PureMilk.png'),
//   },
// ];
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

export default function ProductDetail({navigation, route}) {
  const item = route.params;
  const [active, setActive] = useState(1);

  const navigate = () => {
    navigation.goBack();
  };

  const flatListProduct = [IMAGE_BASED_URL + item.image.url];
  console.log(63, item.image_url);
  return (
    <View style={styles.mainContainer}>
      <BackHeader
        Iconname="arrow-back-sharp"
        navigate={navigate}
        text="Product Details"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={{
          paddingBottom: hp('15'),
          width: wp('94'),
          alignSelf: 'center',
          paddingTop: hp('2'),
          // backgroundColor: 'yellow',
        }}>
        <SliderBox
          ImageComponent={FastImage}
          images={flatListProduct}
          style={styles.flatListMainContainer}
          dotColor={color.textPrimaryColor}
          inactiveDotColor="#90A4AE"
          resizeMode={'cover'}
          autoplay
          circleLoop
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
          }}
        />
        <View>
          <Text style={styles.textMainContainer}>
            {item.name}, 300gm Soft Pack
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: hp('2.5'),
                fontFamily: 'Poppins-SemiBold',
                color: '#434345',
              }}>
              Rs{' '}
            </Text>
            <Text style={{...styles.textMainContainer}}>{item.price}</Text>
          </View>
          <View>
            <Text style={styles.textDescription}>Description</Text>
            <View style={styles.textDescriptionContainer}>
              <Text style={styles.description}>{item?.short_description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <BottomButton
          onPress={
            item.in_stock == 0
              ? console.log('jahdbvfj')
              : console.log('jahdbvfj')
          }
          title={item.in_stock == 0 ? 'Out Of Stock' : 'Add to Cart'}
        />
      </View>
    </View>
  );
}
