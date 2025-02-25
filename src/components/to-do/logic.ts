import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type ToDos = {
    todo: { id: number, value: string }[]
    addTodo: (id: number, value: string) => void;
    updateTodo: (id: number, value: string) => void;
    removeTodo: (id: number) => void;
}

export const useToDoStore = create<ToDos>()(
    persist(
        (set) => ({
            todo: [],
            addTodo: (newId, value) => set((state) => ({
                ...state,
                todo: [...state.todo, { id: newId, value }]
            })),
            updateTodo: (id, value) => set((state) => ({
                ...state,
                todo: state.todo.map(todo => todo.id === id ? { ...todo, value } : todo)
            })),
            removeTodo: (id) => set((state) => ({
                ...state,
                todo: state.todo.filter(todo => todo.id !== id)
            }))
        }),
        {
            name: 'todo-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        },
    ),
)