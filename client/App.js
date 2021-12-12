import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , Image} from 'react-native';
import * as Linking from 'expo-linking';

import config from './config.json'


export default function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({});

  async function search() {
    try {
      const response = await fetch(`${config.API_URL}/${username}`);
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
          <View style={styles.avatar_container}>
            <Image
              style={styles.avatar}
              source={
                {uri: user.avatar_url}
              }
            />
             <Text style={styles.result_title}>{ user.login }</Text>
          </View>
          <Text style={styles.result_content}><Text style={styles.result_titles}>Repos':</Text> {user.public_repos}</Text>
          <Text style={styles.result_content}><Text style={styles.result_titles}>Followers:</Text> {user.followers}</Text>
          <Text style={styles.result_content}>
            <Text style={[styles.result_titles, {textAlign: 'right'}]} onPress={() => Linking.openURL(user.html_url)}>Go to github page</Text>
          </Text>
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
          style={{height: '50%', width: '70%', backgroundColor: '#EEE'}}
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
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_input_container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  content_container: {
    flex: 6,
    width: '100%',
    alignItems: 'center'
  },
  result_container: {
    padding: '5%',
    width: '90%',
    backgroundColor: '#e4eef7',
    borderRadius: 5
  },
  result_titles: {
    fontWeight: 'bold'
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
  },
  avatar_container: {
    alignItems: 'center',
  },
  avatar: {
    height: 100,
    width: 100,
    textAlign: 'center',
    borderRadius: 50
  }
});
