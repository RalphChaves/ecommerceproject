-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prod" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProdToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ProdToUser_AB_unique" ON "_ProdToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ProdToUser_B_index" ON "_ProdToUser"("B");

-- AddForeignKey
ALTER TABLE "_ProdToUser" ADD FOREIGN KEY ("A") REFERENCES "Prod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProdToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
