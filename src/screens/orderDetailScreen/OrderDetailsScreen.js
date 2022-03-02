import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Divider} from 'react-native-elements';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const OrderDetailsScreen = ({navigation}) => {
  const navigate = () => {
    navigation.goBack();
  };
  return (
    <View>
      <BackHeader text={'Order No. 10000'} navigate={navigate} />
      <View style={styles.container}>
        <View style={styles.productDetailContainer}>
          <View style={styles.ImageMainContainer}>
            <Image
              style={styles.productDetailImageContainer}
              source={require('../../images/yogurtPics.png')}
            />
          </View>
          <View>
            <Text style={styles.yogurtText}>Yogurt 50mL</Text>
            <Text style={styles.priceText}>Rs 150 x 1</Text>
          </View>
          <Text style={styles.totalText}>Rs 150</Text>
        </View>
        <View style={styles.productPaymentMainContainer}>
          <Text style={styles.paymentDetailsText}>Payment Details</Text>
          <View style={styles.textMainContainer}>
            <Text style={styles.LeftText}>Payment Method</Text>
            <Text style={styles.rightText}>Cash On Delivery</Text>
          </View>
          <View style={styles.textMainContainer}>
            <Text style={styles.LeftText}>Sub Total</Text>
            <Text style={styles.rightText}>Rs 150</Text>
          </View>
          <View style={styles.textMainContainer}>
            <Text style={styles.LeftText}>Delivery Charges</Text>
            <Text style={styles.rightText}>RS 100</Text>
          </View>
          <Divider width={2} />
          <View style={styles.textMainContainer}>
            <Text style={styles.totalBillContainer}>Total Bill</Text>
            <View>
              <Text style={styles.totalBillContainer}>RS 150</Text>
              <Text style={{fontSize: hp('1.5'), color: 'gray'}}>
                (Inc. of taxes)
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderDetailsScreen;
