//Conversões Binário -> ...
var BD = $('#entradaBD').parsley(); //Conecta Parsley ao input a ser validado
$('#entradaBD').on('input',function(){ //Evento 'input' que é ativado quando qualquer valor é inserido no input
    var digitoFinal = this.value.length - 1; //Posição do último digito
    var entrada = this.value; //Valor do input antes de ser validado
    if(BD.isValid()){ //Parsley verifica se o valor inserido é válido
        var resultado = binarioDecimal(entrada); //Se válido é feita a conversão
        if($('#entradaBD').val().length === 0){ //Previne 'NaN' quando campo é apagado e apaga resultados
            $('#resultadoBD').text("Decimal: ");
        }else{
            $('#resultadoBD').text("Decimal: " + resultado); //Mostra resultado
        }
    }else{  //Remove o último digito se inválido
        this.value = entrada.slice(0,digitoFinal); //Retira último digito e muda 'value' do input
    }
});

var BO = $('#entradaBO').parsley();
$('#entradaBO').on('input',function(){
    var digitoFinal = this.value.length - 1;
    var entrada = this.value;
    if(BO.isValid()){
        var resultado = binarioDecimal(entrada).toString(8);
        if($('#entradaBO').val().length === 0){
            $('#resultadoBO').text("Octal: ");
        }else{
            $('#resultadoBO').text("Octal: " + resultado);
        }
    }else{
        this.value = entrada.slice(0,digitoFinal);
    }
});

var BH = $('#entradaBH').parsley();
$('#entradaBH').on('input',function(){
    var digitoFinal = this.value.length - 1;
    var entrada = this.value;
    if(BH.isValid()){
        var resultado = binarioDecimal(entrada).toString(16);
        if($('#entradaBH').val().length === 0){
            $('#resultadoBH').text("Hexadecimal: ");
        }else{
            $('#resultadoBH').text("Hexadecimal: " + resultado);
        }
    }else{
        this.value = entrada.slice(0,digitoFinal);
    }
});


//Conversões Decimal -> ...
var DB = $('#entradaDB').parsley();
$('#entradaDB').on('input',function(){
    var digitoFinal = this.value.length - 1;
    var entrada = this.value;
    if(DB.isValid()){
        var resultado = decimalBinario(entrada);
        if($('#entradaDB').val().length === 0){
            $('#resultadoDB').text("Binário: ");
        }else{
            $('#resultadoDB').text("Binário: " + resultado);
        }
    }else{
        this.value = entrada.slice(0,digitoFinal);
    }
});

var DO = $('#entradaDO').parsley();
$('#entradaDO').on('input',function(){
    var digitoFinal = this.value.length - 1;
    var entrada = this.value;
    if(DO.isValid()){
        var resultado = decimalOctal(entrada);
        if($('#entradaDO').val().length === 0){
            $('#resultadoDO').text("Octal: ");
        }else{
            $('#resultadoDO').text("Octal: " + resultado);
        }
    }else{
        this.value = entrada.slice(0,digitoFinal);
    }
});

var DH = $('#entradaDH').parsley();
$('#entradaDH').on('input',function(){
    var digitoFinal = this.value.length - 1;
    var entrada = this.value;
    if(DH.isValid()){
        var resultado = decimalHexa(entrada);
        if($('#entradaDH').val().length === 0){
            $('#resultadoDH').text("Hexadecimal: ");
        }else{
            $('#resultadoDH').text("Hexadecimal: " + resultado);
        }
    }else{
        this.value = entrada.slice(0,digitoFinal);
    }
});


//Conversões Octal -> ...
var OB = $('#entradaOB').parsley();
$('#entradaOB').on('input',function(){
    var digitoFinal = this.value.length - 1;
    var entrada = this.value;
    if(OB.isValid()){
        var resultado = octalDecimal(entrada).toString(2);
        if($('#entradaOB').val().length === 0){
            $('#resultadoOB').text("Binário: ");
        }else{
            $('#resultadoOB').text("Binário: " + resultado);
        }
    }else{
        this.value = entrada.slice(0,digitoFinal);
    }
});

var OD = $('#entradaOD').parsley();
$('#entradaOD').on('input',function(){
    var digitoFinal = this.value.length - 1;
    var entrada = this.value;
    if(OD.isValid()){
        var resultado = octalDecimal(entrada);
        if($('#entradaOD').val().length === 0){
            $('#resultadoOD').text("Decimal: ");
        }else{
            $('#resultadoOD').text("Decimal: " + resultado);
        }
    }else{
        this.value = entrada.slice(0,digitoFinal);
    }
});

var OH = $('#entradaOH').parsley();
$('#entradaOH').on('input',function(){
    var digitoFinal = this.value.length - 1;
    var entrada = this.value;
    if(OH.isValid()){
        var resultado = octalDecimal(entrada).toString(16);
        if($('#entradaOH').val().length === 0){
            $('#resultadoOH').text("Hexadecimal: ");
        }else{
            $('#resultadoOH').text("Hexadecimal: " + resultado);
        }
    }else{
        this.value = entrada.slice(0,digitoFinal);
    }
});


//Conversões Hexadecimal -> ...
var HB = $('#entradaHB').parsley();
$('#entradaHB').on('input',function(){
    var digitoFinal = this.value.length - 1;
    var entrada = this.value;
    if(HB.isValid()){
        var resultado = hexaDecimal(entrada).toString(2);
        if($('#entradaHB').val().length === 0){
            $('#resultadoHB').text("Binário: ");
        }else{
            $('#resultadoHB').text("Binário: " + resultado);
        }
    }else{
        this.value = entrada.slice(0,digitoFinal);
    }
});

var HD = $('#entradaHD').parsley();
$('#entradaHD').on('input',function(){
    var digitoFinal = this.value.length - 1;
    var entrada = this.value;
    if(HD.isValid()){
        var resultado = hexaDecimal(entrada);
        if($('#entradaHD').val().length === 0){
            $('#resultadoHD').text("Decimal: ");
        }else{
            $('#resultadoHD').text("Decimal: " + resultado);
        }
    }else{
        this.value = entrada.slice(0,digitoFinal);
    }
});

var HO = $('#entradaHO').parsley();
$('#entradaHO').on('input',function(){
    var digitoFinal = this.value.length - 1;
    var entrada = this.value;
    if(HO.isValid()){
        var resultado = hexaDecimal(entrada).toString(8);
        if($('#entradaHO').val().length === 0){
            $('#resultadoHO').text("Octal: ");
        }else{
            $('#resultadoHO').text("Octal: " + resultado);
        }
    }else{
        this.value = entrada.slice(0,digitoFinal);
    }
});


// Funções de conversão
function decimalBinario(entrada){
    return parseInt(entrada).toString(2); //Transforma 'entrada' em número e em seguida converte para binário
}
function decimalOctal(entrada){
    return parseInt(entrada).toString(8); //Transforma 'entrada' em número e em seguida converte para octal
}
function decimalHexa(entrada){
    return parseInt(entrada).toString(16); //Transforma 'entrada' em número e em seguida converte para hexadecimal
}
function binarioDecimal(entrada){
    return parseInt(entrada,2); //Converte 'entrada' de binário para decimal
}
function octalDecimal(entrada){
    return parseInt(entrada,8); //Converte 'entrada' de octal para decimal
}
function hexaDecimal(entrada){
    return parseInt(entrada,16); //Converte 'entrada' de hexadecimal para decimal
}


$('.abrirbtn').on('click',abrirNav);
$('.fecharbtn').on('click',fecharNav);

function abrirNav() {
    $("#Sidenav").css('width','250px');
    $("#main").css('marginLeft','250px');
}
function fecharNav() {
    $("#Sidenav").css('width','0');
    $("#main").css('marginLeft','0');
} 


//Controle de grupos de conversão
$("#botaoBinario").on('click',function(){
    $("#grupoBinario").show();
    $("#grupoDecimal").hide();
    $("#grupoOctal").hide();
    $("#grupoHexa").hide();
});
$("#botaoDecimal").on('click',function(){
    $("#grupoBinario").hide();
    $("#grupoDecimal").show();
    $("#grupoOctal").hide();
    $("#grupoHexa").hide();
});
$("#botaoOctal").on('click',function(){
    $("#grupoBinario").hide();
    $("#grupoDecimal").hide();
    $("#grupoOctal").show();
    $("#grupoHexa").hide();
});
$("#botaoHexa").on('click',function(){
    $("#grupoBinario").hide();
    $("#grupoDecimal").hide();
    $("#grupoOctal").hide()
    $("#grupoHexa").show();
});