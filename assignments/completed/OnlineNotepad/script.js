const textarea = document.getElementById("textarea");
const featureFlag = document.getElementById("feature-flag");

(function getNotesFromLocal() {
    let data = localStorage.getItem("autosave-data");
    textarea.value = data;
});

featureFlag.addEventListener("change", () => {
    let autoSave;
    if (featureFlag.checked) {
        autoSave = setInterval(() => {
            localStorage.setItem("autosave-data", textarea.value);
        }, 1000);
    } else clearInterval(autoSave);
});
