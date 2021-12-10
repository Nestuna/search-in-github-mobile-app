import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({});

  async function search() {
    try {
      const response = await fetch(`http://localhost:4242/api/users/${username}`);
      const user_response = await response.json();
      if (user_response) {
        setUser(user_response.data.user);
      } else {
        setUser({ login: 'Not found', url: '', public_repos: '', followers: '' })
      }
    } catch (error) {
      setUser({ login: 'Not found', url: '', public_repos: '', followers: '' })
    }
  }

  const showUser = () => {
    if (user.login) {
      if(user.login === 'Not found') {
        return(
          <View style={ [styles.result_container, styles.error_container] }>
            <Text style={[styles.result_title, styles.error_title]}>{ user.login }</Text>
          </View>
        )
      }

      return (
        <View style={styles.result_container}>
          <Text style={styles.result_title}>{ user.login }</Text>
          <Text style={styles.result_content}><Text style={{fontWeight: 'bold'}}>Repos':</Text> {user.public_repos}</Text>
          <Text style={styles.result_content}><Text style={{fontWeight: 'bold'}}>Followers:</Text> {user.followers}</Text>
          <Text style={styles.result_content}><Text style={{fontWeight: 'bold'}}>Link:</Text> {user.url}</Text>
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      <View style={ styles.text_input_container}>
        <TextInput
          onChangeText={setUsername}
          value={username}
          style={{height: '40%', width: '70%'}}
        />
        <View style={{width: '70%'}}>
          <Button
            onPress={search}
            title="Search"
            color="#1c73bf"
          />
        </View>
      </View>
      <View style={styles.content_container}>
        { showUser()}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  text_input_container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  content_container: {
    flex: 7,
    width: '100%',
    alignItems: 'center'
  },
  result_container: {
    padding: '5%',
    width: '90%',
    backgroundColor: '#e4eef7',
    borderRadius: '1.5%'
  },
  error_container: {
    backgroundColor: '#f4bec5',
  },
  error_title: {
    color: "red"
  },
  result_title : {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#09439b"
  }
});
