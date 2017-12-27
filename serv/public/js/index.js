function getData() {
    let steamName = $('.steam-name').val(),
        vkLink = $('.vk-link').val(),
        tradeUrl = $('.trade-url').val();

        let json = {"query": `mutation {userAdd(input: {steam: \"${steamName}\",trade: \"${tradeUrl}\",vk: \"${vkLink}\",file: \"${1}\"}){isDone}}` };

        $.ajax({
            type: 'POST',
            url: 'http://localhost:4000/',
            cache: false,
            timeout:3000,
            data: json,
            success: (data)=>{
                
            },
            beforeSend: function(data) { 
            },
             // Тип данных
            dataType:"html",
             // Функция сработает в случае ошибки
            error:  function(data){
                //$('#results').html('<p>Возникла неизвестная ошибка. Пожалуйста, попробуйте чуть позже...</p>');
                }
            });

    console.log(file)
    
}