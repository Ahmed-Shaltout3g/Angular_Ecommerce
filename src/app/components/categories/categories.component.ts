import { Component, signal, WritableSignal, OnInit, inject } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategories } from '../../core/interfaces/icategories';
import { RouterLink } from '@angular/router';
import { TermPipe } from '../../core/pipes/term.pipe';

@Component({
  selector: 'app-categories',
  imports: [RouterLink,TermPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  private readonly _CategoriesService = inject(CategoriesService)
  categories :WritableSignal<Icategories[]> = signal([])


  ngOnInit(): void {
    this._CategoriesService.getAllcategories().subscribe({
      next:(res)=>{
        this.categories.set(res.data)


      }
    })
  }


}
