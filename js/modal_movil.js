$('.galeria__img').click(function(e){
    var img = e.target.src;
    var modal = '<div class="modal" id="modal"><img src="'+img+'" class="modal__img"><div style="cursor:pointer" class="modal__boton" id="modal__boton">X</div></div>';

    $('body').append(modal);
    $('#modal__boton').click(function(){
        $('#modal').remove();
    })
})