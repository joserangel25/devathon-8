import { create } from "zustand";
import type { IReindeer } from "../interface/reindeer";
import { REINDEERS } from "../const/reindeers";

interface IReindeerStore {
  reindeersList: IReindeer[],
  leftAlingment: IReindeer[],
  rightAlingment: IReindeer[],
  setReindeersList: (reindeersList: IReindeer[]) => void
}

export const useReindeerStore = create<IReindeerStore>((set) => ({
  reindeersList: REINDEERS,
  leftAlingment: [],
  rightAlingment: [],
  setReindeersList: (reindeersList: IReindeer[]) => {
    set({ reindeersList })
  }
}))