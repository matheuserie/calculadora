function somarNumeros(num1, num2) {
    let result = num1 + num2;
    return result;
}

$(document).ready(function() {

    $("#btnSomar").click(function() {
        let n1 = Number($("#numero1").val());
        let n2 = Number($("#numero2").val());

        let soma = somarNumeros(n1, n2);

        $("#resultado").val(soma);

    });

});