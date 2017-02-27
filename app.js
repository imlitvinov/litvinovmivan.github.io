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

    var data = {
        "1": {
            "country": "Russia",
            "city": "Moscow",
            "url": "http://google.com",
            "obj": {
                "type": "FeatureCollection",
                "features": [
                    { "type": "Feature", "id": 1, "geometry": { "type": "Point", "coordinates": [55.831903, 37.411961] }, "properties": { "balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки" } }
                ]
            }
        },
        "2": {
            "country": "Russia",
            "city": "Moscow",
            "url": "http://google.com",
            "obj": {
                "type": "FeatureCollection",
                "features": [
                    { "type": "Feature", "id": 2, "geometry": { "type": "Point", "coordinates": [55.931903, 37.491961] }, "properties": { "balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки" } }
                ]
            }
        },
        "3": {
            "country": "Russia",
            "city": "Moscow",
            "url": "http://google.com",
            "obj": {
                "type": "FeatureCollection",
                "features": [
                    { "type": "Feature", "id": 3, "geometry": { "type": "Point", "coordinates": [56.831903, 39.411961] }, "properties": { "balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки" } }
                ]
            }
        },
        "4": {
            "country": "Russia",
            "city": "Moscow",
            "url": "http://google.com",
            "obj": {
                "type": "FeatureCollection",
                "features": [
                    { "type": "Feature", "id": 4, "geometry": { "type": "Point", "coordinates": [54.831903, 35.411961] }, "properties": { "balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки" } }
                ]
            }
        }


    }
    dataObjects = data;
    for (var key in data) {
        objectManager.add(data[key].obj);
    }

    function onObjectEvent(e) {
        var objectId = e.get('objectId');
        if (e.get('type') === 'click') {
            location.href = dataObjects[objectId].url;
        }
    }

    objectManager.objects.events.add(['click', 'mouseleave'], onObjectEvent);

}