import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);

  const containerStyle = {
    flex: 1,
    backgroundColor: theme === 'Escuro' ? '#2C2C2C' : '#F5F5F5',
  };

  const textStyle = {
    fontSize: fontSize,
    color: theme === 'Escuro' ? '#FFFFFF' : '#000000',
  };

  const sectionStyle = {
    backgroundColor: theme === 'Escuro' ? '#3B3B3B' : '#FFFFFF',
  };

  return (
    <View style={containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={[textStyle, styles.title]}>Configurações de Preferências</Text>

        {/* Tema */}
        <View style={[styles.section, sectionStyle]}>
          <Text style={[styles.sectionTitle, textStyle]}>Selecionar Tema</Text>
          <Picker
            selectedValue={theme}
            onValueChange={(itemValue) => setTheme(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Claro" value="Claro" />
            <Picker.Item label="Escuro" value="Escuro" />
            <Picker.Item label="Automático" value="Automático" />
          </Picker>
        </View>

        {/* Fonte */}
        <View style={[styles.section, sectionStyle]}>
          <Text style={[styles.sectionTitle, textStyle]}>Ajustar Tamanho da Fonte</Text>
          <Slider
            minimumValue={12}
            maximumValue={30}
            value={fontSize}
            onValueChange={(value) => setFontSize(value)}
            style={styles.slider}
            minimumTrackTintColor="#4CAF50"
            maximumTrackTintColor="#ccc"
            thumbTintColor="#4CAF50"
          />
          <Text style={[textStyle, styles.fontSizeText]}>Tamanho da Fonte: {fontSize}</Text>
        </View>

        {/* Reset */}
        <Button
          title="Resetar Preferências"
          onPress={() => {
            setTheme('Claro');
            setFontSize(16);
          }}
          color="#FF5722"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    borderRadius: 10,
    padding: 15,
    width: '100%',
    marginBottom: 20,
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    marginBottom: 10,
  },
  fontSizeText: {
    marginTop: 10,
    fontWeight: '600',
  },
});
