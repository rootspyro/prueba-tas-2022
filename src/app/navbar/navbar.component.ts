import { Component, OnInit } from "@angular/core"
import { faShoppingCart, faBars, faStore} from "@fortawesome/free-solid-svg-icons"
import { CartService } from "../services/cart.service";    
import { map } from "rxjs/operators"
import {Observable} from "rxjs";


@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})

export class NavbarComponent implements OnInit {
    
    total$ : Observable<number> ;
    
    constructor( private cartService : CartService ) {
        this.total$ = this.cartService.cart$
        .pipe(
            map( products => products.length )
        )
    }

    ngOnInit(){

    }


    //icons
    faShoppingCart = faShoppingCart
    faBars = faBars
    faStore = faStore

}
