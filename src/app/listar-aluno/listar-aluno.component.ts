import { parseSelectorToR3Selector } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';

//VITOR DE LIMA PASTORE
//SC3006221
@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {

  aluno: Aluno = {
    nome: "Vitor Pastore",
    dataIngresso: "12/02/2020",
    previsaoFormatura: "05/08/2022"
  }


  constructor() { }

  ngOnInit(): void {
  }

}
