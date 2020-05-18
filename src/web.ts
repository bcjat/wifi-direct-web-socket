import { WebPlugin } from '@capacitor/core';
import { WifiDirectWebSocketPlugin } from './definitions';

export class WifiDirectWebSocketWeb extends WebPlugin implements WifiDirectWebSocketPlugin {
  constructor() {
    super({
      name: 'WifiDirectWebSocket',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const WifiDirectWebSocket = new WifiDirectWebSocketWeb();

export { WifiDirectWebSocket };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(WifiDirectWebSocket);
