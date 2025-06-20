'use client';

import React from 'react';
import { FuelProvider as FuelReactProvider } from '@fuels/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { defaultConnectors } from '@fuels/connectors';

const queryClient = new QueryClient();

const fuelConfig = {
  chains: [
    {
      name: 'Fuel Testnet',
      id: '0',
      url: 'https://beta-5.fuel.network/graphql',
    },
  ],
  connectors: defaultConnectors({
    devMode: process.env.NODE_ENV === 'development',
  }),
};

export function FuelProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <FuelReactProvider fuelConfig={fuelConfig}>
        {children}
      </FuelReactProvider>
    </QueryClientProvider>
  );
} 