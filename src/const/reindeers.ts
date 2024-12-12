import { IReindeer } from "../interface/reindeer";

export const REINDEERS_LIST = [
  {
    id: 1,
    name: "Rudolph",
    description: "Tiene una brillante nariz roja.",
    hability: "Liderazgo",
    specializingIn: "Niebla densa",
  },
  {
    id: 2,
    name: "Dasher",
    description: "El más rápido de todos.",
    hability: "Velocidad",
    specializingIn: "Cielos despejados",
  },
  {
    id: 3,
    name: "Dancer",
    description: "Le encanta bailar mientras vuela.",
    hability: "Agilidad",
    specializingIn: "Festejos navideños",
  },
  {
    id: 4,
    name: "Prancer",
    description: "Siempre vuela con gracia.",
    hability: "Elegancia",
    specializingIn: "Veladas tranquilas",
  },
  {
    id: 5,
    name: "Vixen",
    description: "Muy juguetona y astuta.",
    hability: "Astucia",
    specializingIn: "Noches estrelladas",
  },
  {
    id: 6,
    name: "Comet",
    description: "Lleva alegría a todos.",
    hability: "Entusiasmo",
    specializingIn: "Nieve ligera",
  },
  {
    id: 7,
    name: "Blitzen",
    description: "Siempre electriza el ambiente.",
    hability: "Energía",
    specializingIn: "Tormentas eléctricas"
  },
  {
    id: 8,
    name: "Donner",
    description: "Tiene un potente rugido.",
    hability: "Fuerza",
    specializingIn: "Viento fuerte",
  }
];

export const REINDEERS: IReindeer[] = [
  {
    id: 1,
    name: 'Rudolf',
  },
  {
    id: 2,
    name: 'Prancer',
  },
  {
    id: 3,
    name: 'Vixen',
  },
  {
    id: 4,
    name: 'Blitzen',
  },
  {
    id: 5,
    name: 'Dasher'
  },
  {
    id: 6,
    name: 'Comet'
  },
  {
    id: 7,
    name: 'Donner'
  },
  {
    id: 8,
    name: 'Dancer'
  },
]

export const ALIGNMENTS = [
  {
    id: 1,
    name: "Para mucha nieve",
    left: ["Comet", "Prancer", "Vixen", "Blitzen"],
    right: ["Dasher", "Rudolf", "Donner", "Dancer"]
  },
  {
    id: 2,
    name: "Más rapidez",
    left: ["Rudolf", "Prancer", "Vixen", "Dasher"],
    right: ["Blitzen", "Comet", "Donner", "Dancer"]
  },
  // {
  //   id: 3,
  //   name: "Más rapidez",
  //   left: ["Rudolf", "Prancer", "Vixen", "Dasher"],
  //   right: ["Blitzen", "Comet", "Donner", "Dancer"]
  // }
]