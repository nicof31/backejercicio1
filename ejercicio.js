class ResponsableContador {
    static contadorGlobal = 0;
  
    constructor(responsable) {
      this.responsable = responsable;
      this.cuentaIndividual = 0;
    }
  
    getResponsable() {
      return this.responsable;
    }
  
    contar() {
      this.cuentaIndividual++;
      ResponsableContador.contadorGlobal++;
    }
  
    getCuentaIndividual() {
      return this.cuentaIndividual;
    }
  
    getCuentaGlobal() {
      return ResponsableContador.contadorGlobal;
    }
  }
  
  
  
  
  // Creo instancias de Contador para nuevo responsable
  const contador1 = new ResponsableContador("Nicolas");
  const contador2 = new ResponsableContador("Matias");
  const contador3 = new ResponsableContador("Bruno");

  
  contador1.contar();
  contador2.contar();
  contador3.contar();

    
  // Obtengo el responsable de cada contador
  console.log(`Responsable Contador 1: ${contador1.getResponsable()}`); 
  console.log(`Responsable Contador 2: ${contador2.getResponsable()}`); 
  console.log(`Responsable Contador 3: ${contador3.getResponsable()}`); 
  
  
  // Obtengo los resultados de los contadores individual
  console.log(`Cuenta Invidual 1: ${contador1.getCuentaIndividual()}`); 
  console.log(`Cuenta Invidual 2: ${contador2.getCuentaIndividual()}`); 
  console.log(`Cuenta Invidual 3: ${contador3.getCuentaIndividual()}`); 

  //Muestro el resultado del contador glabal  
  console.log(`Cuenta Global: ${ResponsableContador.contadorGlobal}`);
  
  