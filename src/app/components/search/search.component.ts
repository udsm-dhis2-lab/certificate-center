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
  searching: boolean | undefined;
  subscription: Observable<any> | undefined;
  certificates: any[] = [];
  error: string = '';
  ngOnInit() {}

  search() {
    if (this.searchTerm !== '') {
      this.searching = true;
      this.service
        .getCertificates(this.searchTerm)
        .pipe(take(1))
        .subscribe(
          (res) => {
            this.searching = false;
            this.certificates = res;
          },
          (error) => {
            this.searching = false;
            this.error = error.message;
          }
        );
    }
  }
}
