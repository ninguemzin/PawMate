import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function Cadastro() {
  const [nomePet, setNomePet] = useState("");
  const [raca, setRaca] = useState("");
  const [genero, setGenero] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [idade, setIdade] = useState("");
  const [fotos, setFotos] = useState(Array.from({ length: 5 }, () => ""));

  const handleContinue = () => {
    // Lógica para continuar com o cadastro
    console.log("Informações do pet:", { nomePet, raca, genero, tamanho, idade, fotos });
  };

  const handleAddPhoto = (index, photoUrl) => {
    const updatedFotos = [...fotos];
    updatedFotos[index] = photoUrl;
    setFotos(updatedFotos);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Fale sobre seu pet</Text>
          <Text style={styles.subtitle}>Por favor adicione fotos de seu pet.</Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nome do Pet *"
              onChangeText={setNomePet}
              value={nomePet}
              placeholderTextColor="#4B768A"
            />
            <TextInput
              style={styles.input}
              placeholder="Raça *"
              onChangeText={setRaca}
              value={raca}
              placeholderTextColor="#4B768A"
            />
            <TextInput
              style={styles.input}
              placeholder="Gênero *"
              onChangeText={setGenero}
              value={genero}
              placeholderTextColor="#4B768A"
            />
            <TextInput
              style={styles.input}
              placeholder="Tamanho *"
              onChangeText={setTamanho}
              value={tamanho}
              placeholderTextColor="#4B768A"
            />
            <TextInput
              style={styles.input}
              placeholder="Idade *"
              onChangeText={setIdade}
              value={idade}
              placeholderTextColor="#4B768A"
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.photoTitle}>Adicione fotos do seu pet:</Text>
          <View style={styles.photosContainer}>
            {fotos.map((photo, index) => (
              <TouchableOpacity
                key={index}
                style={styles.photoButton}
                onPress={() => handleAddPhoto(index, "URL_DA_IMAGEM")}
              >
                <Text style={styles.photoButtonText}>Foto {index + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    paddingBottom: 80, // Espaço para o botão de continuar
  },
  topContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#06285B",
  },
  subtitle: {
    color: "#06285B",
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#4B768A',
    borderWidth: 1,
    borderColor: '#4B768A',
  },
  button: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#06285B",
    paddingVertical: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  photoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#06285B",
  },
  photosContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  photoButton: {
    backgroundColor: "#4B768A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: "45%",
  },
  photoButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
