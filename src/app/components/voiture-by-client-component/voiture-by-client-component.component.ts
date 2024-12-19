import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voiture-by-client-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voiture-by-client-component.component.html',
  styleUrl: './voiture-by-client-component.component.css'
})
export class VoitureByClientComponentComponent implements OnInit {
  voitures: any[] = [];
  clientId: number | null = null;

  constructor(private backendService: BackendService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.clientId) {
      this.backendService.getVoituresByClient(this.clientId).subscribe({
        next: (data) => {
          this.voitures = data;
        },
        error: (err) => {
          console.error('Error fetching voitures for client:', err);
        },
      });
    }
  }
}
