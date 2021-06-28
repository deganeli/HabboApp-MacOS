const {
	Menu: e
} = require("electron"), u = [{
	label: "Sair do Lella",
	submenu: [{
		role: "quit"
	}]
}];
module.exports = e.buildFromTemplate(u);