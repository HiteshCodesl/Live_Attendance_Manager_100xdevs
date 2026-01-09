import "ws"

declare module "ws" {
  interface WebSocket {
    user?: {
      userId: string;
      role: string;
    };
  }
}

export {};