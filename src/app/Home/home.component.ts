import { Component } from '@angular/core'

@Component ({
   selector: 'home',
   templateUrl: './home.component.html',
   styleUrls:['./home.component.css'],
})

export class HomeComponent{
    title = 'Hola Soy';
    name = 'Johan Villegas';
    description = 'Nunca Desistas de un sueño. Solo trata de ver las señales que te lleven a el.';
    imgLogo='https://www.dropbox.com/s/x6vovmd9wnq6hcg/Logo%20JVsf.png?raw=1';
    //imgLogo='https://7out0q.bn1303.livefilestore.com/y4pm44blQQ-NGFxzvre3S0MAaRJWwFWi7FM20oUq7igIh6fdA1dGOUSyXbR126RjrpRXaLQv1DEZgjZHtWQsvM1hq5a1WnUWmCAhHsUMHRT4NKhk20z9AMQBfOwLucz8L7WqHHeC-gSq37aFKpH-x5BZjZ9Z7r-_pYx6mrUZrsBHci9PrzzviwgQOWGQxVkC86l76JlP_BFsaOB51VM7xUe-A/Logo%20JVsf.png?psid=1';
    //imgLogo ='https://7ouu0q.bn1303.livefilestore.com/y4pRT8IIeMScgEfTNRGeWoWS-m4kSEcKU4eLERzNk7b5RDqKXsXhXg43YbNLY6gEb8NYv3yiVsRl9hFjjBnEkLiqUaEaGvZE2NzGn74Pi9G5mqULqLoE21Sn45PnnKlk6bZT02T2omJIc7SrkVf1f5bQwCEonXxU1IgaMu3zviR4DLJyFgiKVaQnZDTf5STliK69FvqUJap-4nZ3r0L_x-Owg/Logo%20JV.png?psid=1';
    //imgBackground = 'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb';
    //imgBackground = 'https://static1.squarespace.com/static/52d6c84ee4b06286127964e3/t/5601cea1e4b05de5c1df3241/1442959010573/happy-squarespace-developer-1.jpg?format=1500w';
    imgBackground = 'https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb';
    //imgBackground ='https://images.pexels.com/photos/159368/laptop-iphone-coffee-notebook-159368.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb';
}