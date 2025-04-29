import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Icategories } from '../../core/interfaces/icategories';
import { TermPipe } from '../../core/pipes/term.pipe';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search.pipe';

@Component({
  selector: 'app-brands',
  imports: [TermPipe,FormsModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {

term:string =""
field = "name"

  private readonly _BrandsService = inject(BrandsService)
  brands :WritableSignal<Icategories[]> = signal([])


  ngOnInit(): void {
    this._BrandsService.getAllBrands().subscribe({
      next:(res)=>{
        this.brands.set(res.data)


      }
    })
  }

}
