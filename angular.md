##### Commands
ng new hello-world 
ng serve or npm start	-> start app
ng g c test	-> create component

#####

Module - App module is a root module; it is a representation of service
Component - AppComponent is a root component ; it represents a view in the browser and a class to control it; HTML + Class
Services - business logic
Services + Component = Module


##### Component
- has three Parts
	-	Template 	-> view 	-> HTML
	-	Class		-> code  	-> Typescript 	-> data & methods
	-	Metadata	-> 	Information & Decorator

````
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

 selector: 'app-test'		-		<app-test></app-test>
 selector: '.app-test'		-		<div class="app-test"></div>
 selector: '[app-test]'		-		<div app-test></div>
 
templateUrl can be modifed to template to write inline html
templateUrl: './test.component.html'

to

template: '<div>Inline template</div>'
 ````