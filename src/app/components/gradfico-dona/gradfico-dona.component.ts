import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-gradfico-dona',
  templateUrl: './gradfico-dona.component.html',
  styleUrls: ['./gradfico-dona.component.css']
})
export class GradficoDonaComponent implements OnInit {
  
  @Input('chartLabels') doughnutChartLabels: Label[] = [];
  @Input('chartData') doughnutChartData: MultiDataSet = [];
  @Input('chartType') doughnutChartType: ChartType = 'doughnut';
  
  constructor() { }

  ngOnInit() {
  }

}
