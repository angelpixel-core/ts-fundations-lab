# Pseudocodigo de razonamiento (ES)

1. Detectar palabra absoluta: "siempre".
2. Verificar si depende de implementacion.
3. Comparar casos:
   - Queue con `shift`: hay corrimientos (O(n)).
   - Queue con puntero `head`: no hay corrimientos por operacion (O(1) amortizado).
4. Concluir: la afirmacion es falsa por ser absoluta y dependiente de implementacion.
