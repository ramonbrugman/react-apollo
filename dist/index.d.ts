import type { ApolloClient } from '@apollo/client';
import type { WebSocketLink } from 'apollo-link-ws';

export function generateApolloClient(
  auth?: any,
  gqlEndpoint: string,
  headers?: {
    [key: string]: any;
  },
  publicRole?: string,
  cache?: any,
): {
  client: ApolloClient;
  wsLink: WebSocketLink | null;
};

export function NhostApolloProvider(
  auth: any,
  gqlEndpoint: string,
  headers?: {
    [key: string]: any;
  },
  publicRole?: string,
  cache?: any,
): JSX.Element;
