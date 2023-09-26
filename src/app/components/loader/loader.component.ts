import { Component } from '@angular/core';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  isLoading: boolean = false;
  constructor(private loaderService: LoaderService) {
    this.loaderService.getIsLoading().subscribe((loading) => {
      this.isLoading = loading;
    });
  }
}
