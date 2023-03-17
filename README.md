# Personal webpage
A personal webpage introducing myself, my academic and work life, and some aspects of my personal life. 

## Description
The page was developed using pure HTML for the structure, javascript for the functionality and a combination of pure CSS and tailwind for the styling. 

## How to run the website
- Double click on the index.html file in the root of the project

## Functionality
The functionality of the site was implemented using Javascript.

### Common components for different pages
All pages in the site have the same header and footer with navigation options. 
Instead of having this code repeated in all files, javascript was used to dynamically insert this pieces of HTML in each page on load. 

While the index.html file is in the root directory of the project, all the other pages are in a 'pages' directory. Then, the urls for the navigation elements differ depending on the location of the file we are. Therefore, javascript was also used to assign the corresponding urls to each page when the header is loaded. 

### Sidebar
When opening the project in a small screen (width < 1024px) the navigation menu turns into a sidebar. The functionality for opening and closing that sidebar was implemented using javascript. 

### Contact me form
The site includes a contact form that on submission opens the user's email program with pre-allocated fields in order to send you me email. This feature was implemented using the 'mailto' option in the form's action attribute in HTML. 

#### Form validation
The inputs in the form are validated twice: 
- Validation with html attributes (required, type, maxlenght)
- Validation using Javascript
    - Dynamically displaying errors whenever an input is not valid.
    - Dynamically reseting the form whenever a submission is made.
- Inputs and their validation:
    - Name: required, maxlength 20
    - Last name: required, maxlength 20
    - Email: email format, required
    - Message: no validation needed

## Styling
The styling was done combining Tailwind and pure CSS. Tailwind was used for more basic styling that is easily achievable, while css was used for more specific styling (like polaroid pictures). 

#### Tailwind
In this case, tailwind was imported to the project by a link, and not installed. The reason for that is that it was only used for basic styling, and the more complex things were done with pure CSS. 

### Responsiveness
The site is responsive when using it in different screens.

