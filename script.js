//class movie
//a)
class movie{
    constructor(title, studio, rating){
        this.title = title;
        this.studio= studio;
        this.rating = rating;
    }
}
var mymovie = new movie("kgf","zeestudio","pg-13");
console.log(mymovie.title);
console.log(mymovie.studio);
console.log(mymovie.rating);

//b)
class movie{
    constructor(title, studio, rating= "PG"){
        this.title = title;
        this.studio= studio;
        this.rating = rating;
       
    }
}
var mymovie2 = new movie("kgf","zeestudio");
console.log(mymovie2.title);
console.log(mymovie2.studio);
console.log(mymovie2.rating);

//c)
class movie{
    constructor(title, studio, rating){
        this.title = title;
        this.studio= studio;
        this.rating = rating;
    }
static getPG(movies){
    return movies.filter(movie => movie.rating == "PG");
    }
}
const movies = [
    new movie("kgf","zeestudio","pg-13"),
    new movie("kgf2","zeestudio2","PG"),
    new movie("kgf3","zeestudio3"),
];
const pgmovies = movie.getPG(movies);
pgmovies.forEach((movie) => console.log('Title: ${movie.title}, studio: ${movie.studio}, rating ${movie.rating}'));
    

//d)

class movie{
    constructor(title, studio, rating= "PG"){
        this.title = title;
        this.studio= studio;
        this.rating = rating;
       
    }
}
let casionoRoyal = new movie("casinoRoyal","Eon Productions","PG-13");
console.log(casionoRoyal);

//2). convert the UML diagram to typescript class. use number for double

class Circle {
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    get Radius(){
        return this.radius;
    }
    set Radius(radius){
        this.radius = radius;
    }
    get Color(){
        return this.color;
    }
    set Color(color){
        this.color = color;
    }
    get ToString(){
        return `"Circle[radius=${this.radius},color=${this.color}"]`
    }
    get Area(){
        return Math.PI * this.radius * this.radius;
    }
    get Circumference(){
        return Math.PI * this.radius;
    }
}
let circle = new Circle(1.0, "red")

circle.Radius = 1.1
console.log(`radius: ${circle.Radius}, color: ${circle.Color}`)
circle.Color = "green";
console.log(`
setColor: ${circle.Color}

ToString: ${circle.ToString}

getArea: ${circle.Area}

getCircumference: ${circle.Circumference}
`)

//3). write a person class to hold all the datails

class person{
    constructor(firstname,lastname,qualification,age,phoneno){
        this.firstname = firstname;
        this.lastname = lastname;
        this.qualification = qualification;
        this.age = age;
        this.phoneno = phoneno;
    }
}
let Person = new person("vasanth","sakthivel","mba",29,1234567890);
console.log(`3.person class
    ${Person.firstname}
    ${Person.lastname}
    ${Person.qualification}
    ${Person.age}
    ${Person.phoneno}
    `);


//4). write a class to calculate the uber price

class uber {
    constructor() {
      this.basefare = 60;
      this.costperkm = 15;
      this.costpermin = 2.5;
      this.bookingfee = 30;
    }
  
    calculatePrice(distanceinkm, timeinmin) {
      const distancecost = this.costperkm * distanceinkm;
      const timecost = this.costpermin * timeinmin;
  
      const totalprice = this.basefare + distancecost + timecost + this.bookingfee;
  
      return totalprice;
    }
  }

  const calculator = new uber();
  const distanceinkm = 6.0; 
  const timeinmin = 10; 
  
  const estimatedprice = calculator.calculatePrice(distanceinkm,timeinmin);
  console.log(`Estimated Uber price in INR: ${estimatedprice}`);