# Analisis

## Conceptos evaluados

- Encapsulacion: el estado interno no se expone directamente.
- Cohesion: todos los metodos pertenecen al dominio de prestamo.
- Responsabilidad unica: la clase no mezcla marketing ni otras areas.

## Trampa comun

Agregar metodos como `sendMarketingEmail()` en esta clase rompe cohesion.
Ese comportamiento deberia vivir en otro servicio/componente.
