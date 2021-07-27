import { User } from "./Models/sprints";
export class global {
    public static isAuthenticated  = false;
    public static user: User; 

    public static setAuthentication(isAuth:boolean) {
        this.isAuthenticated = isAuth;
    }

    public static setUser(user: User) {
        this.user = user;
    }
    
} 