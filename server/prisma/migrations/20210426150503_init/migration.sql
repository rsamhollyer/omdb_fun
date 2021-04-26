-- CreateTable
CREATE TABLE "MovieList" (
    "imdbID" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Year" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "Poster" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("imdbID")
);
