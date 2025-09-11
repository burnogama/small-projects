-- CreateTable
CREATE TABLE "Currency" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usd" REAL NOT NULL,
    "gbp" REAL NOT NULL,
    "jpy" REAL NOT NULL,
    "aud" REAL NOT NULL,
    "chf" REAL NOT NULL,
    "cad" REAL NOT NULL,
    "cny" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
