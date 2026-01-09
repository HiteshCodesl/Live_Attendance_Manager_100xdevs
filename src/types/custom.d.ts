
declare namespace Express{
    export interface Request{
        id: string,
        role: 'teacher' | 'student' | 'admin'
    }
}