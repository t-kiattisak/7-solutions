// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_user_Empty(arg) {
  if (!(arg instanceof user_pb.Empty)) {
    throw new Error('Expected argument of type user.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_Empty(buffer_arg) {
  return user_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUsersResponse(arg) {
  if (!(arg instanceof user_pb.GetUsersResponse)) {
    throw new Error('Expected argument of type user.GetUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUsersResponse(buffer_arg) {
  return user_pb.GetUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUsers: {
    path: '/user.UserService/GetUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.Empty,
    responseType: user_pb.GetUsersResponse,
    requestSerialize: serialize_user_Empty,
    requestDeserialize: deserialize_user_Empty,
    responseSerialize: serialize_user_GetUsersResponse,
    responseDeserialize: deserialize_user_GetUsersResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService, 'UserService');
