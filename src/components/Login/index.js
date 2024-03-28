import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from "react-native"; // Importe o componente Image

import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleSignUp = () => {
    // Aqui você pode adicionar a navegação para a tela de cadastro
    console.log("Redirecionar para a tela de cadastro");
  };

  return (
    <LinearGradient
      colors={['#4B768A', '#06285B']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.overlay}>
        {/* Adicione o componente Image para a sua logo */}
        <Image source={require('../../../assets/OIG4.png')} style={styles.logo} />
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}>Não tem cadastro? Cadastre-se aqui</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
   width: "100%",
   height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 300, // Ajuste conforme desejado
    height: 300, // Ajuste conforme desejado
    resizeMode: 'contain', // Mantém a proporção da imagem

  },
  
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "black",
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  signUpText: {
    marginTop: 20,
    color: "white",
  },
});
