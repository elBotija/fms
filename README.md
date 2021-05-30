# Maquina de estados

Concepto de maquina de estado para definir un proyecto en base a un JSON.

## Maquina de estado Semaforo
Es una FMS de un semaforo, que hacepta por parametros el tiempo de cambio y un parametro extra para extender el tiempo segun el momento del dia.

- Arrancar FMS
```
yarn install
node semaforo.js
```

## Maquina de estado Pedido
Es una FMS que mediante un json de configuracion decide si puede avanzar o no de vista, y ejecuta validaciones y muestra errores. Al no tener interfaz, ejecuta una funcion test que permite agregar los datos necesarios para que avance los estados.

- Arrancar FMS
```
yarn install
node pedido.js
```

## Maquina de estado Pedido con Front

Usamos json-server para persistir las orders, guardar la config y el appState.
- Arrancar db
```
yarn install
json-server --watch --port=5000 fakeData/db.js
```

- Arrancar front
```
cd front
yarn install
yarn start
```
- Arrancar FMS
```
yarn install
node pedido2.js
```
