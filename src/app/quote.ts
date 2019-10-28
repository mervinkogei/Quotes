export class Quote {

showDescription: boolean;
  // numberOfDislikes: number;
constructor(
public id: number,
public name: string,
public description: string,
public theQuote: string,
public author: string,
public postDate:string,
public numberOfLikes:number, 
public numberOfDislikes:number
)
{
  this.showDescription=false;
}
}