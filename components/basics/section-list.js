import { SectionList, View, Text, StyleSheet } from "react-native"

const data = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const CustomSectionList = () => {

  const RenderHeader = ({section}) => <Text style={styles.sectionTitle}>{section.title}</Text>;
  
  const RenderItem = ({section}) => (
    <View style={styles.card}>
      {section.data && section.data.map(i => (
          <Text style={styles.name}>
            {i}
          </Text>
        ))
      }
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
      sections={data}
      keyExtractor={(item,index) => index}
      renderSectionHeader={RenderHeader}
      renderItem={RenderItem} 
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50,
  },
  sectionTitle: {
    color: 'purple',
    marginTop: 24,
    marginBottom: 16,
    fontSize: 22,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    flexGrow: 1,
    marginLeft: 8,
  },
  name: {
    fontSize: 18,
  },
});

export default CustomSectionList;