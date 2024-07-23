import { useState, useEffect } from 'react';
import { PetraWallet, PetraWalletName } from 'petra-plugin-wallet-adapter';
import { useWallet, WalletProvider } from '@aptos-labs/wallet-adapter-react';
import BgImage from "./components/BgImage";
import Ques from "./Ques";

const customWallets = [new PetraWallet()];

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const { connect, connected, account } = useWallet();

  const handleButtonClick = async () => {
    try {
      await connect();
      setShowMain(true);
      console.log("Wallet connected");
    } catch (err) {
      console.error("Failed to connect wallet", err);
    }
  };

  useEffect(() => {
    if (connected) {
      setShowMain(true);
    }
  }, [connected]);

  return (
    <WalletProvider wallets={customWallets} autoConnect={true}>
      <main>
        <BgImage imageUrl="./stage.jpeg" />

        {showMain ? (
          <Ques account={account} />
        ) : (
          <button onClick={handleButtonClick} className='centered-button'>
            Connect to Wallet
          </button>
        )}
      </main>
    </WalletProvider>
  );
}
