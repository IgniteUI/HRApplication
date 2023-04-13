import { Injectable } from "@angular/core";
import jwt_decode from 'jwt-decode';

type Token = {
    Id?: string,
    email?: string,
    firstName?: string,
    exp?: number,
    role?: string,
    sub?: string,
}

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
  
    decodeToken(token) {
        return jwt_decode(token);
    } 

    getEmail() {
        const token = localStorage.getItem('hr_app_token');
        console.log(this.decodeToken(token))
        const {email}: Token = this.decodeToken(token);

        return email;
    }

    isAuthenticated() {
        const token = localStorage.getItem('hr_app_token');
        if (token) {
            const {email, role}: Token = this.decodeToken(token);

            return email != null && role != null;
        }

        return false;
    }

    isAdmin() {
        const token = localStorage.getItem('hr_app_token');
        const {role}: Token = this.decodeToken(token);
        return this.isAuthenticated() && role === "Administrator";
    }

    logout() {
        localStorage.removeItem('hr_app_token');
    }
}