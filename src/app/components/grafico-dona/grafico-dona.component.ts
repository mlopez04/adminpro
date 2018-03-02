import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('titulo') titulo: string = 'Nombre de la gráfica';
  @Input('labels') doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') doughnutChartData: number[] = [350, 450, 100];
  @Input('type') doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
