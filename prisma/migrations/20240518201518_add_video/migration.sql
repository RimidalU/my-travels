-- CreateTable
CREATE TABLE "Video" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "post" TEXT,
    "photo" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type" "EVENT_TYPE" NOT NULL DEFAULT 'PLACES',

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);
