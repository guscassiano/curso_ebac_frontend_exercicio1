
$(document).ready(function(){
    $('form').on('submit', function(e){
            e.preventDefault()

            const nomeTarefa = $('#task').val()
            const novaTarefa = $(`<li><p>${nomeTarefa}</p></li>`)

            $(novaTarefa).appendTo('ol')

            $('#task').val('')

            $('p').click(function(){
                $(this).css('text-decoration', 'line-through')
            })
    })
})


