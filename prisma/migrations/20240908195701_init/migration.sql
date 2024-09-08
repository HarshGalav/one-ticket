-- CreateEnum
CREATE TYPE "TicketType" AS ENUM ('GeneralEntry', 'Exhibition', 'Show');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('Exhibition', 'Show');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phone_number" TEXT,
ADD COLUMN     "registered_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Ticket" (
    "ticket_id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "event_id" INTEGER NOT NULL,
    "ticket_type" "TicketType" NOT NULL,
    "ticket_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visit_date" TIMESTAMP(3) NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("ticket_id")
);

-- CreateTable
CREATE TABLE "EventAndShow" (
    "event_id" SERIAL NOT NULL,
    "event_name" TEXT NOT NULL,
    "description" TEXT,
    "event_type" "EventType" NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "EventAndShow_pkey" PRIMARY KEY ("event_id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "EventAndShow"("event_id") ON DELETE RESTRICT ON UPDATE CASCADE;
