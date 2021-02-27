import { Component, DoCheck, Inject, OnInit, Optional } from '@angular/core';
import { CartService } from '../cart/services/cart.service';
import { ConfigOptionsService } from '../core/services/config-options.service';
import { ConstantsService, TaskManagesConst } from '../core/services/constants.service';
import { generatorFactory } from '../core/services/generator.factory';
import { GENERATE_STRING, GeneratorService } from '../core/services/generator.service';
import { LocalStorageService } from '../core/services/local-storage.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [
    { provide: ConstantsService, useValue: TaskManagesConst },
    { provide: GENERATE_STRING, useFactory: generatorFactory(5), deps: [GeneratorService] },
    { provide: LocalStorageService }
  ]
})
export class FirstComponent implements DoCheck, OnInit {

  isTotalQuantityVisible = false;
  isLogInButtonVisible = true;
  totalQuantity: number;
  userName: string;

  public generatedString: string;

  constructor(
    private cartService: CartService,
    @Inject(GENERATE_STRING) private generator: string,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private constantService: ConstantsService,
    @Optional() private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    this.configOptionsService.setUser(1, 'user', 'test@gmail.com', '', new Date());
    const user = this.configOptionsService.getUser();
    this.userName = user.login;
    console.log(user);
    console.log(this.constantService);
    console.log('Generated token:', this.generator);
    this.localStorageService.setItem(user.id.toString(), user.login);
    console.log('Getting user login from local storage:'+this.localStorageService.getItemByKey(user.id.toString()));
  }

  ngDoCheck(): void {
    this.totalQuantity = this.cartService.getTotalQuantity();

    if (this.totalQuantity <= 0) {
      this.isTotalQuantityVisible = false;
    } else {
      this.isTotalQuantityVisible = true;
    }
  }

  logInClick(): void{
    this.isLogInButtonVisible = !this.isLogInButtonVisible;
  }
}
