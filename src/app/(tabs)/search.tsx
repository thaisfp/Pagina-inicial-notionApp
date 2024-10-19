import { colors } from "@/styles/colors";
import { Text, View } from "react-native";

export default function Search(){

    return(
      <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style ={{color: colors.white}}>Search</Text>
    </View>
    )
  }