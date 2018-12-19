// // // var testEmployee = [
// // //     {
// // //         "name":"brahmam",
// // //         "class":"10th",
// // //         "age": 25
// // //     },
// // //     {
// // //         "name":"harsha",
// // //         "class":"10th",
// // //         "age": 24
// // //     },
// // //     {
// // //         "name":"vardhan",
// // //         "class":"10th",
// // //         "age": 23
// // //     },
// // //     {
// // //         "name":"manisha",
// // //         "class":"10th",
// // //         "age": 22
// // //     }

// // // ]
// // console.log(testEmployee[3].age);

// // var testData = {
// //     "glossary": {
// //         "title": "example glossary",
// // 		"GlossDiv": {
// //             "title": "S",
// // 			"GlossList": {
// //                 "GlossEntry": {
// //                     "ID": "SGML",
// // 					"SortAs": "SGML",
// // 					"GlossTerm": "Standard Generalized Markup Language",
// // 					"Acronym": "SGML",
// // 					"Abbrev": "ISO 8879:1986",
// // 					"GlossDef": {
// //                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
// // 						"GlossSeeAlso": ["GML", "XML"]
// //                     },
// // 					"GlossSee": "markup"
// //                 }
// //             }
// //         }
// //     }
// // }
// // console.log(testData.glossary.GlossDiv.GlossList.GlossEntry.Abbrev);

// // var menuData = {"menu": {
// //     "header": "SVG Viewer",
// //     "items": [
// //         {"id": "Open"},
// //         {"id": "OpenNew", "label": "Open New"},
// //         null,
// //         {"id": "ZoomIn", "label": "Zoom In"},
// //         {"id": "ZoomOut", "label": "Zoom Out"},
// //         {"id": "OriginalView", "label": "Original View"},
// //         null,
// //         {"id": "Quality"},
// //         {"id": "Pause"},
// //         {"id": "Mute"},
// //         null,
// //         {"id": "Find", "label": "Find..."},
// //         {"id": "FindAgain", "label": "Find Again"},
// //         {"id": "Copy"},
// //         {"id": "CopyAgain", "label": "Copy Again"},
// //         {"id": "CopySVG", "label": "Copy SVG"},
// //         {"id": "ViewSVG", "label": "View SVG"},
// //         {"id": "ViewSource", "label": "View Source"},
// //         {"id": "SaveAs", "label": "Save As"},
// //         null,
// //         {"id": "Help"},
// //         {"id": "About", "label": "About Adobe CVG Viewer..."}
// //     ]
// // }}
// // console.log(menuData.menu.items[17].label);
// // var tableData = [
// //     {
// //         "S.no":1,
// //         "Name":"Raj1",
// //         "Father Name":"venkat",
// //         "Section":"A"
// //     },
// //     {
// //         "S.no":2,
// //         "Name":"Raj2",
// //         "Father Name":"chandra",
// //         "Section":"B"
// //     },
// //     {
// //         "S.no":3,
// //         "Name":"Raj3",
// //         "Father Name":"raghu",
// //         "Section":"C"
// //     },
// //     {
// //         "S.no":4,
// //         "Name":"Raj4",
// //         "Father Name":"sandeep",
// //         "Section":"D"
// //     },
// //     {
// //         "S.no":5,
// //         "Name":"Raj5",
// //         "Father Name":"praneeth",
// //         "Section":"E"
// //     }
// // ]
// // console.log(tableData[1].Name);
// var googleData = {
//     "squadName": "Super hero squad",
//     "homeTown": "Metro City",
//     "formed": 2016,
//     "secretBase": "Super tower",
//     "active": true,
//     "members": [
//       {
//         "name": "Molecule Man",
//         "age": 29,
//         "secretIdentity": "Dan Jukes",
//         "powers": [
//           "Radiation resistance",
//           "Turning tiny",
//           "Radiation blast"
//         ]
//       },
//       {
//         "name": "Madame Uppercut",
//         "age": 39,
//         "secretIdentity": "Jane Wilson",
//         "details":{
//             "subjects": [{
//                 "maths": ["m1", "m2"],
//                 "social":["history"] 
//             }]
//         },
//         "powers": [
//           "Million tonne punch",
//           "Damage resistance",
//           "Superhuman reflexes"
//         ]
//       },
//       {
//         "name": "Eternal Flame",
//         "age": 1000000,
//         "secretIdentity": "Unknown",
//         "powers": [
//           "Immortality",
//           "Heat Immunity",
//           "Inferno",
//           "Teleportation",
//           "Interdimensional travel"
//         ]
//       }
//     ]
//   }
// console.log(googleData.members[1].details.subjects[0].social[0]);
function test(){
    var a = 2;
    if(a<1){
        alert("success");
    }
    alert("fail");
}