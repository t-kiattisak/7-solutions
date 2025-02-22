// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUsers: IUserServiceService_IGetUsers;
}

interface IUserServiceService_IGetUsers extends grpc.MethodDefinition<user_pb.Empty, user_pb.GetUsersResponse> {
    path: "/user.UserService/GetUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Empty>;
    requestDeserialize: grpc.deserialize<user_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.GetUsersResponse>;
    responseDeserialize: grpc.deserialize<user_pb.GetUsersResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    getUsers: grpc.handleUnaryCall<user_pb.Empty, user_pb.GetUsersResponse>;
}

export interface IUserServiceClient {
    getUsers(request: user_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: user_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: user_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUsers(request: user_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: user_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: user_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
}
