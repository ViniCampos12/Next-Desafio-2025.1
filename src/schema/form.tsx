import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(3, {
        message:"Nome deve ter pelo menos 3 caracteres."
    }),
    email: z.string().email({
        message:"Por favor insira um email válido."
    }),
    subject: z.string().min(10, {
        message:"Assunto deve ter pelo menos 10 caracteres"
    }),
    description: z.string().min(50, {
        message:"A mensagem deve ter pelo menos 50 caracteres"
    })
})

export type FormValue = z.infer<typeof formSchema>;