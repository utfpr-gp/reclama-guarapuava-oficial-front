import {Component, OnInit} from '@angular/core';
import {OccurrenceService} from '../../core/data-service/occurrence.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Occurrence} from '../../model/occurrence';

@Component({
  selector: 'utfpr-occurrence-detail',
  templateUrl: './occurrence-detail.component.html',
  styleUrls: ['./occurrence-detail.component.scss']
})
export class OccurrenceDetailComponent implements OnInit {

  occurrence: Occurrence;

  constructor(private occurrenceService: OccurrenceService,
              private route: Router,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(res => {
      this.occurrenceService.show(res.id).subscribe(res => this.occurrence = res);
    });
  }

}
