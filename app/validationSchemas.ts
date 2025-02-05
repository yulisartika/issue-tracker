import { z } from "zod";

export const createIssueSchema = z.object({
    title: z.string().min(1, 'Title is required').max(255), // this message will be shown for the form validation
    description: z.string().min(1, 'Description is required') // this message will be shown for the form validation
});
