import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import {Feather} from '@expo/vector-icons';
import mapMarker from '../images/map-marker.png'
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap(){
  const navigation = useNavigation();

  function handleNavigationOrphanageDetails(){
    navigation.navigate('OrphanageDetails');
  }


  return(
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -24.7199,
          longitude: -53.7433,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
      >
        <Marker 
          icon={mapMarker}
          coordinate={{
            latitude: -24.7199,
            longitude: -53.7433,
          }}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
        >

          <Callout 
            tooltip={true}
            onPress={handleNavigationOrphanageDetails}
          >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>
                Lar Das Meninas
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>


      <View style={styles.footer}>
        <Text style={styles.footerText}>2 Orfanatos Cadastrados</Text>
        <TouchableOpacity style={styles.createOrphanageButton}>
          <Feather name="plus" size={20} color="#fff"/>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  calloutContainer:{
    width: 168,
    height:46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText:{
    fontFamily: 'Nunito_700Bold',
    color: '#0089A5',
    fontSize: 14
  },
  footer:{
    position:'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft:24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  footerText:{
    fontFamily: 'Nunito_700Bold',
    color:"#8FA7B3"
  },
  createOrphanageButton:{
    width: 56,
    height: 56,
    backgroundColor: "#15c3d6",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
