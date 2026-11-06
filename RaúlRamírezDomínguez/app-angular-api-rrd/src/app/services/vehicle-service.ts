import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle, VehicleListResponse } from '../interfaces/vehicle-list-response';

@Service()
export class VehicleService {
  private http = inject(HttpClient);

  getAllVehicles(): Observable<VehicleListResponse> {
    return this.http.get<VehicleListResponse>(`https://swapi.dev/api/vehicles/`);
  }

  getOneVehicle(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`https://swapi.dev/api/vehicles/${id}/`);
  }
}
