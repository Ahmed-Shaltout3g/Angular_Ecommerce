import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategories } from '../../core/interfaces/icategories';

@Component({
  selector: 'app-category-details',
  imports: [],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss'
})
export class CategoryDetailsComponent implements OnInit {
    private readonly _ActivatedRoute = inject(ActivatedRoute)
    private readonly _CategoriesService= inject(CategoriesService)
    category :WritableSignal<Icategories | null> = signal(null)


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        let Id = params.get("id")

        this._CategoriesService.getCategoriesDetails(Id).subscribe({
          next:(res)=>{
            this.category.set(res.data)

            console.log(res.data);

          },error(err){
            console.log(err);

          }
        })




      },
      error:(err)=>{
        console.log(err);
      }
    })
  }




}
