let escolhacpf = document.getElementById("tipocpf");
escolhacpf.onclick = function () {
    document.getElementById("escolhacpf").style.display = "block";
    document.getElementById("escolhacnpj").style.display = "none";
    document.getElementById("cnpj").value = "";
    document.getElementById("cpf").required = true;
    document.getElementById("cnpj").required = false;
}
let escolhacnpj = document.getElementById("tipocnpj");
escolhacnpj.onclick = function () {
    document.getElementById("escolhacnpj").style.display = "block";
    document.getElementById("escolhacpf").style.display = "none";
    document.getElementById("cpf").value = "";
    document.getElementById("cnpj").required = true;
    document.getElementById("cpf").required = false;
}
window.onload = function () {
    const cpfInput = document.getElementById("cpf"); 
    Inputmask("999.999.999-99").mask(cpfInput);

    const cnpjInput = document.getElementById("cnpj");
    Inputmask("99.999.999/9999-99").mask(cnpjInput);

    const telInput = document.getElementById("telefone");
    Inputmask("(99) 99999-9999").mask(telInput);

    const cepInput = document.getElementById("cep");
    Inputmask("99999-999").mask(cepInput);

    const dataNascInput = document.getElementById("data_nasc");
    Inputmask("99/99/9999").mask(dataNascInput);
}