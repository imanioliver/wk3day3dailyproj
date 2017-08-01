// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text", "label": "Last Name",  "id": "user-last-name","icon": "fa-user",  "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
  console.log();
} )();


// -------- Your Code Goes Below this Line -------

//Iterate over formData
//OUTSIDE OF FOR LOOP, create a variable for the container of all inputs
  //-create var for container of all inputs
//INSIDE FOR LOOP
  //-if statement for the options property
  //-create input element
  //-set it's properties based on formData array
  //-append to main container
//IF OPTIONS EXIST
  //-create a new for loop
  //-creating options elements
  //-setting their value and textcontent
  //-appending them to the select elements
  // -append to main container ('fields')

let fields = document.getElementById("fields");
let form = document.createElement('form');

for (var i = 0; i < formData.length; i++) {
  let input = document.createElement('input');

  if (formData[i].options.length > 0){ //select tag
  input.setAttribute("type", formData[i].type);
  fields.appendChild(input);
    let select= document.createElement('select')

    for (var j = 0; j < formData[i].options.length; j++) {
      let option = document.createElement('option');
      option.setAttribute("label", formData[i].options[j].label);
      // option.textcontent = formData[i].options[j].label; ----not this
      // option.label = formData[i].options[j].label;
      option.setAttribute("value", formData[i].options[j].value);
      option.value = formData[i].options[j].value;
      select.appendChild(option);
      // input.appendChild(select);
      form.appendChild(select);
      fields.appendChild(form);

    }

  } else {

    input.setAttribute("type", formData[i].type);
    input.setAttribute("placeholder", formData[i].label);
    input.setAttribute('id', formData[i].id);
  }
fields.appendChild(input);
}
