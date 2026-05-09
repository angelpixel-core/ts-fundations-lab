export type ClaimEvaluation = {
  claim: string;
  verdict: "verdadero" | "falso";
  reason: string;
};

export function solveBigOArrayClaims(): ClaimEvaluation[] {
  return [
    {
      claim: "Acceder por indice en un array es O(1)",
      verdict: "verdadero",
      reason: "El acceso directo por indice usa posicion de memoria en tiempo constante."
    },
    {
      claim: "Insertar al inicio de un array siempre es O(1)",
      verdict: "falso",
      reason: "Normalmente requiere corrimiento de elementos, por eso suele ser O(n)."
    },
    {
      claim: "Recorrer un array completo es O(n)",
      verdict: "verdadero",
      reason: "Se visita cada elemento una vez."
    },
    {
      claim: "Eliminar al final de un array es O(n)",
      verdict: "falso",
      reason: "Eliminar al final (pop) no requiere corrimientos y suele ser O(1)."
    }
  ];
}
