import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransactions } from "../../hooks/useTransactions";


import {
  ContainerForm,
  TransactionTypeContainer,
  TransactionButtonRadioBox,
} from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const {createTransaction} = useTransactions();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();    

    await createTransaction({
      title: name,
      amount,
      type,
      category,
    })

    setName('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Nova transação"
      overlayClassName="modal-overlay"
      className="react-modal-content"
    >
      <button type="button">
        <img
          src={closeImg}
          alt="Fechar Transação"
          onClick={onRequestClose}
          className="react-modal-close"
        />
      </button>
      <ContainerForm onSubmit={handleCreateNewTransaction}>
        <h2>Nova transação</h2>
        <input
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(event.target.valueAsNumber)}
        />

        <TransactionTypeContainer>
          <TransactionButtonRadioBox
            type="button"
            isActive={type === "deposit"}
            onClick={() => {
              setType("deposit");
            }}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </TransactionButtonRadioBox>
          <TransactionButtonRadioBox
            type="button"
            isActive={type === "withdraw"}
            onClick={() => {
              setType("withdraw");
            }}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </TransactionButtonRadioBox>
        </TransactionTypeContainer>

        <input
          type="textarea"
          placeholder="Descrição"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </ContainerForm>
    </Modal>
  );
}