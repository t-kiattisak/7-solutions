# 7-solutions

# 🚀 **Next.js Project with gRPC, Tailwind CSS, and Vitest**

## **Project Setup**

ทำตามขั้นตอนด้านล่างเพื่อเริ่มต้นโปรเจกต์นี้ได้อย่างรวดเร็ว:

---

### ✅ **1. Installation**

ติดตั้ง Dependency ทั้งหมดโดยใช้คำสั่ง:

```bash
# ติดตั้ง Dependency
npm install
```

---

### ✅ **2. Generate gRPC Code**

โปรเจกต์นี้ใช้ **gRPC** สร้างโค้ดจากไฟล์ `.proto` โดยใช้ Script ที่ให้มา:

```bash
# รัน Script สำหรับ Generate gRPC Code
bash generate-grpc.sh
```

> 💡 **หมายเหตุ:** ตรวจสอบว่าไฟล์ `.proto` ถูกวางในโฟลเดอร์ที่ถูกต้อง และมี `protoc` ติดตั้งในเครื่องแล้ว

---

### ✅ **3. Environment Variables**

สร้างไฟล์ `.env.local` ใน Root ของโปรเจกต์และกำหนด Environment Variables ที่จำเป็น เช่น:

```env
# .env.local
NEXT_PUBLIC_GRPC_API_URL=http://localhost:50051
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

---

### ✅ **4. Development**

โหมด Development ให้ใช้คำสั่ง:

```bash
npm run dev
```

รันที่: [http://localhost:3000](http://localhost:3000)

---

### ✅ **5. Testing**

โปรเจกต์นี้ใช้ **Vitest** สำหรับการทดสอบ สามารถรันการทดสอบด้วยคำสั่งต่อไปนี้:

```bash
# รันการทดสอบทั้งหมด
npm run test
```

หากต้องการรันการทดสอบด้วย Watch Mode เพื่อให้ตรวจสอบการเปลี่ยนแปลงของโค้ดแบบ Real-Time:

```bash
npm run test:watch
```

---

### ✅ **6. Code Linting และ Formatting**

ใช้ ESLint และ Prettier เพื่อจัดการกับโค้ดของคุณ:

```bash
# ตรวจสอบโค้ดด้วย ESLint
npm run lint

# จัดรูปแบบโค้ดด้วย Prettier
npm run format
```

---

### ✅ **7. Styling**

โปรเจกต์นี้ใช้ **Tailwind CSS** สำหรับการจัดการสไตล์ ตรวจสอบว่าไฟล์ `tailwind.config.ts` และ `postcss.config.mjs` ถูกต้อง

หากคุณต้องการ Build CSS สำหรับ Production ให้ใช้คำสั่ง:

```bash
npm run build:css
```

---

### ✅ **8. Directory Structure**

โครงสร้างหลักของโปรเจกต์:

```plaintext
src/
├── app/
│   ├── users/
│   │   ├── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
├── components/
│   └── TodoList.tsx
├── core/
│   ├── entities/
│   │   ├── todoList.ts
│   │   └── user.ts
│   ├── generated/
│   │   ├── user_grpc_pb.d.ts
│   │   ├── user_grpc_pb.js
│   │   ├── user_pb.d.ts
│   │   └── user_pb.js
│   └── usecases/
│       ├── getUsers.test.ts
│       ├── getUsers.ts
│       ├── useTodoList.test.ts
│       └── useTodoList.ts
├── data/
│   └── todoList.ts
├── infrastructure/
│   ├── config/
│   │   └── grpcConfig.ts
│   └── grpcClients/
│       ├── createUserGrpcClient.test.ts
│       └── createUserGrpcClient.ts
├── eslint.config.mjs
├── generate-grpc.sh
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── vitest.config.ts
└── vitest.setup.ts
```

---

### ✅ **10. การแก้ไขปัญหา (Troubleshooting)**

หากพบปัญหาระหว่างการติดตั้งหรือรันโปรเจกต์ ลองใช้คำสั่งเหล่านี้:

```bash
# ลบ Node Modules และ Lock File
rm -rf node_modules package-lock.json

# ติดตั้งใหม่
npm install
```

---

### 💡 **สรุป:**

- ใช้คำสั่ง `npm run dev` เพื่อเริ่มโปรเจกต์ในโหมด Development
- ใช้ `bash generate-grpc.sh` เพื่อสร้าง gRPC Code
- ใช้ `npm run test` เพื่อรันการทดสอบด้วย Vitest
- ใช้ `npm run build` เพื่อ Build สำหรับ Production

### url ในแต่ละข้อ

- ข้อ 1 จะอยู่ใน path /
- ข้อ 2 จะอยู่ใน path /users

หากมีคำถามเพิ่มเติม กรุณาดูเอกสารของ [Next.js](https://nextjs.org/), [gRPC](https://grpc.io/), [Tailwind CSS](https://tailwindcss.com/), และ [Vitest](https://vitest.dev/)
