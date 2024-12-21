# Exercici 1 – Preguntes teòriques sobre formularis Angular (1.5 punts)

## a) Quines són les principals diferències entre formularis dirigits per plantilla i formularis reactius?

### Formularis dirigits per plantilles:
- Fàcil d’utilitzar.
- Asíncrons.
- Preferiblement aplicable a formularis senzills, sense grans complexitats.
- Estructura similar a la d’Angular 1.
- Utilitza l’enllaç de dades bidireccional amb la sintaxi `[(NgModel)]`.
- Proves unitàries complicades de realitzar.
- El desenvolupament de la lògica es realitza principalment en la plantilla HTML.
- Utilitza el mòdul `FormsModule`.
- Model de dades desestructurat.

### Formularis reactius:
- Més flexible, però requereix major experiència d’ús.
- Síncrons.
- Recomanable per a formularis més complexos.
- No es realitza l’enllaç de les dades.
- Proves unitàries més senzilles de realitzar.
- El desenvolupament de la lògica es realitza principalment en la part del component.
- Utilitza el mòdul `ReactiveFormsModule`.
- Model de dades estructurat.

## b) Què són, per a què serveixen i com s’utilitzen les directives ngModel i ngModelChange?

Les directives `ngModel` i `ngModelChange` proporcionen la possibilitat d’obtenir un enllaç entre un component i les dades del formulari de la seva respectiva plantilla. Aquest enllaç funciona en ambdós sentits, podent passar dades des de la vista cap al component i viceversa.

Per a poder aplicar aquesta directiva, primer de tot cal importar `FormsModule` en el mòdul de la nostra aplicació.

Un cop importat i tenint en compte el següent `input` d’exemple:

    <input type="text" name="wineName"></input>

Per a poder crear l’enllaç **Vista → Component**, només cal afegir la directiva `ngModel`, entre claudàtors, a l'_input_ i indicar el camp del component que volem seguir, per exemple, `wine.name`.

    <input type="text" [ngModel]="wine.name"></input>

D’aquesta manera, es mostrarà el valor de la propietat `name` de l’objecte `wine`, dins l’input en carregar la pàgina.

Per a crear l’enllaç en l’altre sentit, **Component → Vista**, s’utilitza la directiva `ngModelChange` entre parèntesis.

    <input type="text" [ngModel]="wine.name" (ngModelChange)="wine.name = $event"></input>

Amb aquest canvi, sempre que el valor de l'_input_ es modifiqui, s’assignarà automàticament a `wine.name` en el controlador.

També hi ha una manera més senzilla de realitzar el _binding_, per als casos en què no és necessari realitzar una operació prèvia sobre el valor actualitzat de l’`input`. En aquestes situacions, es pot aplicar la sintaxi `[(ngModel)]`:

    <input type="text" [(ngModel)]="wine.name"></input>

Així, simplifiquem el codi sense canviar i obtenint el mateix resultat que l’exemple anterior.

### c) Què són, quins són i per a què serveixen els estats en els formularis dirigits per plantilles?

Amb l’ús de la directiva `ngModel`, és possible fer un seguiment dels estats per als controls enllaçats. Angular afegeix de forma automàtica, una sèrie de classes CSS als controls per determinar el seu estat. Els estats aplicats són els següents:

| Estats                           | Classe CSS si <br/> `true` | Classe CSS si <br/> `false` |
|----------------------------------|:-------------------------:|:--------------------------:|
| El control ha estat visitat      |        ng-touched         |       ng-untouched         |
| El valor del control ha canviat  |         ng-dirty          |        ng-pristine         |
| El valor del control és vàlid    |         ng-valid          |         ng-invalid         |

Aquests estats són especialment útils durant el procés de validació dels formularis, on un ús habitual és la presentació de missatges d’error en els controls invàlids.

### d) Quins avantatges aporten els FormGroup en la composició de formularis?

En utilitzar FormGroup, s’obtenen les referències dels diferents controls que componen el formulari, agrupades en un únic objecte. Això és especialment útil per saber si un formulari és vàlid sense haver de verificar cadascun dels controls individualment. Un altre ús habitual seria l’opció de canviar el valor de tots els controls, per exemple, resetejant el valor de tots els camps del formulari al mateix temps.
