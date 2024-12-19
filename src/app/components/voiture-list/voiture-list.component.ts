import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voiture-list',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './voiture-list.component.html',
  styleUrl: './voiture-list.component.css'
})
export class VoitureListComponent implements OnInit {
  voitures: any[] = [];

  constructor(private backendService: BackendService, private router: Router) {}

  ngOnInit(): void {
    this.fetchVoitures();
  }

  fetchVoitures(): void {
    this.backendService.getVoitures().subscribe((data) => {
      this.voitures = data;
    });
  }

  deleteVoiture(id: number): void {
  this.backendService.deleteVoiture(id).subscribe({
    next: () => {
      console.log(`Voiture with ID ${id} deleted successfully.`);
      this.fetchVoitures(); // Refresh the list after deletion
    },
    error: (err) => console.error('Error deleting voiture:', err),
  });
}

}
