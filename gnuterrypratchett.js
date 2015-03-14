// Write your package code here!
Meteor.startup(function()
{
  WebApp.rawConnectHandlers.use(function(req, res, next)
  {
    res.setHeader("X-Clacks-Overhead", "GNU Terry Pratchett");
    return next();
  })
})