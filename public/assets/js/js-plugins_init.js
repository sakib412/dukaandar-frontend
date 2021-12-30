
// =======================================================


// BUILDER TOGGLE INVOKER
// =======================================================
$('.js-navbar-vertical-aside-toggle-invoker').click(function () {
    $('.js-navbar-vertical-aside-toggle-invoker').tooltip('hide');
});




// INITIALIZATION OF NAVBAR VERTICAL NAVIGATION
// =======================================================
var sidebar = $('.js-navbar-vertical-aside').hsSideNav();


// INITIALIZATION OF TOOLTIP IN NAVBAR VERTICAL MENU
// =======================================================
$('.js-nav-tooltip-link').tooltip({ boundary: 'window' })

$(".js-nav-tooltip-link").on("show.bs.tooltip", function (e) {
    if (!$("body").hasClass("navbar-vertical-aside-mini-mode")) {
        return false;
    }
});


// INITIALIZATION OF UNFOLD
// =======================================================
$('.js-hs-unfold-invoker').each(function () {
    var unfold = new HSUnfold($(this)).init();
});


// INITIALIZATION OF FORM SEARCH
// =======================================================
$('.js-form-search').each(function () {
    new HSFormSearch($(this)).init()
});


// INITIALIZATION OF SELECT2
// =======================================================
$('.js-select2-custom').each(function () {
    var select2 = $.HSCore.components.HSSelect2.init($(this));
});


// INITIALIZATION OF CHARTJS
// =======================================================
Chart.plugins.unregister(ChartDataLabels);

$('.js-chart').each(function () {
    $.HSCore.components.HSChartJS.init($(this));
});

var updatingChart = $.HSCore.components.HSChartJS.init($('#updatingData'));

// CALL WHEN TAB IS CLICKED
// =======================================================
$('[data-toggle="chart-bar"]').click(function (e) {
    let keyDataset = $(e.currentTarget).attr('data-datasets')

    if (keyDataset === 'lastWeek') {
        updatingChart.data.labels = ["Apr 22", "Apr 23", "Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29", "Apr 30", "Apr 31"];
        updatingChart.data.datasets = [
            {
                "data": [120, 250, 300, 200, 300, 290, 350, 100, 125, 320],
                "backgroundColor": "#377dff",
                "hoverBackgroundColor": "#377dff",
                "borderColor": "#377dff"
            },
            {
                "data": [250, 130, 322, 144, 129, 300, 260, 120, 260, 245, 110],
                "backgroundColor": "#e7eaf3",
                "borderColor": "#e7eaf3"
            }
        ];
        updatingChart.update();
    } else {
        updatingChart.data.labels = ["May 1", "May 2", "May 3", "May 4", "May 5", "May 6", "May 7", "May 8", "May 9", "May 10"];
        updatingChart.data.datasets = [
            {
                "data": [200, 300, 290, 350, 150, 350, 300, 100, 125, 220],
                "backgroundColor": "#377dff",
                "hoverBackgroundColor": "#377dff",
                "borderColor": "#377dff"
            },
            {
                "data": [150, 230, 382, 204, 169, 290, 300, 100, 300, 225, 120],
                "backgroundColor": "#e7eaf3",
                "borderColor": "#e7eaf3"
            }
        ]
        updatingChart.update();
    }
})


// INITIALIZATION OF BUBBLE CHARTJS WITH DATALABELS PLUGIN
// =======================================================
$('.js-chart-datalabels').each(function () {
    $.HSCore.components.HSChartJS.init($(this), {
        plugins: [ChartDataLabels],
        options: {
            plugins: {
                datalabels: {
                    anchor: function (context) {
                        var value = context.dataset.data[context.dataIndex];
                        return value.r < 20 ? 'end' : 'center';
                    },
                    align: function (context) {
                        var value = context.dataset.data[context.dataIndex];
                        return value.r < 20 ? 'end' : 'center';
                    },
                    color: function (context) {
                        var value = context.dataset.data[context.dataIndex];
                        return value.r < 20 ? context.dataset.backgroundColor : context.dataset.color;
                    },
                    font: function (context) {
                        var value = context.dataset.data[context.dataIndex],
                            fontSize = 25;

                        if (value.r > 50) {
                            fontSize = 35;
                        }

                        if (value.r > 70) {
                            fontSize = 55;
                        }

                        return {
                            weight: 'lighter',
                            size: fontSize
                        };
                    },
                    offset: 2,
                    padding: 0
                }
            }
        },
    });
});


// INITIALIZATION OF DATERANGEPICKER
// =======================================================
$('.js-daterangepicker').daterangepicker();

$('.js-daterangepicker-times').daterangepicker({
    timePicker: true,
    startDate: moment().startOf('hour'),
    endDate: moment().startOf('hour').add(32, 'hour'),
    locale: {
        format: 'M/DD hh:mm A'
    }
});

var start = moment();
var end = moment();

function cb(start, end) {
    $('#js-daterangepicker-predefined .js-daterangepicker-predefined-preview').html(start.format('MMM D') + ' - ' + end.format('MMM D, YYYY'));
}

$('#js-daterangepicker-predefined').daterangepicker({
    startDate: start,
    endDate: end,
    ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
}, cb);

cb(start, end);


// INITIALIZATION OF DATATABLES
// =======================================================
var datatable = $.HSCore.components.HSDatatables.init($('#datatable'), {
    select: {
        style: 'multi',
        selector: 'td:first-child input[type="checkbox"]',
        classMap: {
            checkAll: '#datatableCheckAll',
            counter: '#datatableCounter',
            counterInfo: '#datatableCounterInfo'
        }
    },
    language: {
        zeroRecords: '<div class="text-center p-4">' +
            '<img class="mb-3" src="./assets/svg/illustrations/sorry.svg" alt="Image Description" style="width: 7rem;">' +
            '<p class="mb-0">No data to show</p>' +
            '</div>'
    }
});

$('.js-datatable-filter').on('change', function () {
    var $this = $(this),
        elVal = $this.val(),
        targetColumnIndex = $this.data('target-column-index');

    datatable.column(targetColumnIndex).search(elVal).draw();
});

$('#datatableSearch').on('mouseup', function (e) {
    var $input = $(this),
        oldValue = $input.val();

    if (oldValue == "") return;

    setTimeout(function () {
        var newValue = $input.val();

        if (newValue == "") {
            // Gotcha
            datatable.search('').draw();
        }
    }, 1);
});


// INITIALIZATION OF CLIPBOARD
// =======================================================
$('.js-clipboard').each(function () {
    var clipboard = $.HSCore.components.HSClipboard.init(this);
});
