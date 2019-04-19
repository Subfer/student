$(function () {
    $('input#nameFF, input#contactFF, input#telFF, textarea#projectFF').unbind().blur(function () {
        let id = $(this).attr('id');
        let val = $(this).val();

        switch (id) {
            case 'nameFF':
            (val.length > 2) ? noError(this) : showErrorMsg(this);            
            break;

            case 'contactFF':
            const rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+$/i;
            (val !== '' && rv_email.test(val)) ? noError(this) : showErrorMsg(this);            
            break;

            case 'telFF':
            const rv_tel = /^\d[\d\(\)\ -]{4,14}\d$/;
            (val.length > 2 && val !== '' && rv_tel.test(val)) ? noError(this) : showErrorMsg(this);            
            break;

            case 'projectFF':
            (val !== '' && val.length < 5000) ? noError(this) : showErrorMsg(this);
            break;
        }
    });

    function noError(self) {
        $(self).next('.error-box').text('');        
    }

    function showErrorMsg(self) {
        let type = $(self).attr('type');
        let error = $(self).next('.error-box')
        .animate({'marginLeft': '3rem'}, 400)
        .animate({'marginLeft': '2.5rem'}, 400);
        (type === 'text') ? error.html("Введіть не менше двох символів") :
        (type === 'email') ? error.html('Неправильно введений email') :
        (type === 'tel') ? error.html("Введіть номер телефону") : 
        error.html("Введіть повідомлення");            
    }

    document.getElementById('contact-form').addEventListener('submit', function (evt) {
        const http = new XMLHttpRequest();
        let th = $(this);
        evt.preventDefault();        
        if($('.error-box').text() === '') {
            http.open("POST", "contact.php", true);
            http.onreadystatechange = function () {
                if (http.readyState === 4 && http.status === 200) {
                    alert(http.responseText);
                    th.trigger("reset");
                }
            };
            http.onerror = function () {
                alert('Помилка, спробуйте ще раз');
            };
            http.send(new FormData(this));
        }
    }, false);

});