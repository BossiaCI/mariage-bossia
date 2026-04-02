-- CreateTable
CREATE TABLE "Confirmation" (
    "id" SERIAL NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT,
    "attendance" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT,
    "message" TEXT,
    "dietary" TEXT,
    "guests" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Confirmation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Confirmation_email_key" ON "Confirmation"("email");
