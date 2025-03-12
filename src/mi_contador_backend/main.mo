actor Contador {
  var contador : Nat = 0;

  // Función para incrementar el contador
  public func incrementar() : async Nat {
    contador := contador + 1;
    return contador;
  };

  // Función para obtener el valor actual del contador
  public query func obtener() : async Nat {
    return contador;
  };

  // Función para reiniciar el contador
  public func reiniciar() : async () {
    contador := 0;
  };
}