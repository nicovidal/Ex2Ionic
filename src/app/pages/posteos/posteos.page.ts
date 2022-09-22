import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PosteosService } from '../../services/posteos.service'

@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.page.html',
  styleUrls: ['./posteos.page.scss'],
})
export class PosteosPage implements OnInit {

  posteos:any;

  constructor(private menuController: MenuController , private posteosService:PosteosService) { }
  //lo muestra apenas se cargue la page, eso hace el ngOnInit()
  ngOnInit() {
    //se almacena en un argumento llamado resp
    this.posteosService.getTopPost().subscribe(resp => {
      console.log('posteos', resp);
      //nuestro json en html
      this.posteos=resp;
    })
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  usuario = {
    nombre: '',
    password: '',
    email: '',
  }

}
