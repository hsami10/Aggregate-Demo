$(document).ready(function () {
    $('.brand').attr('data-toggle', 'tooltip');
    $('.brand').attr('data-html', 'true');
    $('.brand').attr('data-template', tooltipTemplate);
    $('.brand').attr('title', tooltipTitle);

    $('.brand').tooltip();
    // $('.special').tooltip('show');

    $('.table1 .brand').mouseleave(event, function () {
        if (event.toElement.className.includes("tooltip") ||
            event.toElement.className.includes("arrow")) {
            $(this).tooltip('show');
            $('.tooltip.show').addClass('fade');

            $('.tooltip').mouseleave(event, function () {
                $('.brand').tooltip('hide');
            });

        }
    });

    $('.table2 .brand').click(function () {
        $('.tooltip.show').css('opacity', '1');
    });
});

let tooltipTemplate = `
    <div class="tooltip" role="tooltip">
        <div class="arrow"></div>
        <div class="tooltip-inner"></div>
    </div>
`;

let tooltipTitle = `
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
        <a class="open-btn" href="##">CLICK TO OPEN</a>
    </div>
`;
