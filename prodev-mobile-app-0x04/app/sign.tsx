import { styles } from "@/styles/_joinstyle";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Header Section */}
        <View style={styles.iconsection}>
          <Ionicons
            name="arrow-back"
            size={25}
            onPress={() => router.back()}
          />
        </View>

        {/* Title Section */}
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Sign in to your</Text>
          <Text style={styles.titleText}>Account</Text>
          <Text style={styles.subText}>
            Enter your email and password to sign in.
          </Text>
        </View>

        {/* FORM SECTION */}
        <View style={styles.formGroup}>
          {/* Email Input */}
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              style={styles.formControl}
              placeholder="example@mail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
                style={styles.passwordControl}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!isPasswordVisible}
              />
              <Ionicons
                name={isPasswordVisible ? "eye-off" : "eye"}
                size={20}
                color="#7B7B7B"
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            </View>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity onPress={() => console.log("Forgot Password clicked")}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Sign In Button */}
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Signup Link */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Don’t have an account? </Text>
          <Text
            style={styles.signupSubTitleText}
            onPress={() => router.push("/join")}
          >
            Join now
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}