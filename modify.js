const fs = require("fs");

const defineObject = JSON.parse(
	fs.readFileSync("./define.json", "utf8")
);
systemObject = JSON.parse(
	fs.readFileSync("./System.json", "utf8")
);
mapinfosjsonObject = JSON.parse(
	fs.readFileSync("./MapInfos.json", "utf8")
);

systemObject.versionId = defineObject.versionId;
systemObject.editMapId = defineObject.editMapId;
fs.writeFileSync("./System.json", JSON.stringify(systemObject));

for (var i = 0; i < mapinfosjsonObject.length; i++) {
	if (mapinfosjsonObject[i]) {
		obj = mapinfosjsonObject[i];
		obj.scrollX = 0;
		obj.scrollY = 0;
		obj.expanded = false;
	}
}

fs.writeFileSync(
	"./MapInfos.json",
	JSON.stringify(mapinfosjsonObject)
);
