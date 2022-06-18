import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Certificate } from 'src/app/core/helpers/types.helper';
import { environment } from 'src/environments/environment';
import { CertificatePreviewComponent } from '../certificate-preview/certificate-preview.component';
declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  url!: string;
  constructor(private dialog: MatDialog) {}
  @Input()
  certificates!: Certificate[];
  displayedColumns: string[] = [
    'index',
    'identifier',
    'intervention',
    'certificate',
    'download',
  ];

  ngOnInit() {}

  preview(data: Certificate) {
    this.dialog.open(CertificatePreviewComponent, {
      width: 'auto',
      enterAnimationDuration: '3000ms',
      exitAnimationDuration: '150ms',
      disableClose: true,
      data,
    });
  }
  download(data: Certificate) {
    FileSaver.saveAs(data.certificate, data.intervention);
  }
}
