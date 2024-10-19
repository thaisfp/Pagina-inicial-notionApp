import { View, Text, FlatList } from "react-native";
import { Page } from "../page";
import { s } from "./style";
import { Recent } from "../recent";

type Props = {
  data: {
    id: string;
    title: string;
    cover?: string;
  }[];
};
export function RecentList({ data }: Props) {
  return (
    <View>
      <Text style={s.title}>Recentes</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Recent data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.content}
      />
    </View>
  );
}
