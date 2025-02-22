import { credentials } from "@grpc/grpc-js"
import { Empty } from "./core/generated/user_pb"
import { UserServiceClient } from "./core/generated/user_grpc_pb"
import { grpcConfig } from "./infrastructure/config/grpcConfig"

const client = new UserServiceClient(
  grpcConfig.grpcHost,
  credentials.createInsecure()
)

const request = new Empty()

client.getUsers(request, (error, response) => {
  if (!error) {
    console.log(JSON.stringify(response.toObject()))
  } else {
    console.error(error)
  }
})
