import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native';

import styles from './styles';

import avatar from '../../assets/images/avatar.png';
import classIcon from '../../assets/images/class.png';

export default function Rating() {
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <View style={styles.ratingHeader}>
          <Text style={styles.ratingTitle}>Avaliações</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.new}>
          <Text style={styles.newTitle}>Novo</Text>
          <View style={styles.ratingItem}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.feedback}>
              <Text style={styles.newFeedbackText}><Text style={styles.newUserText}>Usuario</Text> aprovou o sinal que você enviou.</Text>
              <Text style={styles.newFeedbackText}>Muito legal, vou apresentar para a minha turma.</Text>
              <Text style={styles.feedbackTime}>10 min</Text>
            </View>
            <Image source={classIcon} style={styles.classIcon} />
          </View>
        </View>
        <View style={styles.viewed}>
          <Text style={styles.viewedTitle}>Aprovadas</Text>
          <View style={styles.ratingItem}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.feedback}>
              <Text style={styles.viewedFeedbackText}><Text style={styles.viewedUserText}>Usuario</Text> aprovou o sinal que você enviou.</Text>
              <Text style={styles.viewedFeedbackText}>Muito legal, vou apresentar para a minha turma.</Text>
              <Text style={styles.feedbackTime}>10 min</Text>
            </View>
            <Image source={classIcon} style={styles.classIcon} />
          </View>
          <View style={styles.ratingItem}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.feedback}>
              <Text style={styles.viewedFeedbackText}><Text style={styles.viewedUserText}>Usuario</Text> aprovou o sinal que você enviou.</Text>
              <Text style={styles.viewedFeedbackText}>Muito legal, vou apresentar para a minha turma.</Text>
              <Text style={styles.feedbackTime}>10 min</Text>
            </View>
            <Image source={classIcon} style={styles.classIcon} />
          </View>
        </View>
        <View style={styles.viewed}>
        <Text style={styles.viewedTitle}>Reprovadas</Text>
          <View style={styles.ratingItem}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.feedback}>
              <Text style={styles.viewedFeedbackText}><Text style={styles.viewedUserText}>Usuario</Text> aprovou o sinal que você enviou.</Text>
              <Text style={styles.viewedFeedbackText}>Muito legal, vou apresentar para a minha turma.</Text>
              <Text style={styles.feedbackTime}>10 min</Text>
            </View>
            <Image source={classIcon} style={styles.classIcon} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}