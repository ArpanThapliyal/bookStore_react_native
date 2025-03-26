import React from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const images:any = {
  'dontMakeMeThink.png': require('../assets/dontMakeMeThink.png'),
  'react.png': require('../assets/react.png'),
  'sharePoint.jpg': require('../assets/sharePoint.jpg'),
  'uxDummies.png': require('../assets/uxDummies.png'),
  'uxDesign.jpg': require('../assets/uxDesign.jpg'),
  'groupDescussion.jpg': require('../assets/groupDescussion.jpg'),
  'leanUx.jpg': require('../assets/leanUx.jpg'),
  'designEveryday.png': require('../assets/designEveryday.png'),
  'TheAlchemist.jpg': require('../assets/TheAlchemist.jpg'),
};

const bookModal = ({showModal, setShowModal, item}) => {
  return (
    <Modal
      animationType="slide"
      backdropColor={'rgba(0, 0, 0, 0.2)'}
      onRequestClose={() => {
        setShowModal(!showModal);
      }} // close on back button
      style={styles.modalContainer}>
      <View style={styles.Container}>
        {/* closing the modal button*/}
        <View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setShowModal(!showModal);
            }}>
            <Icon name="close" size={24} color={'white'} />
          </TouchableOpacity>
        </View>

        {/* white background part */}
        <View style={styles.subContainer}>
          {/* image and title */}
          <View style={styles.header}>
            <View>
              <Image source={images[item.img]} style={styles.image} />
            </View>
            <View style={{marginLeft:28}}>
              <Text style={{fontSize :17,fontWeight:'500'}}>{item.name}</Text>
              <Text style={{color:'grey',fontSize :15,}}>{item.author}</Text>
            </View>
          </View>
          {/* content */}
          <View style={styles.content}>
            <Text style={{color:'grey',fontSize :13,}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem praesentium quas eveniet est! Dignissimos magnam deserunt doloribus commodi sapiente ducimus, repudiandae dolore esse aperiam accusantium, enim tempora odio ex magni provident nostrum molestiae rem sequi. Libero eius magni expedita ipsum consequatur rem facere nulla et distinctio ex alias beatae fugiat aliquid maxime perspiciatis dignissimos dolorum inventore accusamus blanditiis sapiente labore, minus fuga porro quidem! Temporibus, iure non molestiae sequi magnam aliquam dolores cum nobis mollitia eaque repellat minus debitis ea iusto possimus illum, optio est accusantium totam fuga ullam inventore eum tempora officiis? Et consequatur soluta blanditiis officia voluptate corporis.</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default bookModal;

const styles = StyleSheet.create({
  modalContainer: {},
  Container: {
    marginTop: '80%',
  },
  closeButton: {
    backgroundColor: '#A03037',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 4,
    margin:10
  },
  subContainer:{
    backgroundColor:'white',
    height:400,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:14,
    marginHorizontal:14
  },
  image: {
    height: 100,
    width: 80,
    resizeMode:'cover'
  },
  content:{
    marginHorizontal:14,
    marginVertical:24,
    borderTopWidth:0.5,
    borderColor:'grey',
    paddingTop:14,
  }
});
