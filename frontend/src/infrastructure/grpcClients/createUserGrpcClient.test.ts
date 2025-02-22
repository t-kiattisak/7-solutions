import { describe, it, expect, vi } from "vitest"
import { createUserGrpcClient } from "./createUserGrpcClient"
import { UserServiceClient } from "../../core/generated/user_grpc_pb"
import { GetUsersResponse, UserDepartment } from "@/core/generated/user_pb"

vi.mock("../../core/generated/user_grpc_pb")

describe("createUserGrpcClient", () => {
  it("should return correct user data when gRPC call is successful", async () => {
    const mockResponse = new GetUsersResponse()

    const department = new UserDepartment()
    department.setMale(2)
    department.setFemale(3)
    department.setAgerange("25-40")
    department.getHairMap().set("Brown", 1)
    department.getAddressuserMap().set("JohnDoe", "12345")

    mockResponse.getDepartmentsMap().set("Engineering", department)

    const mockGetUsers = vi.fn((_, callback) => callback(null, mockResponse))
    vi.spyOn(UserServiceClient.prototype, "getUsers").mockImplementation(
      mockGetUsers
    )

    const { getUsers } = createUserGrpcClient()
    const result = await getUsers()

    expect(result).toEqual({
      Engineering: {
        male: 2,
        female: 3,
        ageRange: "25-40",
        hair: { Brown: 1 },
        addressUser: { JohnDoe: "12345" },
      },
    })

    expect(mockGetUsers).toHaveBeenCalledTimes(1)
  })

  it("should handle gRPC call error correctly", async () => {
    const mockGetUsers = vi.fn((_, callback) =>
      callback(new Error("gRPC Error"), null)
    )
    vi.spyOn(UserServiceClient.prototype, "getUsers").mockImplementation(
      mockGetUsers
    )

    const { getUsers } = createUserGrpcClient()

    await expect(getUsers()).rejects.toThrow("gRPC Error")
    expect(mockGetUsers).toHaveBeenCalledTimes(1)
  })

  it("should return empty object when response is empty", async () => {
    const mockResponse = new GetUsersResponse()

    const mockGetUsers = vi.fn((_, callback) => callback(null, mockResponse))
    vi.spyOn(UserServiceClient.prototype, "getUsers").mockImplementation(
      mockGetUsers
    )

    const { getUsers } = createUserGrpcClient()
    const result = await getUsers()

    expect(result).toEqual({})
    expect(mockGetUsers).toHaveBeenCalledTimes(1)
  })
})
