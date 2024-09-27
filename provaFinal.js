export function maiorNumeroDaLista(lista) {
    if (!Array.isArray(lista) || lista.length === 0) {
        return null;
    }
    let maiorIndice = 0;
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > lista[maiorIndice]) {
            maiorIndice = i;
        }
    }
    return maiorIndice;
}


export function verificarParOuImpar(numero) {
    if (typeof numero !== "number") return null;
    return numero % 2 === 0 ? "Par" : "Ímpar";
}


export function diaDaSemanaDe(numero) {
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    if (numero < 1 || numero > 7) {
        return "Número inválido";
    }
    return diasDaSemana[numero - 1];
}


export function somatorioLista(lista) {
    if (!Array.isArray(lista)) return null;
    return lista.reduce((acc, num) => acc + num, 0);
}


export function contadorDePalavras(str) {
    if (typeof str !== "string") return null;
    if (str.trim() === "") return 0;
    return str.trim().split(/\s+/).length;
}

export function saudacaoPorHora(hora) {
    
}
