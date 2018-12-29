
$(document).ready(function () { // this function will be triggered when the page is loaded

    $('.nBtn, .table .eBtn').on('click',function (event) { // this function will be executed when the eBtn on the table in the html page is clicked. and its aim is to show the modal form. Also, it will be used for the other button nBtn

        event.preventDefault(); // to prevent the default action of jquery which is to return json

        // the coming section is to pre-populate the fields of the modal form with the values from the country object returned by the controller. this object will be returned in the href variable
        var href = $(this).attr('href');

        // in order to know which button was clicked (New or Edit) --> create a variable which will contain the text on the button
        var text = $(this).text();

        if (text == 'Edit') {
            $.get(href, function (country, status) {
                $('.myForm #id').val(country.id);
                $('.myForm #name').val(country.name);
                $('.myForm #capital').val(country.capital);
            });


        } else { // reset all the input fields
            $('.myForm #id').val('');
            $('.myForm #name').val('');
            $('.myForm #capital').val('');
        }

        $('.myForm #exampleModal').modal();

    });


    // the following is to target the on click of the delete button
    $('.table .delBtn').on('click',function (event) {

        event.preventDefault(); // to prevent the default action of jquery when the button is clicked
        var href = $(this).attr('href'); // this will return which button was clicked in dialog
        $('#myModal #delRef').attr('href',href); // set the href of the button
        $('#myModal').modal(); // display the modal dialogue
    });

});