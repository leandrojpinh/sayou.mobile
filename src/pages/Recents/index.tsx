import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

import item from '../../assets/images/item.png';

export default function Recents() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <View style={styles.searchHeader}>
          <Text style={styles.searhTitle}>Recentes</Text>
          <Feather name='bell' color='#FCFCFC' size={20} />
        </View>
        <TextInput
          style={styles.input}
          placeholder='Pesquisar'
          placeholderTextColor='#B2B2B2'
        />
      </View>
      <ScrollView style={styles.signalList}
        contentContainerStyle={{
          paddingHorizontal: 18,
          paddingBottom: 18
        }}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.item}>
          <Image source={item} style={styles.profile} />
          <View style={styles.signal}>
            <View style={styles.signalHeader}>
              <Text style={styles.signalName}>Obrigado</Text>
              <Feather name='heart' color='#3A4856' size={17} />
            </View>
            <Text style={styles.signalDescription}>Lorem ipsum asdasdasdasdasdasasd lacus ultrices dolor diam per nostra sollicitudin rhoncus, vivamus nullam congue ut volutpat elementum.</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={item} style={styles.profile} />
          <View style={styles.signal}>
            <View style={styles.signalHeader}>
              <Text style={styles.signalName}>Obrigado</Text>
              <Feather name='heart' color='#3A4856' size={17} />
            </View>
            <Text style={styles.signalDescription}>Lorem ipsum asdasdasdasdasdasasd lacus ultrices dolor diam per nostra sollicitudin rhoncus, vivamus nullam congue ut volutpat elementum.</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={item} style={styles.profile} />
          <View style={styles.signal}>
            <View style={styles.signalHeader}>
              <Text style={styles.signalName}>Obrigado</Text>
              <Feather name='heart' color='#3A4856' size={17} />
            </View>
            <Text style={styles.signalDescription}>Lorem ipsum asdasdasdasdasdasasd lacus ultrices dolor diam per nostra sollicitudin rhoncus, vivamus nullam congue ut volutpat elementum.</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={item} style={styles.profile} />
          <View style={styles.signal}>
            <View style={styles.signalHeader}>
              <Text style={styles.signalName}>Obrigado</Text>
              <Feather name='heart' color='#3A4856' size={17} />
            </View>
            <Text style={styles.signalDescription}>Lorem ipsum asdasdasdasdasdasasd lacus ultrices dolor diam per nostra sollicitudin rhoncus, vivamus nullam congue ut volutpat elementum.</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={item} style={styles.profile} />
          <View style={styles.signal}>
            <View style={styles.signalHeader}>
              <Text style={styles.signalName}>Obrigado</Text>
              <Feather name='heart' color='#3A4856' size={17} />
            </View>
            <Text style={styles.signalDescription}>Lorem ipsum asdasdasdasdasdasasd lacus ultrices dolor diam per nostra sollicitudin rhoncus, vivamus nullam congue ut volutpat elementum.</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={item} style={styles.profile} />
          <View style={styles.signal}>
            <View style={styles.signalHeader}>
              <Text style={styles.signalName}>Obrigado</Text>
              <Feather name='heart' color='#3A4856' size={17} />
            </View>
            <Text style={styles.signalDescription}>Lorem ipsum asdasdasdasdasdasasd lacus ultrices dolor diam per nostra sollicitudin rhoncus, vivamus nullam congue ut volutpat elementum.</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={item} style={styles.profile} />
          <View style={styles.signal}>
            <View style={styles.signalHeader}>
              <Text style={styles.signalName}>Obrigado</Text>
              <Feather name='heart' color='#3A4856' size={17} />
            </View>
            <Text style={styles.signalDescription}>Lorem ipsum asdasdasdasdasdasasd lacus ultrices dolor diam per nostra sollicitudin rhoncus, vivamus nullam congue ut volutpat elementum.</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={item} style={styles.profile} />
          <View style={styles.signal}>
            <View style={styles.signalHeader}>
              <Text style={styles.signalName}>Obrigado</Text>
              <Feather name='heart' color='#3A4856' size={17} />
            </View>
            <Text style={styles.signalDescription}>Lorem ipsum asdasdasdasdasdasasd lacus ultrices dolor diam per nostra sollicitudin rhoncus, vivamus nullam congue ut volutpat elementum.</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={item} style={styles.profile} />
          <View style={styles.signal}>
            <View style={styles.signalHeader}>
              <Text style={styles.signalName}>Obrigado</Text>
              <Feather name='heart' color='#3A4856' size={17} />
            </View>
            <Text style={styles.signalDescription}>Lorem ipsum asdasdasdasdasdasasd lacus ultrices dolor diam per nostra sollicitudin rhoncus, vivamus nullam congue ut volutpat elementum.</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={item} style={styles.profile} />
          <View style={styles.signal}>
            <View style={styles.signalHeader}>
              <Text style={styles.signalName}>Obrigado</Text>
              <Feather name='heart' color='#3A4856' size={17} />
            </View>
            <Text style={styles.signalDescription}>Lorem ipsum asdasdasdasdasdasasd lacus ultrices dolor diam per nostra sollicitudin rhoncus, vivamus nullam congue ut volutpat elementum.</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={item} style={styles.profile} />
          <View style={styles.signal}>
            <View style={styles.signalHeader}>
              <Text style={styles.signalName}>Obrigado</Text>
              <Feather name='heart' color='#3A4856' size={17} />
            </View>
            <Text style={styles.signalDescription}>Lorem ipsum asdasdasdasdasdasasd lacus ultrices dolor diam per nostra sollicitudin rhoncus, vivamus nullam congue ut volutpat elementum.</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={item} style={styles.profile} />
          <View style={styles.signal}>
            <View style={styles.signalHeader}>
              <Text style={styles.signalName}>Obrigado</Text>
              <Feather name='heart' color='#3A4856' size={17} />
            </View>
            <Text style={styles.signalDescription}>Lorem ipsum asdasdasdasdasdasasd lacus ultrices dolor diam per nostra sollicitudin rhoncus, vivamus nullam congue ut volutpat elementum.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}