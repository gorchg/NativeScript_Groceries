var dialogsModule = require("ui/dialogs");
var frameModule = require("ui/frame");
var page;
var email;

// Code behind
var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = user;
}

exports.signIn = function() {
    email = page.getViewById("email");
    console.log(email.text);
    user.login().catch(function(error) {
        console.log(error);
        dialogsModule.alert({
            message: "Unfortunately we could not find your account.",
            okButtonText: "OK"
        });
        return Promise.reject();
    })
    .then(function() {
        // console.log("login success");
        // var topmost = frameModule.topmost();
        // topmost.navigate("views/list/list")
        frameModule.topmost().navigate("views/list/list");
    });
}

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register")
}

// ViewModel
// var observableModule = require("data/observable");
// var user = new observableModule.fromObject({
//     email: "user@domain.com",
//     password: "password"
// });
