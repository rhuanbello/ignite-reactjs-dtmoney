import LogoApp from '../../assets/logo.svg';
import { Container, Content } from './styles';
import { useState } from 'react';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;

}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

  console.log('que isso?', onOpenNewTransactionModal)

  return (
    <Container>
      <Content>
        <img 
          src={LogoApp} 
          alt="dt money" 
        />
        <button 
          type="button"
          onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>


      </Content>
    </Container>
  )

}