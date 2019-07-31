import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoading: boolean;

  constructor(private loadingController: LoadingController) { }

  async present(message: string = '') {
    this.isLoading = true;
    return await this.loadingController.create({
      message: message
    }).then(res => {
      res.present().then(() => {
        if (!this.isLoading) {
          res.dismiss();
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

}
