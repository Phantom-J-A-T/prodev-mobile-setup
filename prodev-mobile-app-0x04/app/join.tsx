import { FACEBOOKLOGO, GOOGLELOGO } from "@/constants";
import { styles } from "@/styles/_joinstyle";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Top navigation */}
        <View style={styles.iconsection}>
          <Ionicons
            name="arrow-back"
            size={25}
            onPress={() => router.back()}
          />
        </View>

        {/* Title section */}
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Create</Text>
          <Text style={styles.titleText}>Account</Text>
          <Text style={styles.subText}>
            Enter your details to create an account.
          </Text>
        </View>

        {/* Form */}
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.formControl}
            />
          </View>

          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
                secureTextEntry
                style={styles.passwordControl}
              />
              <FontAwesome
                name="eye-slash"
                size={22}
                color="#7E7B7B"
              />
            </View>
          </View>
        </View>

        {/* Primary button */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        {/* Social buttons */}
        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={GOOGLELOGO} />
            <Text style={styles.secondaryButtonText}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} />
            <Text style={styles.secondaryButtonText}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bottom text */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>
            Already have an account?
          </Text>
          <Text
            style={styles.signupSubTitleText}
            onPress={() => router.push("/sign")}
          >
            Sign in
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}