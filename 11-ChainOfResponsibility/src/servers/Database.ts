import PermissionType from "./PermissionType";

interface DatabaseItem{
    email: string;
    password: string;
    permission: PermissionType;
}

const Database: DatabaseItem[] = [
    {
        email: "a@a.a",
        password: "123123",
        permission: PermissionType.USER
    },
    {
        email: "b@a.a",
        password: "1234321",
        permission: PermissionType.USER
    },
    {
        email: "admin@admin.admin",
        password: "admin",
        permission: PermissionType.ADMIN
    }
];

export default Database;