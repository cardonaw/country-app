import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ) )
      )
      .subscribe( country => {
        if ( !country ) return this.router.navigateByUrl('');
        return this.country = country;
      })


    //DISTINTAS MANERAS DE HACERLO


    // this.activatedRoute.params
    //   .subscribe(({ id }) => {

    //     this.countriesService.searchCountryByAlphaCode( id )
    //       .subscribe( country => {
    //         console.log({ country })
    //       })



    //     // this.searchCountry(id)

    //   })


    // throw new Error('Method not implemented.');
  }

  // searchCountry(code: string) {
  //   this.countriesService.searchCountryByAlphaCode( code )
  //     .subscribe(country => {
  //       console.log({ country })
  //     })
  // }




}
