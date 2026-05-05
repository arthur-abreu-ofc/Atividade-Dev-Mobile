import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileCard({ name, course, turma, aniversario }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <View style={styles.card}>
    <Image source={{ uri: 'https://i.pinimg.com/736x/b3/33/b9/b333b9da782cb6874da5002f185a80ce.jpg' }} style={styles.avatar}/>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.course}>{course}</Text>
        <Text style={styles.turma}>Turma: {turma}</Text>
        <Text style={styles.aniversario}>Data de Nascimento: {aniversario}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e40af',
    margin: 16,
    padding: 18,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  avatar: {
    width: 56,
    height: 56,
    backgroundColor: '#bfdbfe',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#fff',
  },
  course: {
    color: '#bfdbfe',
    fontSize: 13,
    marginTop: 2,
  },
  turma: {
    color: '#93c5fd',
    fontSize: 12,
    marginTop: 2,
  },
  aniversario: {
    color: '#93c5fd',
    fontSize: 12,
    marginTop: 2,  
  },
});