const d = new Date("July 23, 2023 19:31:00");
let day = d.getDay();

switch (day) {

        case 0: $('#day-1').addClass('bg-color');
        $('#day-1').addClass('col');
        
        break;
        case 1: $('#day-2').addClass('bg-color');
        $('#day-2').addClass('col'); 

        break;
        case 2: $('#day-3').addClass('bg-color');
        $('#day-3').addClass('col');

        break;
        case 3: $('#day-4').addClass('bg-color');
        $('#day-4').addClass('col');

        break;
        case 4: $('#day-5').addClass('bg-color');
        $('#day-5').addClass('col');

        break;
        case 5: $('#day-6').addClass('bg-color');
        $('#day-6').addClass('col');

        break;
        case 6: $('#day-7').addClass('bg-color');
        $('#day-7').addClass('col');


        break;

    default:
        break;
}
