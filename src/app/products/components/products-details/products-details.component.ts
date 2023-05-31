import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {

  constructor(private service: ProductsService ,private _route:ActivatedRoute){}

  ngOnInit(){
    this.getProductById();
  }

  product:any = {};
  id = this._route.snapshot.params['id'];
  getProductById(){
    this.service.getProductById(this.id).subscribe((res:any)=>{
      console.log(res);
      
      this.product= res
      
    }
    // , error => {
    //   alert(error)
  
    // }
    )
    }

}