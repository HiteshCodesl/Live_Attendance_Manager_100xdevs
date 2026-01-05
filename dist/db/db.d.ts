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
export declare const classModel: mongoose.Model<{
    className: string;
    studentIds: mongoose.Types.ObjectId[];
    teacherId?: mongoose.Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    className: string;
    studentIds: mongoose.Types.ObjectId[];
    teacherId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    className: string;
    studentIds: mongoose.Types.ObjectId[];
    teacherId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    className: string;
    studentIds: mongoose.Types.ObjectId[];
    teacherId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    className: string;
    studentIds: mongoose.Types.ObjectId[];
    teacherId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    className: string;
    studentIds: mongoose.Types.ObjectId[];
    teacherId?: mongoose.Types.ObjectId | null;
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
        studentIds: mongoose.Types.ObjectId[];
        teacherId?: mongoose.Types.ObjectId | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        className: string;
        studentIds: mongoose.Types.ObjectId[];
        teacherId?: mongoose.Types.ObjectId | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    className: string;
    studentIds: mongoose.Types.ObjectId[];
    teacherId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    className: string;
    studentIds: mongoose.Types.ObjectId[];
    teacherId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const AttendanceModel: mongoose.Model<{
    classId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    classId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    classId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    classId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
}, mongoose.Document<unknown, {}, {
    classId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    classId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
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
        classId: mongoose.Types.ObjectId;
        studentId: mongoose.Types.ObjectId;
        status?: "present" | "absent" | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        classId: mongoose.Types.ObjectId;
        studentId: mongoose.Types.ObjectId;
        status?: "present" | "absent" | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    classId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    classId: mongoose.Types.ObjectId;
    studentId: mongoose.Types.ObjectId;
    status?: "present" | "absent" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map