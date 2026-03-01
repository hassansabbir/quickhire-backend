import { z } from "zod";

// Example Backend Validation Schemas fulfilling all requirements

export const jobPostingSchema = z.object({
  title: z.string().min(1, "Job title is required").max(100),
  companyName: z.string().min(1, "Company name is required"),
  companyUrl: z.string().url("Must be a valid URL").optional(),
  contactEmail: z.string().email("Invalid email format"),
  location: z.string().min(1, "Location is required"),
  type: z.enum(["Full Time", "Part Time", "Contract", "Freelance"]),
  categories: z.array(z.string()).min(1, "At least one category is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

export const subscriptionSchema = z.object({
  email: z.string().email("Invalid email format for subscription"),
});
