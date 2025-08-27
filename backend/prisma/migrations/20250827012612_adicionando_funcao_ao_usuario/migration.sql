-- CreateEnum
CREATE TYPE "public"."Funcao" AS ENUM ('USUARIO', 'ADMIN');

-- AlterTable
ALTER TABLE "public"."Usuario" ADD COLUMN     "funcao" "public"."Funcao" NOT NULL DEFAULT 'USUARIO';
