# 🚀 **Node.js gRPC Server Project**

## **Project Setup**

ทำตามขั้นตอนด้านล่างเพื่อเริ่มต้นโปรเจกต์ gRPC Server ด้วย Node.js ได้อย่างรวดเร็ว:

---

### ✅ **1. Installation**

ติดตั้ง Dependency ทั้งหมดโดยใช้คำสั่ง:

```bash
# ติดตั้ง Dependency
npm install
```

---

### ✅ **2. Generate gRPC Code**

ใช้ **gRPC** สร้างโค้ดจากไฟล์ `.proto` โดยใช้ Script ที่ให้มา:

```bash
# รัน Script สำหรับ Generate gRPC Code
bash generate-grpc.sh
```

> 💡 **หมายเหตุ:** ตรวจสอบว่าไฟล์ `.proto` อยู่ในโฟลเดอร์ `proto` และมี `protoc` ติดตั้งในเครื่องแล้ว

---

### ✅ **3. Environment Variables**

สร้างไฟล์ `.env` ใน Root ของโปรเจกต์และกำหนด Environment Variables ที่จำเป็น เช่น:

```env
# .env
GRPC_SERVICE_HOST=0.0.0.0:50051
```

---

### ✅ **4. Start gRPC Server**

ใช้คำสั่งต่อไปนี้เพื่อเริ่มเซิร์ฟเวอร์:

```bash
npm run start
```

หากต้องการเริ่มเซิร์ฟเวอร์ในโหมด Development พร้อมการ Reload อัตโนมัติ ให้ใช้คำสั่ง:

```bash
npm run dev
```

---

### ✅ **5. Testing**

โปรเจกต์นี้ใช้ **Vitest** สำหรับการทดสอบ สามารถรันการทดสอบด้วยคำสั่ง:

```bash
# รันการทดสอบทั้งหมด
npm run test

# รันการทดสอบด้วย Watch Mode
npm run test:watch
```

---

### ✅ **6. Directory Structure**

โครงสร้างหลักของโปรเจกต์:

```plaintext
src/
├── core/
│   ├── entities/
│   │   └── user.ts
│   ├── generated/
│   │   ├── user_grpc_pb.d.ts
│   │   ├── user_grpc_pb.js
│   │   ├── user_pb.d.ts
│   │   └── user_pb.js
│   └── usecases/
│       ├── getUsers.test.ts
│       ├── getUsers.ts
│       ├── groupUsersByDepartment.test.ts
│       └── groupUsersByDepartment.ts
├── infrastructure/
│   ├── config/
│   │   └── grpcConfig.ts
│   └── grpc/
│       ├── UserGrpcService.ts
│       ├── createGrpcServer.ts
│       ├── client.ts
│       └── server.ts
├── proto/
├── generate-grpc.sh
├── package.json
├── tsconfig.json
└── vitest.config.ts
```

---

### ✅ **7. Troubleshooting**

หากพบปัญหาระหว่างการติดตั้งหรือรันโปรเจกต์ ให้ใช้คำสั่งเหล่านี้:

```bash
# ลบ Node Modules และ Lock File
rm -rf node_modules package-lock.json

# ติดตั้งใหม่
npm install

# ล้าง Cache
npm cache clean --force
```

---

### 💡 **สรุป:**

- ใช้คำสั่ง `npm run dev` เพื่อเริ่มเซิร์ฟเวอร์ในโหมด Development
- ใช้ `npm run test` เพื่อรันการทดสอบด้วย Vitest
- ใช้ `bash generate-grpc.sh` เพื่อสร้าง gRPC Code

หากมีคำถามเพิ่มเติม กรุณาดูเอกสารของ [Node.js](https://nodejs.org/), [gRPC](https://grpc.io/), และ [Vitest](https://vitest.dev/)
