import * as z from 'zod';

export const SignUpSchema = z.object({
	email: z.string().email(),
})

export type SignUpInputs = z.infer<typeof SignUpSchema>
