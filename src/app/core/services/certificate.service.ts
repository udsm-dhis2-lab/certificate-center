import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Certificate } from '../helpers/types.helper';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  constructor(private https: HttpClient) {}
  api: string = environment.url;
  getCertificates(search: string): Observable<Certificate[]> {
    return this.https.get<Certificate[]>(
      `${this.api}/api/certificates?search=${search}`
    );
  }
}
