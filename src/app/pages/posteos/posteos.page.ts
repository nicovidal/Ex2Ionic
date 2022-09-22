import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.page.html',
  styleUrls: ['./posteos.page.scss'],
})
export class PosteosPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

  usuario={
    nombre:'',
    password:'',
    email:'',
  }

}
