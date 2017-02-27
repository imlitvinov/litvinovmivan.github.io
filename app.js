ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 2,
        controls: []
    }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            clusterize: true,
            geoObjectOpenBalloonOnClick: false,
            clusterOpenBalloonOnClick: false
        });

    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: 'http://localhost:3000/data'
    }).done(function (data) {
        dataObjects = data;
        for (key in data) {
            objectManager.add(data[key].obj);
        }
    });

    function onObjectEvent(e) {
        var objectId = e.get('objectId');
        if (e.get('type') === 'click') {
            location.href = dataObjects[objectId].url;
        }
    }

    objectManager.objects.events.add(['click', 'mouseleave'], onObjectEvent);

}