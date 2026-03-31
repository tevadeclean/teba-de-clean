CREATE TYPE "public"."blog_category" AS ENUM('residential_small', 'residential_medium', 'residential_large', 'commercial_small', 'commercial_medium', 'commercial_large');--> statement-breakpoint
CREATE TYPE "public"."booking_status" AS ENUM('pending', 'confirmed', 'completed', 'cancelled');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('user', 'admin');--> statement-breakpoint
CREATE TYPE "public"."service_type" AS ENUM('residential', 'commercial');--> statement-breakpoint
CREATE TABLE "blogPosts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"content" text NOT NULL,
	"category" "blog_category" NOT NULL,
	"area" numeric(6, 2),
	"price" integer,
	"location" varchar(100),
	"imageUrl" varchar(500),
	"isPublished" integer DEFAULT 1 NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "bookings" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(320),
	"phone" varchar(20) NOT NULL,
	"serviceType" "service_type" NOT NULL,
	"preferredDate" varchar(100),
	"message" text,
	"status" "booking_status" DEFAULT 'pending' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "testimonials" (
	"id" serial PRIMARY KEY NOT NULL,
	"customerName" varchar(100) NOT NULL,
	"rating" integer NOT NULL,
	"comment" text NOT NULL,
	"serviceType" "service_type" NOT NULL,
	"imageUrl" varchar(500),
	"source" varchar(100) DEFAULT 'くらしのマーケット' NOT NULL,
	"isPublished" integer DEFAULT 1 NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"openId" varchar(64) NOT NULL,
	"name" text,
	"email" varchar(320),
	"loginMethod" varchar(64),
	"role" "role" DEFAULT 'user' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"lastSignedIn" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_openId_unique" UNIQUE("openId")
);
