import { Component } from '@angular/core';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrl: './firstcomponent.component.css',
})
export class FirstcomponentComponent {

  stringSolo: string = "";
  arrayStrings: string[] = []
  fontSize: string = "40px";

  mostraLog = () => {
    this.arrayStrings.push(this.stringSolo)
    this.stringSolo = "";
    this.fontSize = this.fontSize === "40px" ? "20px" : "40px"    
    console.log(this.arrayStrings);
  }

  attPropriedade = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    this.stringSolo = inputElement.value;
  }

  deletePropriedade = (prop: string) => {
    console.log(this.arrayStrings.indexOf(prop));
    this.arrayStrings = this.arrayStrings.filter((str) => str != prop);
  }

  upPropriedade = (prop: string) => {
    let index = this.arrayStrings.indexOf(prop);
    let [part1, part2] = this.splitArray(this.arrayStrings, prop);

    let add = part1[part1.length-1]

    part1 = part1.filter((str) => str != add)

    part1.push(prop, add, ...part2);

    this.arrayStrings = part1;
  }

  downPropriedade = (prop: string) => {
    let index = this.arrayStrings.indexOf(prop);
    let [part1, part2] = this.splitArray(this.arrayStrings, prop);

    let add = part2[0]

    part2 = part2.filter((str) => str != add)

    part1.push(add, prop, ...part2);

    this.arrayStrings = part1;  }

  splitArray(arr: string[], separator: string): [string[], string[]] {
    const index = arr.indexOf(separator);
    
    if (index === -1) {
        return [arr, []];
    }

    const firstPart = arr.slice(0, index);
    const secondPart = arr.slice(index + 1);

    return [firstPart, secondPart];
}

}
