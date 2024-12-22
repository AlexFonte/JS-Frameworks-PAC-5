import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NameArticleValidator {
    static forbiddenNames(forbiddenNames: string[]): (control: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
          const value = control.value?.trim();
          if (forbiddenNames.includes(value)) {
            return { forbiddenName: { value } };
          }
          return null;
        };
      }
}
