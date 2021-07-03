export class global {
    public static isAuthenticated  = false;
    public static setAuthentication(isAuth:boolean) {
        this.isAuthenticated = isAuth;
    }
} 