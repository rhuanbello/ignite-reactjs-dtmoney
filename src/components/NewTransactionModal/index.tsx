import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioButton } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;

}

export function NewTransactionModal({onRequestClose, isOpen}: NewTransactionModalProps) {

  const [typeOfTransaction, setTypeOfTransaction] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();
  
    const data = {
      title, 
      value, 
      category, 
      typeOfTransaction
    };

    api.post('/transactions', data);

  }
  
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay" 
      className="react-modal-content"
    >

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <button 
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img 
            src={closeImg} 
            alt="Fechar Modal" 
          />
        </button>

        <input 
          type="text" 
          placeholder="Título" 
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="number" 
          placeholder="Valor" 
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioButton 
            type="button"
              onClick={() => {
              setTypeOfTransaction('deposit')
            }}
            isActive={typeOfTransaction === 'deposit'}
            activeColor="green"
          >
            <img 
              src={incomeImg} 
              alt="Transação de Entrada" 
            />
            <span>Entrada</span>

          </RadioButton>
          <RadioButton 
            type="button"
            onClick={() => {
              setTypeOfTransaction('withdraw')
            }}
            isActive={typeOfTransaction === 'withdraw'}
            activeColor="red"
          >
            <img 
              src={outcomeImg} 
              alt="Transação de Saída" 
            />
            <span>Saída</span>

          </RadioButton>

        </TransactionTypeContainer>

        <input 
          type="text" 
          placeholder="Categoria" 
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )

}