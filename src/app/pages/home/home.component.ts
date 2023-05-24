import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list:any[]=[] 
  listDetalle1:any[]=[] 


  constructor(private service:PokemonServiceService ){

  }
  ngOnInit(): void {
    this.allNamePokemon();
    
  }


  async allNamePokemon(){


    let res: any = await firstValueFrom(this.service.getPokemon());

    
    this.list = res.results
   // console.log(this.list)

   for (let index = 1; index < this.list.length; index++) {
    
    this.detailPokemonData(index);

  
    
   }


  }

  async detailPokemonData(id:number){
    let data: any = await firstValueFrom(this.service.detailsPokemon(id));
    ///Objeto y push 
    this.listDetalle1.push(data)

    //
    //private router:Router 

    //this.router.navigate['/home']
    

  }




}
