function validarBandeiraCartao(numeroCartao) {
    // Remove espaços ou traços do número do cartão
    const numeroLimpo = numeroCartao.replace(/[\s-]/g, '');

    // Verifica as bandeiras com base nos prefixos e tamanhos
    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(numeroLimpo)) {
        return 'Visa';
    } else if (/^5[1-5][0-9]{14}$/.test(numeroLimpo)) {
        return 'MasterCard';
    } else if (/^3[47][0-9]{13}$/.test(numeroLimpo)) {
        return 'American Express';
    } else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(numeroLimpo)) {
        return 'Discover';
    } else if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(numeroLimpo)) {
        return 'Diners Club';
    } else if (/^35[0-9]{14}$/.test(numeroLimpo)) {
        return 'JCB';
    } else if (/^8699[0-9]{11}$/.test(numeroLimpo)) {
        return 'Voyager';
    } else if (/^606282|^3841(?:[0|4|6]{1})0[0-9]{13}$/.test(numeroLimpo)) {
        return 'Hipercard';
    } else if (/^50[0-9]{14,17}$/.test(numeroLimpo)) {
        return 'Aura';
    } else if (/^2014|^2149[0-9]{11}$/.test(numeroLimpo)) {
        return 'Enroute';
    } else {
        return 'Bandeira desconhecida';
    }
}