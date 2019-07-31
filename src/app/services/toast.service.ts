import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AnimationBuilder, Mode, PredefinedColors } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async present(
    message: string,
    header?: string,
    color?: PredefinedColors,
    duration?: number,
    position?: 'top' | 'bottom' | 'middle',
    mode?: Mode,
    id?: string,
    buttons?: any[],
    cssClass?: string | string[],
    showCloseButton?: boolean,
    closeButtonText?: string,
    translucent?: boolean,
    animated?: boolean,
    keyboardClose?: boolean,
    enterAnimation?: AnimationBuilder,
    leaveAnimation?: AnimationBuilder
  ) {
    return await this.toastController.create({
      message: message,
      color: color,
      header: header,
      cssClass: cssClass,
      duration: duration,
      buttons: buttons,
      showCloseButton: showCloseButton,
      closeButtonText: closeButtonText,
      position: position,
      translucent: translucent,
      animated: animated,
      mode: mode,
      keyboardClose: keyboardClose,
      id: id,
      enterAnimation: enterAnimation,
      leaveAnimation: leaveAnimation
    }).then(res => res.present());
  }

  async dismiss() {
    return await this.toastController.dismiss();
  }

}
