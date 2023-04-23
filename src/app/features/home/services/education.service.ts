import { Injectable } from '@angular/core';
import { Education } from '../models/education.models';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  educationData: Education[] = [
    {
      courseName: 'Análise e Desenvolvimento de Sistemas',
      courseEntity: 'Universidade Paulista - UNIP',
      courseBeginningDate: '06/2021',
      courseEndingDate: '07/2024',
    },

    {
      courseName: 'MBA - Finanças e Controladoria',
      courseEntity: 'Universidade de São Paulo - USP',
      courseBeginningDate: '01/2019',
      courseEndingDate: '06/2020',
    },

    {
      courseName: 'MBA - Controladoria e Auditoria',
      courseEntity: 'Pontifícia Universidade Católica - PUC Campinas',
      courseBeginningDate: '01/2017',
      courseEndingDate: '06/2018',
    },

    {
      courseName: 'Ciências Contábeis',
      courseEntity: 'Pontifícia Universidade Católica - PUC Campinas',
      courseBeginningDate: '01/2012',
      courseEndingDate: '12/2016',
    },
  ];

  getEducation(){
    return this.educationData;
  }

  constructor() {}
}
