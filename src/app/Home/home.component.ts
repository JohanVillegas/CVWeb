import { Component } from '@angular/core'

@Component ({
   selector: 'home',
   templateUrl: './home.component.html',
   styleUrls:['./home.component.css'],
})

export class HomeComponent{
    title = 'Hola Soy';
    name = 'Johan Villegas';
    position = 'Software Engineer';
    description = 'Nunca Desistas de un sueño. Solo trata de ver las señales que te lleven a el.';
    imgLogo='https://www.dropbox.com/s/x6vovmd9wnq6hcg/Logo%20JVsf.png?raw=1';
    imgBackground = 'https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb';
}