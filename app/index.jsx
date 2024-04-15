import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full flex-1 justify-center items-center">
      <Text className="text-3xl font-pblack">Main</Text>
    </SafeAreaView>
  );
}
