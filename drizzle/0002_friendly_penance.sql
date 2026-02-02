ALTER TABLE `testimonials` ADD `imageUrl` varchar(500);--> statement-breakpoint
ALTER TABLE `testimonials` ADD `source` enum('curama','google','manual') DEFAULT 'manual' NOT NULL;--> statement-breakpoint
ALTER TABLE `testimonials` ADD `sourceLabel` varchar(100);