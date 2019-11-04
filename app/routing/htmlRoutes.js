var path = require("path");

module.exports = (app) => {

    app.get('/', (req, res) => {
        const fileName = 'home';
        res.sendFile(path.join(__dirname, `../../app/public/${fileName}.html`));
    });

    app.get('/survey', (req, res) => {
        const fileName = 'survey';
        res.sendFile(path.join(__dirname, `../../app/public/${fileName}.html`));
    });
};

