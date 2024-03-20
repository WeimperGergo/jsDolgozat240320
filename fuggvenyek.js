import { MACSKAK } from "./adatok.js";

export function main() {
    const TARTALOMELEM = document.querySelectorAll(".tartalom");
    TARTALOMELEM[0].innerHTML = macskakMegjelenit(MACSKAK);
    szinValtHover();
    kivalasztottak(MACSKAK)
}

function macskakMegjelenit(LISTA) {
    let txt = `<table><tr>
        <th>Név</th>
        <th>Súly (kg)</th>
        <th>Befogadható</th>
        </tr>
    `;
    for (let i = 0; i < LISTA.length; i++) {
        let befogadh = "nem";
        if (LISTA[i].befogadhato) befogadh = "igen";
        txt += `
        <tr>
            <td>${LISTA[i].nev}</td>
            <td>${LISTA[i].suly}</td>
            <td>${befogadh}</td>
        </tr>
        `
    }
    txt += `</table>`;
    return txt;
}

function szinValtHover() {
    const TABLASORELEM = document.querySelectorAll("th");
    const TABLASORBLOKKELEM = document.querySelectorAll("td");
    for (let i = 0; i < TABLASORBLOKKELEM.length; i++) {
        TABLASORBLOKKELEM[i].addEventListener("onmouseover", function(event) {
            TABLASORBLOKKELEM[i].classList.add("kiv");
        });      
    }

    for (let i = 0; i < TABLASORELEM.length; i++) {
        TABLASORELEM[i].addEventListener("onmouseover", function(event) {
            TABLASORELEM[i].classList.add("kiv");
        });      
    }
}

function kivalasztottak(LISTA) {
    const ELEMEK = document.querySelectorAll(".tartalom table tr td");
    const MEGJELENIT = document.querySelectorAll(".kivalasztott");
    for (let i = 0; i < ELEMEK.length; i++) {
        ELEMEK[i].addEventListener("click", function(event) {
            MEGJELENIT.innerHTML += `${LISTA[i]}`;
        });      
    }
}

