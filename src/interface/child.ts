

export interface IChild {
  name: string;
  characteristics: ICharacteristic[]
  idChild?: number
  classification?: string
}

export interface IChildPost {
  name: string;
  bondad: number;
  respeto: number;
  paciencia: number,
  esfuerzo: number,
  trabajoEnEquipo: number
}

export interface ICharacteristic {
  name: Characteristics;
  value: RangeCharacteristics;
}

type Characteristics = 'bondad' | 'paciencia' | 'respeto' | 'esfuerzo' | 'trabajo en equipo'
export type RangeCharacteristics = 0 | 1 | 2 | 3 | 4 | 5

