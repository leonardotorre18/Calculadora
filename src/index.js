alert('hola')
class Calculator {
  result
  method
  number
  
  constructor(){
    this.result = false;
    this.number = false;
    this.method = false;
  }
  
  setMethod (method) {
      this.method = method || false;
  }
  getResult () {
      return this.result || 0;
  }

  add (number) {
    this.result += number;
  }
  sustract (number) {
    this.result -= number;
  }
  multiple (number) {
    this.result *= number;
  }
  divide (number) {
    this.result /= number
  }
  executeOperation (number) {
    
    if (this.method){
      
      if(this.method == 'add'){
        this.add(number);
      } 
      else if (this.method == 'sustract') {
        this.sustract(number);
      } 
      else if (this.method == 'multiple') {
        this.multiple(number);
      } 
      else if (this.method == 'divide') {
        this.divide(number);
      }

    } else this.result = number

    this.setMethod(false)

  }

}
const cal = new Calculator();
