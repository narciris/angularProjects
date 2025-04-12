import { Component, OnInit } from '@angular/core';
import { RickService } from '../services/rick.service';

@Component({
  selector: 'app-characters',
  standalone: false,
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  characters : any[] = [];

  

  constructor(private characterService : RickService){
  }
  ngOnInit(): void {
    this.characterService.getCharacter().subscribe(response => {
    this.characters = response.results;
    });
    throw new Error('Method not implemented.');
  }

}
