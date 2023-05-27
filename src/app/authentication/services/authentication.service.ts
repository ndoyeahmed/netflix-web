import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurModel } from 'src/app/shared/models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  errCon = false;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  async authenticationProcess(url: string, body: any) {
    await this.http.post<any>(url, body).toPromise()
      .then((data) => {
        console.log(data);
        this.setSession(data).then(x => {
          this.identity().subscribe((user: any) => {
            this.storeUser(user)
                  .then(() => {
                    this.router.navigate(['/home']);
                  });
          }, (error: any) => console.log(error));
        });
      }).catch((error1) => this.errCon = true);
    return this.errCon;
  }

  async login(credentials: any) {
    return this.authenticationProcess('/api/login', {username: credentials.login, password: credentials.password});
  }

  async setSession(authResult: any) {

    localStorage.removeItem('id_token');
    localStorage.setItem('id_token', authResult.token);
  }

  async storeUser(user: any) {
    localStorage.removeItem('mdd_user');
    localStorage.setItem('mdd_user',JSON.stringify(user));
  }

  token() {
    return localStorage.getItem('id_token')?.toString();
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('mdd_user');
    this.router.navigate(['/login']);
  }

  public identity() {
    return this.http.get<any>('/api/connected-user');
  }

}
