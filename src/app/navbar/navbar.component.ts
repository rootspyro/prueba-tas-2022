import { Component } from "@angular/core"
import { faShoppingCart, faBars, faStore} from "@fortawesome/free-solid-svg-icons"

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})

export class NavbarComponent { 

    cartLenght : number = 0

    //icons
    faShoppingCart = faShoppingCart
    faBars = faBars
    faStore = faStore

}
