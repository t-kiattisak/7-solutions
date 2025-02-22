import { describe, it, expect } from "vitest"
import { groupUsersByDepartment } from "./groupUsersByDepartment"
import { User } from "../entities/user"
import { GetUsersResponse } from "../generated/user_pb"

describe("groupUsersByDepartment", () => {
  it("should group users by department and return GetUsersResponse", () => {
    const users: User[] = [
      {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        gender: "male",
        hairColor: "Brown",
        postalCode: "12345",
        department: "Engineering",
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        age: 30,
        gender: "female",
        hairColor: "Blonde",
        postalCode: "67890",
        department: "Engineering",
      },
      {
        firstName: "Bob",
        lastName: "Johnson",
        age: 35,
        gender: "male",
        hairColor: "Brown",
        postalCode: "11111",
        department: "Sales",
      },
    ]

    const result = groupUsersByDepartment(users)
    expect(result).toBeInstanceOf(GetUsersResponse)
    const departmentsMap = result.getDepartmentsMap()

    const engineering = departmentsMap.get("Engineering")
    expect(engineering?.getMale()).toBe(1)
    expect(engineering?.getFemale()).toBe(1)
    expect(engineering?.getAgerange()).toBe("25-30")
    expect(engineering?.getHairMap().get("Brown")).toBe(1)
    expect(engineering?.getHairMap().get("Blonde")).toBe(1)
    expect(engineering?.getAddressuserMap().get("JohnDoe")).toBe("12345")
    expect(engineering?.getAddressuserMap().get("JaneSmith")).toBe("67890")

    const sales = departmentsMap.get("Sales")
    expect(sales?.getMale()).toBe(1)
    expect(sales?.getFemale()).toBe(0)
    expect(sales?.getAgerange()).toBe("35-35")
    expect(sales?.getHairMap().get("Brown")).toBe(1)
    expect(sales?.getAddressuserMap().get("BobJohnson")).toBe("11111")
  })

  it("should handle empty user array", () => {
    const users: User[] = []
    const result = groupUsersByDepartment(users)

    const departmentsMap = result.getDepartmentsMap()
    expect(departmentsMap).toBeDefined()
    expect(departmentsMap.size || 0).toBe(0)
  })

  it("should handle users with the same department", () => {
    const users: User[] = [
      {
        firstName: "Alice",
        lastName: "White",
        age: 40,
        gender: "female",
        hairColor: "Black",
        postalCode: "22222",
        department: "Support",
      },
      {
        firstName: "Tom",
        lastName: "Green",
        age: 45,
        gender: "male",
        hairColor: "Black",
        postalCode: "33333",
        department: "Support",
      },
    ]

    const result = groupUsersByDepartment(users)
    const departmentsMap = result.getDepartmentsMap()

    const support = departmentsMap.get("Support")
    expect(support?.getMale()).toBe(1)
    expect(support?.getFemale()).toBe(1)
    expect(support?.getAgerange()).toBe("40-45")
    expect(support?.getHairMap().get("Black")).toBe(2)
    expect(support?.getAddressuserMap().get("AliceWhite")).toBe("22222")
    expect(support?.getAddressuserMap().get("TomGreen")).toBe("33333")
  })
})
