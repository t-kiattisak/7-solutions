#!/bin/bash

if [ -z "$1" ]; then
  echo "❗ Error: Please provide the name of the .proto file (e.g., user.proto)"
  exit 1
fi

PROTO_FILE=$1

echo "🚀 Generating gRPC code for $PROTO_FILE..."

npx grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=src/core/generated \
    --js_out=import_style=commonjs,binary:src/core/generated \
    --grpc_out=grpc_js:src/core/generated \
    --proto_path=../backend/proto \
    $PROTO_FILE

echo "✅ Code generation completed!"