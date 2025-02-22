import { describe, it, expect, vi, Mock } from "vitest"
import { getUsers } from "./getUsers"
import { createUserGrpcClient } from "@/infrastructure/grpcClients/createUserGrpcClient"

vi.mock("@/infrastructure/grpcClients/createUserGrpcClient")

describe("getUsers", () => {
  it("should return users correctly", async () => {
    const mockUsers = {
      Engineering: {
        male: 2,
        female: 2,
        ageRange: "26-40",
        hair: {
          Brown: 1,
          White: 1,
          Red: 1,
          Gray: 1,
        },
        addressUser: {
          EmilyJohnson: "29112",
          AlexanderJones: "86684",
        },
      },
    }

    const mockGetUsers = vi.fn().mockResolvedValue(mockUsers)
    ;(createUserGrpcClient as Mock).mockReturnValue({
      getUsers: mockGetUsers,
    })

    const { execute } = getUsers()
    const users = await execute()

    expect(users).toEqual(mockUsers)
    expect(mockGetUsers).toHaveBeenCalledTimes(1)
  })

  it("should throw an error if gRPC client fails", async () => {
    const mockGetUsers = vi.fn().mockRejectedValue(new Error("gRPC Error"))
    ;(createUserGrpcClient as Mock).mockReturnValue({
      getUsers: mockGetUsers,
    })

    const { execute } = getUsers()
    await expect(execute()).rejects.toThrow("gRPC Error")
    expect(mockGetUsers).toHaveBeenCalledTimes(1)
  })
})
