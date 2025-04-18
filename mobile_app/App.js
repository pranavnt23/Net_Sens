import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { checkNetwork } from './utils/networkCheck';
import { syncContacts } from './services/syncService';
import contacts from './data/contacts';

const App = () => {
  useEffect(() => {
    const init = async () => {
      const isSafe = await checkNetwork();
      if (isSafe) {
        await syncContacts(contacts);
      } else {
        console.log('Network unsafe. Sync postponed.');
      }
    };
    init();
  }, []);

  return (
    <View>
      <Text>📡 Contact Sync App</Text>
    </View>
  );
};

export default App;
