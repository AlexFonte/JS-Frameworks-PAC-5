## Exercici 4 – Preguntes teòriques sobre formularis reactius Angular (1.5 punts)

### a) Què són, per a què serveixen i com es fan servir FormControl, FormGroup i FormBuilder?

- `FormControl`:  representa un control individual d’un formulari. Es el encarregat de realitzar el seguiment i asignació dels vlaors inicials de control jutament amd els seus validadors.
Serveix per emmagaetsemar l'estat de control del formulari com el valor de saber si es valid o no, si ha modificat, o ha tingut un `focus`.

Es crea un FormControl en TypeScript amb un valor inicial i opcionalment es pot afegir validacions.
> import { FormControl, Validators } from '@angular/forms';
>
>const control = new FormControl('valor inicial', [Validators.required, Validators.minLength(3)]);`

- `FormGroup`: Agrupapa un congjunt de `FormControl` del formulari. Aixo permet accedir a un unic objecte que contingui tots els controls del formulari, puguen verificar si el formulari es valid o no, sense la necessitat de anar un per un.
  
>import { FormGroup, FormControl } from '@angular/forms';
>
>const formGroup = new FormGroup({ nom: new FormControl('', Validators.required), correu: new FormControl('', [Validators.required, Validators.email])});

- `FormBuilder`: Simplifica el codi necesari per contruir formularis, princpalment cuan son masa complexos. Amb `FormBuilder` evitem repetir creacoins d'instancies de `FormControl`, `FormGroup` o `FormArray`.

>import { FormBuilder, FormGroup, Validators } from '@angular/forms';
>
>constructor(private fb: FormBuilder) {}
>
>crearFormulario(): FormGroup {
  return this.fb.group({
    nom: ['', Validators.required],
    correu: ['', [Validators.required, Validators.email]]
  });
>}
### b) Cerca a la pàgina oficial d'Angular (o utilitza un recurs de O’Reilly) en què s'especifiquin tots els validadors que inclou Angular per ser utilitzats en els formularis reactius. Construïu una taula de resum d'aquests.

### c) Què són, quins són i per a què serveixen els estats en els formularis reactius?