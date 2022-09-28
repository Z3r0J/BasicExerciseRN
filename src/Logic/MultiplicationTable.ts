export class MultiplicationTable{

        generateTable = (number:number):any =>{
            
            let Table:string[] = [];
            for (let index = 1; index <= 13; index++) {
                Table.push(`${number} x ${index} = ${number*index}`)
            }
            return Table;
        }
}