import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBadRequestResponse, ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiExcludeEndpoint()
  @Get('')
  @Redirect('/api')
  gotoApiDocs() {}

  /**
   * This is my endpoint summary
   */
  @Get('hello')
  getHello() {
    return this.appService.getHello();
  }

  /**
   * The docs only show the 400 response. The default 200 response
   * which is included in the metadata gets overridden.
   */
  @ApiBadRequestResponse({ description: 'Bad request' })
  @Get('badRequest')
  getBadRequest() {
    return this.appService.getHello();
  }
}
