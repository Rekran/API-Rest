import * as z from 'zod';

export const subjectSchema = z.object({
    
    name: z.string().min(3).max(255)
});

