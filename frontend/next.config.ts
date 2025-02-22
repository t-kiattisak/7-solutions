import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  env: {
    GRPC_SERVICE_HOST: process.env.GRPC_SERVICE_HOST,
  },
}

export default nextConfig
