## tinh

## 1. reset database

npx prisma migrate reset

## 2. init database (if run already then not run again)

npx prisma init --output ../app/generated/prisma
npx create-db

## 3. update schema

npx prisma migrate dev --name ...

## 4. generate prisma client after update

npx prisma generate

## 5. seed database

npx prisma db seed
