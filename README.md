## tinh

## 1. reset database
npx prisma migrate reset


## 2. update schema
npx prisma migrate dev --name ...

## 3. generate prisma client after update
npx prisma generate

## 3. seed database
npx prisma db seed

