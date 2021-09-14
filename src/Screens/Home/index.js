import * as React from 'react';
import ServiceCard from './components/ServiceCard';
import Swiper from 'react-native-swiper';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import {
  verticalScale,
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

function HomeScreen({navigation}) {
  const [weather, setWeather] = React.useState([
    {
      id: 12,
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 13,
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 14,
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 15,
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ]);

  React.useEffect(() => {}, []);

  const DailyForcast = ({item, index}) => (
    <View style={localStyles.imgBck}>
      <Image
        style={localStyles.img}
        source={require('../../assests/images/bg.png')}
        resizeMode="stretch"
      />
      <Text style={localStyles.txt}>{item.des}</Text>
    </View>
  );

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#3895D3'}}>
      <SafeAreaView>
        <View style={localStyles.container}>
          <View
            style={{
              width: '80%',
            }}>
            <TextInput
              style={localStyles.textinput}
              editable={true}
              placeholder={'Search'}
              placeholderTextColor={'white'}
              returnKeyType="done"
              onChangeText={text => {
                // onValueChange(text);
              }}
              // value={query}
              // onFocus={() => setSearching(true)}
              // onBlur={() => setSearching(false)}
              //value={value}
            />
          </View>

          <View style={localStyles.searchviewbox}>
            <Image
              style={localStyles.searchImg}
              source={require('../../assests/images/QRCode.png')}
              resizeMode="contain"
            />
            <Image
              style={localStyles.searchImg}
              source={require('../../assests/images/search.png')}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={localStyles.containers}>
          <SwiperFlatList
            index={0}
            showPagination
            data={weather}
            renderItem={DailyForcast}
            paginationStyleItem={{
              top: -70,
              width: scale(15),
              height: verticalScale(5),
            }}
            paginationStyleItemActive={{
              top: -72,
              width: scale(35),
              height: verticalScale(8),
            }}
          />
        </View>
        {/* <FlatList
          data={weather}
          renderItem={DailyForcast}
          horizontal={true}
          keyExtractor={item => item.id}
        /> */}

        <View style={localStyles.serviceCardContainer}>
          <View style={localStyles.serviceCardSmallContainer}>
            <ServiceCard
              serviceName={'Social'}
              imagePath={require('../../assests/images/MEDICOS_MODULE_ICONS-01.png')}
            />
            <ServiceCard
              serviceName={'Games'}
              imagePath={require('../../assests/images/MEDICOS_MODULE_ICONS-02.png')}
            />
            <ServiceCard
              serviceName={'Connect'}
              imagePath={require('../../assests/images/MEDICOS_MODULE_ICONS-03.png')}
            />
          </View>
          <View style={localStyles.serviceCardSmallContainer}>
            <ServiceCard
              serviceName={'Career'}
              imagePath={require('../../assests/images/MEDICOS_MODULE_ICONS-04.png')}
            />
            <ServiceCard
              serviceName={'Shopping'}
              imagePath={require('../../assests/images/MEDICOS_MODULE_ICONS-05.png')}
            />
            <ServiceCard
              serviceName={'Ampules'}
              imagePath={require('../../assests/images/MEDICOS_MODULE_ICONS-06.png')}
            />
          </View>
        </View>

        <Text style={localStyles.txtBold}>Whats new?</Text>
        <View style={{marginBottom: verticalScale(50)}}>
          <SwiperFlatList
            index={0}
            showPagination
            data={weather}
            renderItem={DailyForcast}
            paginationStyleItem={{
              top: -70,
              width: scale(15),
              height: verticalScale(5),
            }}
            paginationStyleItemActive={{
              top: -72,
              width: scale(35),
              height: verticalScale(8),
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const {width} = Dimensions.get('window');

const localStyles = StyleSheet.create({
  containers: {},
  child: {width, justifyContent: 'center'},
  text: {fontSize: width * 0.5, textAlign: 'center'},
  imgBck: {
    alignItems: 'center',
    borderRadius: 5,
    height: verticalScale(170),
    width: scale(330),
    marginLeft: scale(10),
  },
  container: {
    alignSelf: 'center',
    width: '90%',
    height: verticalScale(40),
    marginHorizontal: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
    //borderColor: primaryTheme.yellow,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginBottom: scale(10),
    marginTop: verticalScale(15),
    alignContent: 'center',
  },
  textinput: {
    height: 40,
    width: '100%',
    padding: 0,
    //color: textColor,

    //paddingLeft : 10,
    margin: 0,
    borderWidth: 0,
    color: '#000000',
  },
  img: {
    height: verticalScale(100),
    borderRadius: moderateScale(12),
    width: '95%',
  },
  txt: {marginLeft: 10, marginRight: 10, color: 'white'},
  searchviewbox: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchImg: {
    width: scale(14),
    height: verticalScale(14),
    marginRight: scale(10),
  },
  serviceCardContainer: {
    marginRight: scale(10),
    marginLeft: scale(10),
    marginBottom: verticalScale(20),
  },
  serviceCardSmallContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: verticalScale(5),
  },
  txtBold: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: scale(20),
    fontSize: scale(17),
  },
});

export default HomeScreen;
