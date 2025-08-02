import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";

export default function ProfileScreen() {
  const toggleHadOnboarded = useUserStore((state) => state.toggleHadOnboarded);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Button title="Back to Onboarding" onPress={toggleHadOnboarded} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
