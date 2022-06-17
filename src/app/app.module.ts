import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificatePreviewComponent } from './components/certificate-preview/certificate-preview.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { CertificateService } from './core/services/certificate.service';
import { MaterialExampleModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TableComponent,
    CertificatePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    HttpClientModule,
  ],
  providers: [CertificateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
