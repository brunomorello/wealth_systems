let post = {
	"name": "bmo_test1",
	"tes": "teste",
	"xxxx": "ssss",
	"ip_addresses": [
		{
			ip: "10.192.2.1",
			status: "active"
		},
		{
			ip: "10.192.2.2",
			status: "active"
		},
		{
			ip: "10.192.2.0",
			status: "inactive"
		}
	],
    "status": "Pending Install",
    "classification": "Unix",
	"patches": [
		{
			"name": "patch1",
			"status": "Absent",
			"discovery_sourcce": "IBM",
			"description": "testing patch 1"
		},
		{
			"name": "patch2",
			"status": "Absent",
			"discovery_sourcce": "IBM",
			"description": "testing patch 2"
		},
		{
			"name": "patch3",
			"status": "Absent",
			"discovery_sourcce": "IBM",
			"description": "testing patch 3"
		}
	]
};

let parentObject = "cmdb_ci";

let objTemplateParent = {
	object: "cmdb_ci",
	template: {
		name: "name",
		ip_addresses: "ip",
		status: "state",
		classification: "sys_class_name",
		patches: "cmdb_ci_patches"
	}
};

let objTemplateChild1 = {
	object: "ip",
	template: {
		ip: "ip_address",
		status: "state"
	}
};

let objTemplateChild2 = {
	object: "cmdb_ci_patches",
	template: {
		name: "name",
		status: "state",
		discovery_sourcce: "discovery",
		description: "short_desc"
	}
};

let objTemplates = [];
objTemplates.push(objTemplateParent);
objTemplates.push(objTemplateChild1);
objTemplates.push(objTemplateChild2);


// Gets Main Object Template
let objTemplate = getObjectTemplate(parentObject);
// console.log(objTemplate); - Debug Main Object Template

// Gets Post Request Object Attributes
let objAttrs = Object.getOwnPropertyNames(post);
// console.log(objAttrs); - Debug Object Attributes as Array

// Initialize Object Transformed
let objTransformed = {};

// Transforms Main Object Attributes
objAttrs.forEach(function (element) {

	if (objTemplate[element]) objTransformed[objTemplate[element]] = post[element];

});
// console.log(objTransformed); // - Debug Object Transformed Step 1

// Gets Transformed Objects Attributes
objAttrs = Object.getOwnPropertyNames(objTransformed);

// Transforms Children Object Attributes
objAttrs.forEach(function (element) {

	var childObjTransformed = {};
	var childObjTransformedList = [];

	if (typeof objTransformed[element] == "object" && Array.isArray(objTransformed[element])) {
		
		// Gets Child Object Template
		var childObjTemplate = (getObjectTemplate(element));
		//console.log('childObjTemplate: ' + JSON.stringify(childObjTemplate));

		// Gets Current Child Object
		var childObjList = objTransformed[element];
		//console.log('childObjList: ' + JSON.stringify(childObjList));

		// Iterates through each Child Object Element on List
		childObjList.forEach(function (child) {

			//console.log(JSON.stringify(child)); // Current Child

			var childObjElementAttrs = Object.getOwnPropertyNames(child);
			//console.log(childObjElementAttrs); // Child Attributes

			// Iterates through each Child Attribute
			childObjElementAttrs.forEach(function (childObjElementAttr) {

				// Applies Template
				childObjTransformed[childObjTemplate[childObjElementAttr]] = child[childObjElementAttr];
				
			});
			
			// Adds Child Object Transformed to List
			childObjTransformedList.push(childObjTransformed);

			// Unset Current Child Object Transformed
			childObjTransformed = {};

		});

		// Binding List of Child Object Transformed
		objTransformed[element] = childObjTransformedList;
	}
	
});

function getObjectTemplate(objName) {
	var obj =  objTemplates.filter(function (element) {
		return element.object == objName
	});
	return obj[0].template;
}

console.log('Object Received:');
console.log(post);

console.log('Object Transformed:');
console.log(objTransformed);