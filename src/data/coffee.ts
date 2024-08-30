import expresso from '../assets/Expresso.png'

type Tag = 'tradicional' | 'especial' | 'com leite' | 'alcoólico' | 'gelado'

type Coffee = {
  id: number;
  name: string;
  tag: Tag[];
  description: string;
  image: string;
  price: number;
}

export const coffees: Coffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    tag: ['tradicional'],
    description: 'O tradicional café feito com café quente e grãos moídos',
    image: expresso,
    price: 9.90,
  },
]