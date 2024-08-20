// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  async register(email: string, password: string): Promise<void | any> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/recipes']);
      return userCredential;
    } catch (error) {
      console.error('Registration error: ', error);
      return null;
    }
  }

  async login(email: string, password: string): Promise<void | any> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/recipes']);
      return userCredential;
    } catch (error) {
      console.error('Login error: ', error);
      return null; 
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error: ', error);
    
    }
  }
}
