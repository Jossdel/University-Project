/*
  Warnings:

  - You are about to drop the column `fecha` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `categoria` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `descripcion` on the `Producto` table. All the data in the column will be lost.
  - Added the required column `stock` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "fecha",
DROP COLUMN "total";

-- AlterTable
ALTER TABLE "Producto" DROP COLUMN "categoria",
DROP COLUMN "descripcion",
ADD COLUMN     "stock" INTEGER NOT NULL;
