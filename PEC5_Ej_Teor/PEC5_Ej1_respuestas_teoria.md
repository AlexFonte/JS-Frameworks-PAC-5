# Exercici 1 – Preguntes teòriques sobre formularis Angular (1.5 punts)

## a) Quines són les principals diferències entre formularis dirigits per plantilla i formularis reactius?

Les principals diferències són que, mentre que els formularis dirigits per plantilla es configuren i validen principalment en el HTML, els formularis reactius gestionen aquestes tasques en **TypeScript**.

### Formularis dirigits per plantilles:
- La logica del control radica mes en el HTML i no en el component.
- Fàcil d’utilitzar.
- Asíncrons.
- Preferiblement aplicable a formularis senzills.
- Utilitza l’enllaç de dades bidireccional amb la sintaxi `[(NgModel)]`.
- Utilitza el mòdul `FormsModule`.

### Formularis reactius:
- Síncrons.
- Preferiblement aplicable a formularis més complexos.
- Sense enllaç de les dades.
- La logica de control radica en el componet i no en el HTML
- Utilitza el mòdul `ReactiveFormsModule`.

## b) Què són, per a què serveixen i com s’utilitzen les directives ngModel i ngModelChange?

Directiva `ngModel`:
    Una directiva de angular que permet crear  la realcio bidireccional (**two-way binding**) entre una propietat i el element html del formulari. Normalment s'utlitza en formularis basat en plantilles HTML (**template-driven forms**) per poder mantenir sincronitzas els valors d'entrada d'usuario (inputs) amb les propietats del component. Es a dir seveix per vincular un element del DOM amb una propietat del component.  

Directiva `ngModelChange`:
 un event **binding** associat a `ngModel` que es dispara quan el model canvia (per entrada d'usuari o modificació al component). Permet executar accions personalitzades en resposta a aquests canvis.


### c) Què són, quins són i per a què serveixen els estats en els formularis dirigits per plantilles?

Els estats en formularis dirigits per plantilles són propietats que indiquen l'estat actual de cada camp o grup de controls. Els principals són: 
  - dirty: valor change
  - valid 
  - invalid 
  - touched: com el focusin o focusout
  
Els estats ens perment de mostrar i retroalimentar el html per mostrar al usuari so les dades del formulari son correctes o no, apart  de poder des/habilitar botons segons si compleis les regles o validacions del formulari. 

### d) Quins avantatges aporten els FormGroup en la composició de formularis?
En utilitzar FormGroup, ens ajuda a organitzar i gestionar millor els formularis complexos, agrupant així els controls de formularis. Tenint així validacions que ens permeten utilitzar `valid`, `dirty`, `invalid`, etc. A més a més, tot això ens facilita la gestió de formularis.

Tot això ens permet millorar la reutilització de codi, tenint així una millor escalabilitat i mantenibilitat, ja que es poden reutilitzar en diferents components i formularis.
