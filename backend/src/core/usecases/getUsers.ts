import { groupUsersByDepartment } from "./groupUsersByDepartment"
import { GetUsersResponse } from "../generated/user_pb"
import { UserService } from "../services/UserService"

export async function getUsers(): Promise<GetUsersResponse> {
  const users = await UserService.fetchUsers()
  return groupUsersByDepartment(users)
}
