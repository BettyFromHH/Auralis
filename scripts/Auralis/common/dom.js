export class DOM {
    SystemInfoHeight = 0;
    BreadcrumbsHeight = 0;
    HeaderHeight = 0;
    FooterHeight = 0;
    MainMenuWidth = 0;

    EditorContent = null;

    IsLoginScreen = false;
    IsLogoutScreen = false;
    IsDashboard = false;
    IsPageEditing = false;

    constructor(utils, scope = document) {
        this.Utils = utils;

        this.scope = scope;
        this.selectors = [];
        this.elements = {};
        this.objects = [];
        this.currentObject = "none";

        this.add(".il-system-infos");
        this.add(".breadcrumbs");
        this.add("header");
        this.add("footer");
        this.add(".il-mainbar");
        this.add(".auralis-logout-background");
        this.add(".auralis-startup-background");
        this.add(".ilDashboardMainContent");
        this.add("#il_EditPage");
        this.add(".il-layout-page-content");
    }

    addObjectClass(obj, classname) {
        if (!obj || !classname) return;
        this.objects.push({ object: String(obj), classname: String(classname) });
    }

    isObject(obj) {
        return this.currentObject === obj;
    }

    Init() {
        this.selectAll();

        const content = this.get(".il-layout-page-content");

        if (content) {
            const url = window.location.href;

            for (const entry of this.objects) {
                const { object, classname } = entry;
                if (this.Utils.checkURL(url, 'ilias.php', object)) {
                    if (!content.classList.contains(classname)) {
                        content.classList.add(classname);
                        this.CurrentObject = object;
                    }
                }
            }
        }
    }

    // Selektor hinzufügen
    add(selector) {
        if (typeof selector === "string" && selector.trim() !== "") {
            if (!this.selectors.includes(selector)) {
                this.selectors.push(selector);
            }
        }
        return this; // chaining möglich
    }

    // Alle gespeicherten Selektoren abfragen und speichern
    selectAll() {
        this.elements = {}; // reset
        this.selectors.forEach(selector => {
            this.elements[selector] = Array.from(this.scope.querySelectorAll(selector));
        });

        this.SystemInfoHeight = this.get(".il-system-infos")?.clientHeight || 0;
        this.BreadcrumbsHeight = this.get(".breadcrumbs")?.clientHeight || 0;
        this.HeaderHeight = this.get("header")?.clientHeight || 0;
        this.FooterHeight = this.get("footer")?.clientHeight || 0;
        this.MainMenuWidth = this.get(".il-mainbar")?.clientWidth || 0;

        this.EditorContent = this.get("#il_EditPage");

        this.IsLogoutScreen = !!this.get(".auralis-logout-background");
        this.IsLoginScreen = !!this.get(".auralis-startup-background");
        this.IsDashboard = !!this.get(".ilDashboardMainContent");
        this.IsPageEditing = !!this.get("#il_EditPage");

        return this.elements;
    }

    // Erstes Element für einen bestimmten Selektor holen
    get(selector) {
        const found = this.elements[selector];
        return found && found.length > 0 ? found[0] : null;
    }

    // Alle Elemente für einen bestimmten Selektor holen
    getAll(selector) {
        return this.elements[selector] || [];
    }
}
