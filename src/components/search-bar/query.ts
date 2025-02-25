import { create } from "zustand";

type Query = {
  query: string;
  setQuery: (newQuery:string) => void;
};

export const useQueryStore = create<Query>((set) => ({
    query: "",
    setQuery: (newQuery: string) => set(()=>({ query: newQuery })),
  }));

