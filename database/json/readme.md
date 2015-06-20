# Database Imports

### Import Comiket Events

`mongoimport --db doujin-release-tracker --collection comiket --drop --jsonArray --file events/comiket.json`

### Import Vocamas Events

`mongoimport --db doujin-release-tracker --collection vocamas --drop --jsonArray --file events/vocamas.json`

### Import M3 Events

`mongoimport --db doujin-release-tracker --collection m3 --drop --jsonArray --file events/m3.json`

### Import Releases

`mongoimport --db doujin-release-tracker --collection releases --drop --jsonArray --file releases.json`
