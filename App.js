import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import ActivityCard from './components/ActivityCard';

export default function App() {
  const activitiesLeft = [
    {
      title: 'Redes',
      description: 'Sistema de Rede IOT no Packet Tracer.',
      status: 'Pendente',
    },
    {
      title: 'Química',
      description: '90 Questões de Química Orgânica.',
      status: 'Não Concluído',
    },
    {
      title: 'Desenvolvimento Mobile',
      description: 'Criação de um APP em React Native.',
      status: 'Concluído',
    },
  ];

  const activitiesRight = [
    {
      title: 'Matemática',
      description: 'Lista de exercícios de estática.',
      status: 'Pendente',
    },
    {
      title: 'Português',
      description: 'Redação dissertativa-argumentativa.',
      status: 'Concluído',
    },
    {
      title: 'Análise e Programação',
      description: 'Projeto de algoritmos em Python.',
      status: 'Concluído',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header title="Sigaa 3.0" />

      <ProfileCard
        name="Arthur Abreu"
        course="Técnico em Informática"
        turma="3º Ano"
        aniversario="19/01/2009"
      />

      <Text style={styles.sectionTitle}>Minhas Atividades:</Text>

      <View style={styles.colunas}>
        <View style={styles.activities}>
          {activitiesLeft.map((item, index) => (
            <ActivityCard
              key={`left-${index}`}
              {...item}
              isSelected={selectedIndex === `left-${index}`}
              onPress={() => setSelectedIndex(`left-${index}`)}
            />
          ))}
        </View>

        <View style={styles.activities}>
          {activitiesRight.map((item, index) => (
            <ActivityCard
              key={`right-${index}`}
              {...item}
              isSelected={selectedIndex === `right-${index}`}
              onPress={() => setSelectedIndex(`right-${index}`)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ccff',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  activities: {
    flex: 1,
    paddingHorizontal: 4,
    paddingBottom: 32,
    gap: 16,
  colunas: {
    flexDirection: 'row',
    gap: 2,
    paddingHorizontal: 8,
  },
});