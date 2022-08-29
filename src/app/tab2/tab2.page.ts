import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss', '../explore-container/explore-container.component.scss']
})

export class Tab2Page {
  ladoA : string
  ladoB : string
  ladoC : string
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

  Verificar(){
    var A = parseFloat(this.ladoA)
    var B = parseFloat(this.ladoB)
    var C = parseFloat(this.ladoC)
    
    if(A + B > C && A + C > B && B + C > A){
      this.classificador(A, B, C)
    }

  }

  classificador(A, B, C){
    if (A == B && A == C){
      this.mensagem = "Tringulo Equilátero"
      this.presentAlert()
    }

    else if (A != B && A != C && B != C){
      this.mensagem = "Tringulo Escaleno"
    }

    else{
      this.mensagem = "Tringulo Isósceles"
    }                        
      
      this.presentAlert()
  }
          
}
