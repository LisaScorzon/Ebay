// src/pages/controller.ts
import { JsonController, Get } from 'routing-controllers'
import Page from './entity'
// import pagesById, { Page } from './entity'
// type PageList = {
//      pages: Page[] 
//     }
        

@JsonController()
export default class PageController {

    // @Get('/pages/:id')
    // getPage(
    //     @Param('id') id: number
    // ): Page {
    //     return pagesById[id]
    // }
    @Get('/pages')
 allPages() { //async allows use of await inside
  const pages =  Page.find()
  return { pages }// now pages contains results from DB
}
}