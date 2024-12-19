import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './client-list.component.html',
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.backendService.getClients().subscribe({
      next: (data) => {
        this.clients = data; // Update clients array
      },
      error: (err) => {
        console.error('Error fetching clients:', err);
      },
    });
  }
}
