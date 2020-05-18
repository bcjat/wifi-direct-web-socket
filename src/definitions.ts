declare module "@capacitor/core" {
  interface PluginRegistry {
    WifiDirectWebSocket: WifiDirectWebSocketPlugin;
  }
}

export interface WifiDirectWebSocketPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
