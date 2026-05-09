# Pseudocodigo (ES)

1. Definir interfaz `Channel` con metodo `send(message)`.
2. Crear implementaciones `EmailChannel` y `SmsChannel`.
3. Crear clase `Notifier` que reciba un `Channel` por constructor.
4. `Notifier.notify(message)` delega en `channel.send(message)`.
5. Cambiar canal sin tocar la clase `Notifier`.

## Idea clave

La composicion reduce acoplamiento porque reemplaza comportamiento por inyeccion,
en lugar de forzar extensiones por herencia.
