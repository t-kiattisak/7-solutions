import { describe, it, expect } from "vitest"
import { getUsers } from "./getUsers"

describe("getUsers", () => {
  it("should return correct user data", async () => {
    const result = await getUsers()
    expect(result).toBeDefined()

    const departmentsMap = result.getDepartmentsMap()
    expect(departmentsMap.has("Engineering")).toBe(true)
    expect(departmentsMap.get("Engineering")?.getMale()).toBeGreaterThanOrEqual(
      0
    )
  })
})
