"use client"
import { motion, AnimatePresence } from "framer-motion"
import { todoList } from "../data/todoList"
import { useTodoList } from "@/core/usecases/useTodoList"

export function TodoList() {
  const { mainList, categoryLists, moveToCategory, moveBack } =
    useTodoList(todoList)

  return (
    <div className='flex gap-4 p-4'>
      <div className='w-1/3 p-2 border border-gray-300 rounded'>
        <h2 className='text-lg font-bold'>Main List</h2>
        <AnimatePresence>
          {mainList.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => moveToCategory(item)}
              className='block p-2 mt-2 bg-gray-200 rounded w-full'
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {item.name}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {Object.entries(categoryLists).map(([type, items]) => (
        <div key={type} className='w-1/3 p-2 border border-gray-300 rounded'>
          <h2 className='text-lg font-bold'>{type}</h2>
          <AnimatePresence>
            {items.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => moveBack(item)}
                className='block p-2 mt-2 bg-blue-200 rounded w-full'
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {item.name}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
