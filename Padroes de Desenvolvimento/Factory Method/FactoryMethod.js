class computerFactory{
  constructor(ram, hdd, cpu, type){
      let computer = {};
      computer._ram = ram;
      computer._hdd = hdd; 
      computer._cpu = cpu;
      computer._type = type;

      computer.getRam   = () => {console.log(`RAM   = [${this._ram} Gb]`)};
      computer.getHdd   = () => {console.log(`HD    = [${computer._hdd} Gb]`)};
      computer.getCpu   = () => {console.log(`CPU   = [${computer._cpu} GHz]`)};
      computer.getType  = () => {
        let computerType =  computer._ram <= 16 ? "[PC]" : "[SERVER]";
        console.log(`Type  = ${computerType}`)
      };

      return computer;
      
  }
}

let newComputer = new computerFactory(64,500,3.4);
let newComputer2 = new computerFactory(8,500,2.2);
newComputer.getRam();
newComputer.getHdd();
newComputer.getCpu();
newComputer.getType();

console.log(`\n----`)
newComputer2.getRam();
newComputer2.getHdd();
newComputer2.getCpu();
newComputer2.getType();


