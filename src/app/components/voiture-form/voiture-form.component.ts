import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voiture-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './voiture-form.component.html',
  styleUrl: './voiture-form.component.css',
})
export class VoitureFormComponent implements OnInit {
  voitureForm: FormGroup;
  isEdit = false;
  clients: any[] = [];

  constructor(
    private fb: FormBuilder,
    private backendService: BackendService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.voitureForm = this.fb.group({
      marque: [''],
      matricule: [''],
      model: [''],
      id_client: [''],
    });
  }

  ngOnInit(): void {
    // Fetch clients for the dropdown
    this.backendService.getClients().subscribe({
      next: (data) => {
        this.clients = data; // Populate the clients array
      },
      error: (err) => {
        console.error('Error fetching clients:', err);
      },
    });

    // Check if this is an edit form
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.backendService.getVoitures().subscribe((data) => {
        const voiture = data.find((v: any) => v.id === +id);
        if (voiture) {
          this.voitureForm.patchValue(voiture);
        }
      });
    }
  }

  saveVoiture(): void {
  const formData = { ...this.voitureForm.value };
  formData.id_client = parseInt(formData.id_client, 10); 
  console.log('Form Data:', formData);
  if (this.isEdit) {
    const id = this.route.snapshot.paramMap.get('id');
    this.backendService.updateVoiture(+id!, formData).subscribe({
      next: () => this.router.navigate(['/voitures']),
      error: (err) => console.error('Error updating voiture:', err),
    });
  } else {
    this.backendService.addVoiture(formData).subscribe({
      next: () => this.router.navigate(['/voitures']),
      error: (err) => console.error('Error adding voiture:', err),
    });
  }
}


}
