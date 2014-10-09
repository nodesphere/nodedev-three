
// Require modules
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
//
io = require('socket.io').listen(server, { log: true });
//

// Start node HTTP server
if (server.listen(5555))
	console.log("...server up!"); 

noomapPublicRootPath = './pub/';

app.get('/', function (req, res) {

	res.sendfile(noomapPublicRootPath + 'index.html');
	
});


app.get('/pde/*.pde', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});

app.get('/mobile', function(req,res)
{
	res.sendfile(noomapPublicRootPath + '/noola/app.html');
});
app.get('/mm', function (req, res) {
	res.sendfile(noomapPublicRootPath + 'mm.html');
});
app.get('/lib/*.js', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});
app.get('/lib/vendor/*.js', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});
app.get('/js/*.js', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});
app.get('/json/*.json', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});
app.get('/ico/*.(ico|png)', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});
app.get('/mp3/*.mp3', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});
app.get('/ttf/*.ttf', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
})
app.get('/favicon.ico', function (req, res) {
	res.sendfile(noomapPublicRootPath + '/ico/favicon.ico');
});
app.get('/img/*.(gif|png|jpg)', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});
app.get('/css/*.(css|png)', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});
app.get('/skins/[A-Za-z0-9]+/css/*.css', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});
app.get('/skins/[A-Za-z0-9]+/json/*.json', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});
app.get('/skins/[A-Za-z0-9]+/img/buttons/*.(gif|png|jpg)', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});
app.get('/skins/[A-Za-z0-9]+/img/*.(gif|png|jpg)', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});
app.get('/style/*.(css|png)', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});
app.get('/doc/*.(html)', function (req, res) {
	res.sendfile(noomapPublicRootPath + req.url);
});


