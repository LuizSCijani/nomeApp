import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', '../explore-container/explore-container.component.scss']
})

export class Tab1Page {
  ladoA : string
  ladoB : string
  ladoC : string
  resultado : string
  mensagem : string

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'classificador',
      subHeader: this.mensagem,
      message: this.mensagem,
      buttons: ['Fechar'],
    });


await alert.present();
}

  Calculo(){
    var A = parseFloat(this.ladoA)
    var B = parseFloat(this.ladoB)
    var C = parseFloat(this.ladoC)
    if((A+B)>C && (A+C)>B && (B+C)>A){
      var p = (A + B + C) / 2

      var Calculo = Math.sqrt(p * (p-A) * (p-B) * (p-C)) 

      this.resultado = Calculo.toFixed(2)

      this.presentAlert()
    } 

    else{
      this.mensagem = "Tringulo não existe"
    }

    this.presentAlert()
    
  }

}
