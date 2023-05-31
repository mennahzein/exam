import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
 products: any[]=[];

 categories:any[]=[];

 constructor(private service: ProductsService){

 }
 ngOnInit(): void {
   this.getProducts()
   this.getCategoriess()

 }
 getProducts(){
  this.service.getAllProducts().subscribe((res:any)=>{
    console.log(res);
    
    this.products= res
    
  }, error => {
    alert("error")

  }
  )
  }

  getCategoriess(){
    this.service.getAllCategories().subscribe((res:any)=>{
      console.log(res)
     
      this.categories = res
      
    }, error => {
      alert("error")
  
    })
    } 
    filterCategory(event:any){
      let value = event.target.value;      
      this.getProductsCategory(value)
    }
    getProductsCategory(keyword:string){
      this.service.getProductsByCategories(keyword).subscribe((res:any)=>{
        
        this.products = res


      })
    }

    // changeUrl(id){
      
    // }
  
  }