import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CertificateService } from '../../core/services/certificate.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private service: CertificateService) {}
  searchTerm: string = '';
  identifier: string = '';
  searching: boolean | undefined;
  subscription: Observable<any> | undefined;
  certificates: any[] = [];
  error: string = '';
  language: string = '';
  initialization: boolean = true;
  ngOnInit() {
    this.language = navigator.language;
  }

  search() {
    this.initialization = false;
    this.error = '';
    if (this.searchTerm !== '') {
      this.identifier = this.searchTerm;
      this.searching = true;
      this.service
        .getCertificates(this.searchTerm)
        .pipe(take(1))
        .subscribe(
          (res) => {
            this.searchTerm = '';
            this.searching = false;
            this.certificates = res;
          },
          (error) => {
            this.searchTerm = '';
            this.searching = false;
            if (!navigator.onLine) {
              this.error = 'Please check your internet connection.';
            }
            this.error = error.message;
          }
        );
    }
  }
}
