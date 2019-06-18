import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  AppLoading,
  Asset,
  Font,
} from 'expo';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import AppNavigator from './navigation/AppNavigator';

const restLink = new RestLink({
  uri: "https://swapi.co/api/"
});
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
});

interface Props {
  skipLoadingScreen: boolean;
}

interface States {
  isLoadingComplete: boolean;
}

export default class App extends React.Component<Props, States> {
  public state = {
    isLoadingComplete: false,
  };

  private loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        // todo
      ]),
      Font.loadAsync({
        // todo
      }),
    ]);
  }

  private handleLoadingError = () => {
    // todo
  }

  private handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  }

  public render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;
    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          {/* {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />} */}
          <AppNavigator />
        </View>
      </ApolloProvider>
    );
  }
}
