import * as z from 'zod';


export const videoSchema = z.object({
    
    title: z.string().min(3).max(255),
    url: z.string().min(3).max(255)
});

