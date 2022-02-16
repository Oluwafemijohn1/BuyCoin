import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';

import SafeAreaScreen from '../../components/SafeAreaScreen';
import common from '../../constants/common';
import DashboardProductItem from '../../components/items/DashboardProductItem';
import DashboardCarosel from '../../components/DashboardCarosel';
import Constants from '../../constants/Constants';

const popular = [
  {
    id: 1,
    image: require('../../../assets/popular-image.png'),
    rating: 3,
    sherzPrice: '1500',
    marketPrice: '1,800',
    productName: 'Pure Irish Butter',
  },
  {
    id: 2,
    image: require('../../../assets/popular-image.png'),
    rating: 5,
    sherzPrice: '800',
    marketPrice: '1,800',
    productName: 'Product Name',
  },
  {
    id: 3,
    image: require('../../../assets/popular-image.png'),
    rating: 2,
    sherzPrice: '800',
    marketPrice: '1,800',
    productName: 'Product Name',
  },
];

function HomeScreen(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isWallet, setIsWallet] = useState(false);
  return (
    <SafeAreaScreen>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.headerLeftContainer}>
              <View style={styles.imageConatiner}>
                <Image
                  source={require('../../../assets/avatar.png')}
                  style={styles.avater}
                />
                <View style={styles.countCountainer}>
                  <Text style={styles.count}>3</Text>
                </View>
              </View>
              <View style={styles.leftTextContainer}>
                <Text style={styles.hello}>Hello</Text>
                <Text style={styles.userName}>userName</Text>
              </View>
            </View>
            <View style={styles.headerRigthContainer}>
              <Text style={styles.createList}>Create a list</Text>
            </View>
          </View>
          {!isWallet ? (
            <DashboardCarosel />
          ) : (
            <View style={styles.walletCOntainer}>
              <ImageBackground
                source={require('../../../assets/wallet-background.png')}
                style={styles.walletBackground}>
                <Text style={styles.balance}>Hello</Text>
              </ImageBackground>
            </View>
          )}
          <View style={styles.productContainer}>
            <View>
              {/* Popular Items */}
              <View style={styles.listContainer}>
                <Text style={styles.popular}>Popular</Text>
                <Text style={styles.more}>More</Text>
              </View>
              <FlatList
                data={popular}
                horizontal
                style={styles.flatList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={({item}) => (
                  <DashboardProductItem
                    onPress={() => {
                      props.navigation.navigate(
                        Constants.ProductDetailsScreen,
                        item,
                      );
                    }}
                    item={item}
                  />
                )}
              />
              {/* New in */}
              <View style={styles.listContainer}>
                <Text style={styles.popular}>New in</Text>
                <Text style={styles.more}>More</Text>
              </View>
              <FlatList
                data={popular}
                horizontal
                style={styles.flatList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={({item}) => (
                  <DashboardProductItem
                    onPress={() => {
                      props.navigation.navigate(
                        Constants.ProductDetailsScreen,
                        item,
                      );
                    }}
                    item={item}
                  />
                )}
              />
              <View style={styles.listContainer}>
                <Text style={styles.popular}>Highest Ratings</Text>
                <Text style={styles.more}>More</Text>
              </View>
              <FlatList
                data={popular}
                horizontal
                style={styles.flatList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={({item}) => (
                  <DashboardProductItem
                    onPress={() => {
                      props.navigation.navigate(
                        Constants.ProductDetailsScreen,
                        item,
                      );
                    }}
                    item={item}
                  />
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: common.HP(2),
  },
  headerContainer: {
    height: common.WP(25),
    backgroundColor: common.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    marginLeft: common.WP(5),
    flex: 1,
  },
  headerRigthContainer: {
    width: common.WP(30),
    backgroundColor: common.colors.lightYellow,
    height: common.WP(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: common.WP(4),
    marginRight: common.WP(5),
    borderColor: common.colors.paleYellow,
    borderWidth: common.WP(0.5),
  },
  createList: {
    color: common.colors.paleYellow,
    fontSize: common.WP(4),
  },
  imageConatiner: {
    flexDirection: 'row',
  },
  count: {
    textAlign: 'center',
  },
  countCountainer: {
    height: common.WP(4),
    width: common.WP(4),
    backgroundColor: common.colors.lightPurple,
    marginLeft: common.WP(-3),
    top: common.WP(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: common.WP(4),
  },
  avater: {
    width: common.WP(20),
    height: common.WP(20),
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  leftTextContainer: {
    marginLeft: common.WP(2),
  },
  hello: {
    fontSize: common.WP(3),
  },
  userName: {
    fontSize: common.WP(4),
    fontWeight: 'bold',
  },
  productContainer: {
    paddingHorizontal: common.WP(5),
  },
  listContainer: {
    width: common.WP(90),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: common.WP(10),
    justifyContent: 'space-between',
  },
  popular: {
    fontSize: common.WP(5),
    fontWeight: 'bold',
  },
  more: {
    fontSize: common.WP(4),
    color: common.colors.red,
  },
  flatList: {
    marginTop: common.WP(5),
  },
  walletCOntainer: {
    height: common.WP(60),
    width: common.WP('100%'),
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: common.WP(12),
  },
  walletBackground: {
    height: common.WP(50),
    width: common.WP(80),
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  balance: {},
});

export default HomeScreen;
