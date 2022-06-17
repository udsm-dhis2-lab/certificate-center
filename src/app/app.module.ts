import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificateService } from './core/services/certificate.service';
import { MaterialExampleModule } from './material.module';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, TableComponent],
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
