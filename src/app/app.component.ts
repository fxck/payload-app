import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts$ = this._http
    .get<{ docs: any[] }>(`${environment.apiEndpoint}/posts`)
    .pipe(map(({ docs }) => docs));

  constructor(private _http: HttpClient) { }
}
