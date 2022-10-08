import { useState } from 'react'
import { StyleSheet, TextInput, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGloalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString()},
    ]);
  };


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your course goal here!' onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGloalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
         data ={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text = {itemData.item.text}  />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 60,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderbottomColor: '#7f7ca0'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
});
