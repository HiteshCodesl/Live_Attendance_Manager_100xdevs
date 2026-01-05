import mongoose from "mongoose";
export declare function connectToDatabase(): Promise<void>;
export declare const userModel: mongoose.Model<{
    email: string;
    role: "student" | "teacher" | "admin";
    name?: string | null;
    password?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    email: string;
    role: "student" | "teacher" | "admin";
    name?: string | null;
    password?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    email: string;
    role: "student" | "teacher" | "admin";
    name?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    role: "student" | "teacher" | "admin";
    name?: string | null;
    password?: string | null;
}, mongoose.Document<unknown, {}, {
    email: string;
    role: "student" | "teacher" | "admin";
    name?: string | null;
    password?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    email: string;
    role: "student" | "teacher" | "admin";
    name?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        email: string;
        role: "student" | "teacher" | "admin";
        name?: string | null;
        password?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        email: string;
        role: "student" | "teacher" | "admin";
        name?: string | null;
        password?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    email: string;
    role: "student" | "teacher" | "admin";
    name?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    email: string;
    role: "student" | "teacher" | "admin";
    name?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const roomModel: mongoose.Model<{
    className: string;
    teacherId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    className: string;
    teacherId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    className: string;
    teacherId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    className: string;
    teacherId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, {
    className: string;
    teacherId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    className: string;
    teacherId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        className: string;
        teacherId: mongoose.Types.ObjectId;
        studentId: mongoose.Types.ObjectId;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        className: string;
        teacherId: mongoose.Types.ObjectId;
        studentId: mongoose.Types.ObjectId;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    className: string;
    teacherId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    className: string;
    teacherId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const AttendanceModel: mongoose.Model<{
    studentId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    studentId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    studentId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    studentId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
}, mongoose.Document<unknown, {}, {
    studentId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    studentId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        studentId: mongoose.Types.ObjectId;
        classId: mongoose.Types.ObjectId;
        status?: "present" | "absent" | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        studentId: mongoose.Types.ObjectId;
        classId: mongoose.Types.ObjectId;
        status?: "present" | "absent" | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    studentId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    studentId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=userModel.d.ts.map