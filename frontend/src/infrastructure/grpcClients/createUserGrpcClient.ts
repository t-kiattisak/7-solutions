import { UserServiceClient } from "../../core/generated/user_grpc_pb"
import { credentials } from "@grpc/grpc-js"
import { Empty, GetUsersResponse } from "@/core/generated/user_pb"
import { grpcConfig } from "../config/grpcConfig"
import { UserDepartmentObject } from "@/core/entities/user"

export function createUserGrpcClient() {
  const client = new UserServiceClient(
    grpcConfig.USER_SERVICE_HOST,
    credentials.createInsecure()
  )

  const getUsers = async (): Promise<Record<string, UserDepartmentObject>> => {
    return new Promise((resolve, reject) => {
      const request = new Empty()

      client.getUsers(request, (err, response: GetUsersResponse) => {
        if (err) {
          reject(err)
        } else {
          const departmentsMap = response.getDepartmentsMap()
          const departmentsObject: Record<string, UserDepartmentObject> = {}

          for (const [key, userDepartment] of departmentsMap.entries()) {
            departmentsObject[key] = {
              male: userDepartment.getMale(),
              female: userDepartment.getFemale(),
              ageRange: userDepartment.getAgerange(),
              hair: Object.fromEntries(userDepartment.getHairMap().entries()),
              addressUser: Object.fromEntries(
                userDepartment.getAddressuserMap().entries()
              ),
            }
          }
          console.log("departments", departmentsObject)
          resolve(departmentsObject)
        }
      })
    })
  }

  return { getUsers }
}
