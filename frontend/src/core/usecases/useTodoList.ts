import { useState, useRef } from "react"
import { TodoListItem } from "../entities/todoList"

export const useTodoList = (initialItems: TodoListItem[]) => {
  const [mainList, setMainList] = useState<TodoListItem[]>(initialItems)

  const uniqueTypes = Array.from(new Set(initialItems.map((item) => item.type)))
  const initialCategories = uniqueTypes.reduce<Record<string, TodoListItem[]>>(
    (acc, type) => {
      acc[type] = []
      return acc
    },
    {}
  )

  const [categoryLists, setCategoryLists] =
    useState<Record<string, TodoListItem[]>>(initialCategories)

  const timeoutRefs = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map()
  )
  const timeoutStatus = useRef<Map<string, boolean>>(new Map())

  const moveToCategory = (item: TodoListItem) => {
    setMainList((prev) => prev.filter((i) => i !== item))
    setCategoryLists((prev) => {
      const currentItems = prev[item.type] || []
      if (!currentItems.some((i) => i.name === item.name)) {
        return {
          ...prev,
          [item.type]: [...currentItems, item],
        }
      }
      return prev
    })

    if (timeoutRefs.current.has(item.name)) {
      clearTimeout(timeoutRefs.current.get(item.name)!)
      timeoutRefs.current.delete(item.name)
    }

    const timeoutId = setTimeout(() => moveBack(item), 5000)
    timeoutRefs.current.set(item.name, timeoutId)
    timeoutStatus.current.set(item.name, true)
  }

  const moveBack = (item: TodoListItem) => {
    if (timeoutRefs.current.has(item.name)) {
      clearTimeout(timeoutRefs.current.get(item.name)!)
      timeoutRefs.current.delete(item.name)
    }
    timeoutStatus.current.delete(item.name)

    setCategoryLists((prev) => ({
      ...prev,
      [item.type]: (prev[item.type] || []).filter((i) => i !== item),
    }))

    setMainList((prev) => {
      if (!prev.some((i) => i.name === item.name)) {
        return [...prev, item]
      }
      return prev
    })
  }

  return {
    mainList,
    categoryLists,
    moveToCategory,
    moveBack,
  }
}
