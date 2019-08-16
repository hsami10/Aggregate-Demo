$(document).ready(function () {
    $('.brand').attr('data-toggle', 'tooltip');
    $('.brand').attr('data-html', 'true');
    $('.brand').attr('data-template', tooltipTemplate);
    $('.brand').attr('title', tooltipTitle2);

    $('.brand').tooltip();
    // $('.special').tooltip('show');

    $('.brand')
        .mouseleave(event, function () {
            if (event.toElement.className.includes("tooltip") ||
                event.toElement.className.includes("arrow")) {
                $('.special').tooltip('show');

                $('.tooltip')
                .mouseleave(event, function () {
                    $('.brand').tooltip('hide');
                });
                
            }
        });
});

let tooltipTemplate = `
    <div class="tooltip" role="tooltip">
        <div class="arrow"></div>
        <div class="tooltip-inner"></div>
    </div>
`;


let tooltipTitle2 = `
    <div class='tooltip-table-container'>
        <div class='row table-titles'>
            <div>
                MARKET GROUP
            </div>
            <div>
                SKU's
            </div>
        </div>
        <div class='row'>
            <div>
                Baby
            </div>
            <div>
                3
            </div>
        </div>
        <div class='row'>
            <div>
                Electrical
            </div>
            <div>
                2
            </div>
        </div>
        <div class='moreBrands'>
            + 15 more
        </div>
    </div>
    <div class="btn-container">
        <a class="open-btn" href="#">CLICK TO OPEN</a>
    </div>
`;

let tooltipTitle = `
    <table class="table table-borderless">
        <thead>
            <tr>
                <th scope="col">MARKET GROUP</th>
                <th scope="col">SKU's</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Baby</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Electrical</td>
                <td>2</td>
            </tr>
        </tbody>
    </table>
    <a class="open-btn" href="#">CLICK TO OPEN</a>
`;

