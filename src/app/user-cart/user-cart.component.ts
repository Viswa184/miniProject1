import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent {


  jsonData:any[]=[];
  message:string='';
  totalamount:any;

  constructor(private serviceobj:AppServiceService,private activatedRoute: ActivatedRoute){

  }



  ngOnInit(): void {
    this.serviceobj.getcartdata().subscribe(data => {
      this.jsonData = data;
      if(this.jsonData.length == 0){
        this.message = "No items";
      }
    });
  }

  remove(id:any):void{
    this.serviceobj.removecart(id).subscribe(res=>{
      this.ngOnInit();
      alert('Item Deleted Sucessfully');
    },err=>{
      alert('unable to delete the record');
    })

  }


  updateTotalPrice(item: any, user: any) {
    const value = parseInt(item.target.value);
    user.totalPrice = value*user.price;
  }
  async saveCartItems() {
    var totalPrice = 0;
    let httpCalls: Observable<any>[] = [];
    this.jsonData.forEach(element => {
      totalPrice = totalPrice + parseInt(element.totalPrice);
    }); 
  }

}
