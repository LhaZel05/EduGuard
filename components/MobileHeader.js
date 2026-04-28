import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MobileHeader = ({ title, onBackPress, onMenuPress }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#fff', elevation: 3 }}>
      <TouchableOpacity onPress={onBackPress} style={{ marginRight: 10 }}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onMenuPress} style={{ marginRight: 10 }}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
};

export default MobileHeader;