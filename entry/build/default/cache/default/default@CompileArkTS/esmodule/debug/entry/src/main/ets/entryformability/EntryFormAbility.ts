import formBindingData from "@ohos:app.form.formBindingData";
import formInfo from "@ohos:app.form.formInfo";
import FormExtensionAbility from "@ohos:app.form.FormExtensionAbility";
import type Want from "@ohos:app.ability.Want";
export default class EntryFormAbility extends FormExtensionAbility {
    onAddForm(want: Want): formBindingData.FormBindingData {
        // Called to return a FormBindingData object.
        let formData: Record<string, string | Object> = {};
        return formBindingData.createFormBindingData(formData);
    }
    onCastToNormalForm(formId: string): void {
        // Called when the form provider is notified that a temporary form is successfully
        // converted to a normal form.
    }
    onUpdateForm(formId: string): void {
        // Called to notify the form provider to update a specified form.
    }
    onChangeFormVisibility(newStatus: Record<string, number>): void {
        // Called when the form provider receives form events from the system.
    }
    onFormEvent(formId: string, message: string): void {
        // Called when a specified message event defined by the form provider is triggered.
    }
    onRemoveForm(formId: string): void {
        // Called to notify the form provider that a specified form has been destroyed.
    }
    onAcquireFormState(want: Want): formInfo.FormState {
        // Called to return a {@link FormState} object.
        return formInfo.FormState.READY;
    }
}
;
