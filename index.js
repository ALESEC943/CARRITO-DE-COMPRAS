const app = require('./app.js');
app.listen(app.get('port'), () => {
    console.log('SERVIDOR ESCUCHANDO AL PUERTO', app.get("port"));


});