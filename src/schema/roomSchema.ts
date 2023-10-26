import * as z from 'zod';


export const roomSchema = z.object({
    
    name: z.string().min(3).max(255),
    description: z.string().min(3).max(255)
});

