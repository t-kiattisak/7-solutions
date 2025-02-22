import { act, renderHook } from "@testing-library/react"
import { useTodoList } from "./useTodoList"
import { vi, describe } from "vitest"
import { TodoListItem } from "../entities/todoList"

describe("useTodoList", () => {
  const initialItems: TodoListItem[] = [
    { name: "Apple", type: "Fruit" },
    { name: "Broccoli", type: "Vegetable" },
  ]

  it("should move item to category and remove from main list", () => {
    const { result } = renderHook(() => useTodoList(initialItems))

    act(() => {
      result.current.moveToCategory(initialItems[0])
    })

    expect(result.current.mainList).toHaveLength(1)
    expect(result.current.categoryLists["Fruit"]).toHaveLength(1)
  })

  it("should move item back to main list after 5 seconds", () => {
    vi.useFakeTimers()
    const { result } = renderHook(() => useTodoList(initialItems))

    act(() => {
      result.current.moveToCategory(initialItems[0])
    })

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(result.current.mainList).toHaveLength(2)
    expect(result.current.categoryLists["Fruit"]).toHaveLength(0)
  })

  it("should not add item twice if clicked multiple times quickly", () => {
    const { result } = renderHook(() => useTodoList(initialItems))

    act(() => {
      result.current.moveToCategory(initialItems[0])
      result.current.moveToCategory(initialItems[0])
    })

    expect(result.current.categoryLists["Fruit"]).toHaveLength(1)
  })
})
