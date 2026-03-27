import { testimonials } from "../../drizzle/schema";
import { db } from "./index";
import type { Testimonial } from "@shared/types";

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const result = await db.select().from(testimonials);
  return result;
};
