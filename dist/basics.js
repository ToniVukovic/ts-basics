"use strict";
let username = "Alice";
let age = 30;
let isAdmin = true;
let scores = [7, 5, 1];
let tupleExample = ["Alice", 11];
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Viewer"] = 2] = "Viewer";
})(Role || (Role = {}));
let adminRole = Role.Admin;
