import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function New() {
  return (
    <View style={styles.container}>
      <View style={styles.new}>
        <View style={styles.newHeader}>
          <Text style={styles.newTitle}>Novo sinal</Text>
          <TouchableOpacity>
            <Text style={styles.textSend}>Enviar</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder='Nome do sinal'
          placeholderTextColor='#B2B2B2'
        />
        <TextInput
          style={styles.textarea}
          multiline={true}
          numberOfLines={5}
          placeholder='Contexto ou história de onde surgiu ou originou o sinal...'
          placeholderTextColor='#B2B2B2'
        />
      </View>
      <View style={styles.data}>
        <Feather name='camera' size={60} color='#3A4856' />
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}