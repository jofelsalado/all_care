-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_role" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "middlename" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "contactnum" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AdviserManageConsultation" (
    "consultation_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lead_id" INTEGER NOT NULL,
    "lead_name" TEXT NOT NULL,
    "consultation_type" TEXT NOT NULL,
    "consultatiopn_date" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "meeting_type" TEXT NOT NULL
);
