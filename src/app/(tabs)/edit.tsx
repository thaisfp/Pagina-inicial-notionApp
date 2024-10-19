import { Text, View } from "react-native";
import { colors } from "@/styles/colors";

export default function Index(){

    return(
      <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style ={{color: colors.white}}>EDIT</Text>
      </View>
    )
  }