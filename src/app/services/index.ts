import {NgModule} from '@angular/core';
import {QuoteService} from './quote.service';
import {ProjectService} from "./project.service";
import {TaskListService} from "./task-list.service";
import {TaskService} from "./task.service";


export {
    QuoteService,
}

@NgModule()
export class ServicesModule {
    static forRoot() {
        return {
            ngModule: ServicesModule,
            providers: [
                QuoteService,
                ProjectService,
                TaskListService,
                TaskService
            ]
        };
    }
}
