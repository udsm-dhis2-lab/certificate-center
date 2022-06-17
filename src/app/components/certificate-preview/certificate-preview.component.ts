import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Certificate } from 'src/app/core/helpers/types.helper';

@Component({
  selector: 'app-certificate-preview',
  templateUrl: './certificate-preview.component.html',
  styleUrls: ['./certificate-preview.component.scss'],
})
export class CertificatePreviewComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CertificatePreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Certificate,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  getURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.certificate);
  }
}
