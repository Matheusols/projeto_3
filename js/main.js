$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true
            },
            telefone:{
                required:true
            }
            },
            messages:{
                nome: 'Insira seu nome',
                email: 'Insira seu e-mail',
                telefone: 'Insira seu telefone',
                mensagem: 'Insira sua mensagem'
            }
    })
})