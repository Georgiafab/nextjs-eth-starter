// "use client";
import type { AppProps } from "next/app";
import {
  getDefaultConfig,
  RainbowKitProvider,
  Chain
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from "wagmi";
import { QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";
import { config, queryClient } from '@/config/walletConnect';

import "@/style/globals.css";

// import Header from "@/components/Header";

//@ts-ignores
// import { NotificationProvider } from "@web3uikit/core";

// const infuraApiKey = process.env.NEXT_PUBLIC_INFURA_API_KEY!;


export default function Home({ Component, pageProps }: AppProps) {
  return (
    <div>


      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            {/* <Header></Header>; */}
            <Component {...pageProps} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div >
  );
}
