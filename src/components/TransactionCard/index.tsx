import React from "react";

import  {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from './styles'

interface Category {
  name: string;
  icon: string;
}

interface Props {
  data: {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: Category;
    date: string;
  }
}

export function TransactionCard({ data } : Props){
  return(
    <Container>
      <Title>{data.title}</Title>

      <Amount>{data.amount}</Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon}/>
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}