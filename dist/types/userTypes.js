import z, { string } from "zod";
export const signupSchema = z.object({
    name: string().min(3),
    email: string().min(3),
    password: string().min(3)
});
export const loginSchema = z.object({
    email: string(),
    password: string()
});
//# sourceMappingURL=userTypes.js.map