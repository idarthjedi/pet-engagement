# app-petool

In a large enterprise there are many different teams, stakeholders, and viewpoints, but when a project team begins
a new project initiative, it is very cumbersome to go and talk to each stakeholder to identify if there are aspects 
that the stakeholder should review (e.g. think Disaster Recovery Requirements, Security Requirements, 
Architecture Review, Database Requirements, Service Integration, Performance Requirements, etc.).

This project (will eventually) be designed to provide a data-driven questionnaire that will allow team leads to 
quickly identify (and/or notify) stakeholders that want a more detailed engagement in the initiative, but allow other 
stakeholders to pass on engagement without even needing to be bothered to ask "Do you want to know what we're doing".

This process should be integrated in auditing as well - e.g. randomly making sure that project teams are answering
questions fairly, and not in a way to keep from having to go through "red-tape".

This project has a long way to go, and may not even even be fully baked, as I am currently working on it as a POC for 
a project I hope to initiate within my organization.

For now: here it is.  The Project Engagement Tool

//*Note the idea for the "PET" is not an original idea; but the implementation is original.

## Build & development

1) Clone the project <br/>
2) run npm update in both the /public folder and the /server folder *I realize there is probably a better way to do this<br/>
3) install grunt and grunt-cli and bower (globally probably)<br/>
4) run bower update in /public <br/>
5) To see the AngularJS App, in /Public Run `grunt` for building and `grunt serve` for preview. <br/>
6) To serve the application from the Node server, CWD into /server and use nodemon to run index.js

## Testing

Running `grunt test` will run the unit tests with karma.
