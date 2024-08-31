import expresso from '../assets/Expresso.png'
import americano from '../assets/Americano.png'
import cremoso from '../assets/Expresso Cremoso.png'
import gelado from '../assets/Café Gelado.png'
import comLeite from '../assets/Café com Leite.png'
import latte from '../assets/Latte.png'
import capuccino from '../assets/Capuccino.png'
import macchiato from '../assets/Macchiato.png'
import mocaccino from '../assets/Mochaccino.png'
import chocolate from '../assets/Chocolate Quente.png'
import cubano from '../assets/Cubano.png'
import havaiano from '../assets/Havaiano.png'
import arabe from '../assets/Árabe.png'
import irlandes from '../assets/Irlandês.png'

type Tag = 'tradicional' | 'especial' | 'com leite' | 'alcoólico' | 'gelado'

export type Coffee = {
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
  {
    id: 2,
    name: 'Expresso Americano',
    tag: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: americano,
    price: 9.90,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    tag: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    image: cremoso,
    price: 9.90,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    tag: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: gelado,
    price: 9.90,
  },
  {
    id: 5,
    name: 'Café com Leite',
    tag: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: comLeite,
    price: 9.90,
  },
  {
    id: 6,
    name: 'Latte',
    tag: ['tradicional', 'com leite'],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: latte,
    price: 9.90,
  },
  {
    id: 7,
    name: 'Capuccino',
    tag: ['tradicional', 'com leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: capuccino,
    price: 9.90,
  },
  {
    id: 8,
    name: 'Macchiato',
    tag: ['tradicional', 'com leite'],
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    image: macchiato,
    price: 9.90,
  },
  {
    id: 9,
    name: 'Mocaccino',
    tag: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: mocaccino,
    price: 9.90,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    tag: ['tradicional', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: chocolate,
    price: 9.90,
  },
  {
    id: 11,
    name: 'Cubano',
    tag: ['especial', 'alcoólico', 'gelado'],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: cubano,
    price: 9.90,
  },
  {
    id: 12,
    name: 'Havaiano',
    tag: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: havaiano,
    price: 9.90,
  },
  {
    id: 13,
    name: 'Árabe',
    tag: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabe,
    price: 9.90,
  },
  {
    id: 14,
    name: 'Irlandês',
    tag: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: irlandes,
    price: 9.90,
  }
]