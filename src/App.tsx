import {Header} from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from "react-modal";

import {GlobalStyle} from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

//Para questão de acessibilidade
Modal.setAppElement('#root');

export function App() {
  const [modalNewTransactionIsOpen, setIsNewTransactionModalOpen] = useState(false);  

  function handleOpenModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <GlobalStyle />   
      <Header onOpenNewTransactionModal={handleOpenModal}/>
      <NewTransactionModal 
        isOpen={modalNewTransactionIsOpen}
        onRequestClose={handleCloseModal}
      />      
      <Dashboard />  
    </TransactionsProvider>
  )
}