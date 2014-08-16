'use strict';

angular.module('doujinReleaseTracker')
  .service('getEvent', function (Config, EventsRepository) {

    this.eventData = function(id) {
      // If there is no id, get the latest event data
      if (id.length === 0)
      {
        return EventsRepository
          .getAll()
          .then(function (event) {
            var ids = Object.keys(event);
            ids.reverse();

            var latestId = ids[0];
            var eventName = Config.event;
            var eventDate = event[latestId].date;
            var eventDoujinStyle = event[latestId].doujinstyle;
            var eventJpThread = event[latestId].jpthread;

            var eventInfo = {
              "id": latestId,
              "event": eventName,
              "date": eventDate,
              "doujinstyle": eventDoujinStyle,
              "jpthread": eventJpThread,
            };

            return eventInfo;
          });
      }
      else
      {
        if (Config.event === 'comiket')
        {
          id = id.replace('c','');
        }

        return EventsRepository
          .getById(id)
          .then(function (event) {

            var eventName = Config.event;
            var eventDate = event.date;
            var eventDoujinStyle = event.doujinstyle;
            var eventJpThread = event.jpthread;

            var eventInfo = {
              "id": id,
              "event": eventName,
              "date": eventDate,
              "doujinstyle": eventDoujinStyle,
              "jpthread": eventJpThread,
            };

            return eventInfo;
          });
      }
    }


  });
