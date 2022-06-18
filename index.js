import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {NativeBaseProvider, Box} from 'native-base';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider, focusManager} from 'react-query';
import {store} from './store/store';
import App from './App';
import 'react-native-gesture-handler';
import {useAppState} from './hooks/useAppState';
import {useOnlineManager} from './hooks/useOnlineManager';
function onAppStateChange(status) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

export default function Main() {
  useOnlineManager();

  useAppState(onAppStateChange);
  return (
    <React.StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NativeBaseProvider>
            <App />
          </NativeBaseProvider>
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  );
}

AppRegistry.registerComponent(appName, () => Main);
