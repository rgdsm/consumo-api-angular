import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';
import { githubData } from '../../models/githubData';
import { NgFor } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, FormsModule], 
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  gitInfo: githubData[] = [];
  searchName: string = ''; 

  constructor(private service: GithubApiService) {}

  ngOnInit(): void {

  }
  
  getName(searchName: string) {
    if (searchName) {
      this.service.getData(searchName).subscribe({
        next: (data) => {
          this.gitInfo = data;
        },
        error: (err) => {
          console.log('Erro ao buscar dados do Github: ', err);
        }
      });
    } else {
      alert('Por favor, insira um nome de usuário válido.');
    }
  }
}
