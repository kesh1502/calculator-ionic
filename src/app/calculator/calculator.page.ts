import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage {
 
    /*
       Works by taking the value as variable symbol,
       1) The program 1st check if the calculator can take a new input in case it needs to concatenate numbers for 
          more than 1 digit numbers then using the parseInt function, it checks if it is a number.
       2) If it is a number, it is stored in the variable value, if the next input is as well a number then 
          it concatenates the new digit entere dwith the number.
       3) If it is a symbol(+-/*) then a variable lastOperator is used to store the symbol the last operator,
          the value is as well stored on another variable known as oldValue to clear the way for the next value
          to be entered and used for operation purpose.
       4) If it is the equal to(=) symbol then, the program checks the lastOperator variable and does the operation
          with the last(value variable) and old(oldValue variable) value.
       5) Lastly, if the symbol is equak to C, the calculator resets all the variables and values.
    */
  
    constructor(){}
  
    value = '0';
    oldValue = '0';
    operation = "";
  
    lastOperator = 'x';
    readyForNewInput = true;
    numberGroups = [
      [7, 8, 9, 'x'],
      [4, 5, 6, '-'],
      [1, 2, 3, '+'],
      [0, 'C', '/', '=']
    ];
  
    onButtonPress(symbol) {
      console.log(symbol);
  
      if ((parseInt(symbol))||(symbol === 0)) {
        console.log('is a number');
        if (this.readyForNewInput){
          this.value = '' + symbol;
        }else{
          this.value += '' + symbol;
        }
        this.readyForNewInput = false;
        this.operation =  this.operation + symbol;
      }
      else if (symbol === 'C') {
        this.value = '0';
        this.readyForNewInput = true;
        this.operation = " "; 
      }
      else if (symbol === '=') {
        if (this.lastOperator === 'x'){
          this.operation =  this.oldValue + "*" +this.value;
          this.value = '' + (parseInt(this.oldValue) * parseInt(this.value));
        }else if (this.lastOperator === '-'){
          this.operation =  this.oldValue + "-" +this.value;
          this.value = '' + (parseInt(this.oldValue) - parseInt(this.value));
        }else if (this.lastOperator === '+'){
          this.operation =  this.oldValue + "+" +this.value;
          this.value = '' + (parseInt(this.oldValue) + parseInt(this.value));
        }else if (this.lastOperator === '/'){
          this.operation =  this.oldValue + "/" +this.value;
          this.value = '' + (parseInt(this.oldValue) / parseInt(this.value));
        }
        this.readyForNewInput = true;
      }
      else { // operator
        this.readyForNewInput = true;
        this.oldValue = this.value;
        this.lastOperator = symbol;
        if (this.lastOperator === 'x'){
          this.operation =  this.operation + "*";
        }else{
        this.operation = this.operation + symbol;
        }
      }
    }
  }
  