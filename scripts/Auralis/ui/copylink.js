export class CopyLink {
    constructor(dom) {
        this.DOM = dom;

        this.DOM.add(".il-footer-permanent-url");
        this.DOM.add(".auralis-permanent-link-button");
        this.DOM.add(".auralis-mobile-permanent-link-button");
    }

    Init() {
        this.ModifyPermanentLink(this.DOM);
    }

    GetPermanentLinkFromScript() {
        const scripts = document.querySelectorAll('script');

        let dynamicLink = null;

        scripts.forEach(script => {
            const text = script.textContent;
            if (text.includes('il.Footer.permalink.copyText')) {
                const match = text.match(/copyText\(["'](.+?)["']\)/);
                if (match) {
                    dynamicLink = match[1].replace(/\\\//g, '/'); // Backslashes entfernen
                }
            }
        });
        dynamicLink = dynamicLink.replace('goto.php', 'go');
        return dynamicLink;
    }

    ModifyPermanentLink(dom) {
        const permanentLinkDiv = dom.get(".il-footer-permanent-url");
        const linkButtonDiv = dom.get(".auralis-permanent-link-button");
        const linkButtonMobileDiv = dom.get(".auralis-mobile-permanent-link-button");

        if(!permanentLinkDiv) {
            if (linkButtonDiv) {
                linkButtonDiv.remove();
            }
            if (linkButtonMobileDiv) {
                linkButtonMobileDiv.remove();
            }
            return;
        }
        if(!linkButtonDiv) return;
        if(!linkButtonMobileDiv) return;

        const dynLink = this.GetPermanentLinkFromScript();
        if(!dynLink) return;

        const button = permanentLinkDiv.querySelector('button');
        if (button) {
            linkButtonMobileDiv.id = button.id;
            linkButtonDiv.id = button.id;

            linkButtonDiv.addEventListener('click', () => {
                il.Footer.permalink.copyText(dynLink);
                this.CopyLinkToClipboard(dynLink);
            });
            linkButtonMobileDiv.addEventListener('click', () => {
                il.Footer.permalink.copyText(dynLink);
                this.CopyLinkToClipboard(dynLink);
            });

            linkButtonDiv.addEventListener('mouseenter', () => this.HoverCopyLinkToClipboard(linkButtonDiv));
            linkButtonDiv.addEventListener('mouseleave', () => clearTimeout(linkButtonDiv._hoverTimeout));

            permanentLinkDiv.remove();
        }
    }

    CopyLinkToClipboard(link) {
        const viewbox_delay = 2000;

        // create dialogBox for link-copy information
        const dialogBox = document.createElement('div');
        dialogBox.textContent = `Der Link wurde in die Zwischenablage kopiert.\n${link}`;

        // add ui_hsu_dialogBox from 090-custom/copyLink
        dialogBox.classList.add('ui_auralis_dialogBox');
        document.body.appendChild(dialogBox);

        // create fade-in transition
        setTimeout(() => {
            dialogBox.style.opacity = '1';
        }, 10);

        // create fade-out transition and delete dialogBox after fade-out
        setTimeout(() => {
            dialogBox.style.opacity = '0'; // Ausblenden
            setTimeout(() => dialogBox.remove(), 300); // Element aus DOM entfernen
        }, viewbox_delay);
    }

    HoverCopyLinkToClipboard(button) {
        // Tooltip nach 1,5 Sekunden anzeigen
        button._hoverTimeout = setTimeout(() => {
            const dialogBox = document.createElement('div');
            dialogBox.textContent = 'Klicke, um den Link der Seite zu kopieren.';
            dialogBox.classList.add('ui_auralis_dialogBox');
            document.body.appendChild(dialogBox);

            const rect = button.getBoundingClientRect();
            dialogBox.style.position = 'absolute';
            dialogBox.style.top = `${rect.top - 20}px`;
            dialogBox.style.left = `${rect.left + 160}px`;
            dialogBox.style.padding = '5px 10px';
            dialogBox.style.opacity = '0';
            dialogBox.style.backgroundColor = '#feffdd';
            dialogBox.style.transition = 'opacity 0.3s';

            setTimeout(() => dialogBox.style.opacity = '1', 10);

            // Tooltip ausblenden bei Mausbewegung oder Verlassen
            const removeTooltip = () => {
                dialogBox.style.opacity = '0';
                setTimeout(() => dialogBox.remove(), 300);
                button.removeEventListener('mouseleave', removeTooltip);
                button.removeEventListener('mousemove', removeTooltip);
            };

            button.addEventListener('mouseleave', removeTooltip);
            button.addEventListener('mousemove', removeTooltip);

        }, 1500);
    }
}
