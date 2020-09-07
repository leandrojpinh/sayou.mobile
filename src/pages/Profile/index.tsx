import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

import profile from '../../assets/images/profile.png';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileHeader}>
          <Text style={styles.profileTitle}>Perfil</Text>
          <TouchableOpacity>
            <Feather name='log-out' size={18} color='#F5FAF9' />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.user}>
          <Image source={profile} style={styles.profileImage} />
          <Text style={styles.username}>Usuário 1</Text>
          <Text style={styles.profileType}>Professora</Text>
        </View>
        <View style={styles.dashboard}>
          <View style={styles.dashboardContainer}>
            <Text style={[styles.dashboardText, { color: '#008BC9' }]}>Envios</Text>
            <Text style={[styles.dashboardValue, { color: '#008BC9' }]}>9</Text>
          </View>
          <View style={styles.dashboardContainer}>
            <Text style={[styles.dashboardText, { color: '#14BA9C' }]}>Envios</Text>
            <Text style={[styles.dashboardValue, { color: '#14BA9C' }]}>9</Text>
          </View>
          <View style={styles.dashboardContainer}>
            <Text style={[styles.dashboardText, { color: '#E69C24' }]}>Envios</Text>
            <Text style={[styles.dashboardValue, { color: '#E69C24' }]}>9</Text>
          </View>
        </View>
      </ScrollView> 
    </View>
  )
}