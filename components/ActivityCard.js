import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const STATUS_CONFIG = {
  'Concluído': {
    color: '#16a34a',
    bg: '#dcfce7',
    icon: '✅',
  },
  'Pendente': {
    color: '#ca8a04',
    bg: '#fef9c3',
    icon: '⏳',
  },
  'Não Concluído': {
    color: '#dc2626',
    bg: '#fee2e2',
    icon: '❌',
  },
};

export default function ActivityCard({ title, description, status, aniversario, isSelected, onPress }) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG['Pendente'];

  return (
    <Pressable onPress={onPress}>
      <View style={[
        styles.card,
        isSelected && styles.selectedCard
      ]}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{title}</Text>
          <View style={[styles.badge, { backgroundColor: config.bg }]}>
            <Text style={[styles.badgeText, { color: config.color }]}>
              {config.icon} {status}
            </Text>
          </View>
        </View>

        <Text style={styles.description}>{description}</Text>

        <View style={[styles.indicator, { backgroundColor: config.color }]} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 18,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    width: 140
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
    gap: 8,
    flexWrap: 'wrap',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#111',
    flex: 1,
  },
  description: {
    color: '#555',
    fontSize: 14,
    lineHeight: 20,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    fontWeight: '600',
    fontSize: 12,
  },
  indicator: {
    width: 5,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },
  selectedCard: {
  transform: [{ scale: 1.03 }],
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.25,
  shadowRadius: 10,
  borderWidth: 2,
  borderColor: '#1d4ed8',
},
});