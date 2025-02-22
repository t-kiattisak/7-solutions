import { createUserGrpcClient } from "@/infrastructure/grpcClients/createUserGrpcClient"

export function getUsers() {
  const { getUsers } = createUserGrpcClient()

  const execute = async () => {
    const users = await getUsers()
    return users
  }

  return { execute }
}
