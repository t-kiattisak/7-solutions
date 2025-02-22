import { getUsers } from "../../core/usecases/getUsers"
import { GetUsersResponse } from "../../core/generated/user_pb"

export const userService = {
  getUsers: async (_: any, callback: any) => {
    try {
      const users: GetUsersResponse = await getUsers()
      callback(null, users)
    } catch (error) {
      callback(error as Error, null)
    }
  },
}
