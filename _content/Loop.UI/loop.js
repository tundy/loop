// Pomocné funkcie prehliadača pre Loop.UI (načítava sa ako JS modul cez IJSRuntime import).

/** Ponúkne súbor na stiahnutie. */
export function downloadFile(fileName, base64, contentType) {
    const bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
    const url = URL.createObjectURL(new Blob([bytes], { type: contentType }));
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    // Niektoré prehliadače (Safari) začnú sťahovať až po kliknutí asynchrónne; hneď zrušená URL by sťahovanie pokazila.
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Jazyk prehliadača (napr. "sk-SK"). */
export function browserLanguage() {
    return navigator.language || "";
}
