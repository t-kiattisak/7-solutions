import {
  Server,
  ServerCredentials,
  ServiceDefinition,
  UntypedServiceImplementation,
} from "@grpc/grpc-js"
import { grpcConfig } from "./config/grpcConfig"
import { UserServiceService } from "../core/generated/user_grpc_pb"
import { userService } from "./grpc/UserGrpcService"

export function createGrpcServer() {
  const server = new Server()

  server.addService(
    UserServiceService as unknown as ServiceDefinition<UntypedServiceImplementation>,
    userService
  )

  server.bindAsync(
    grpcConfig.grpcHost,
    ServerCredentials.createInsecure(),
    () => {
      console.log(`🚀 gRPC Server running at http://${grpcConfig.grpcHost}`)
    }
  )

  return server
}
