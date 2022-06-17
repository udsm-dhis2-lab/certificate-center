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
  certifictes: any[] = [];
  ngOnInit() {}

  search() {
    this.service
      .getCertificates(this.searchTerm)
      .pipe(take(1))
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {}
      );
    console.log(this.searchTerm);
    console.log(environment.url);
  }
}
