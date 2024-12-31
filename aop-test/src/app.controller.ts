import {
  Controller,
  Get,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @UseGuards(LoginGuard)
  @UseInterceptors(TimeInterceptor)
  @UsePipes(ValidatePipe)
  @UseFilters(TestFilter)
  getHello(@Query('name', ValidatePipe) name: string): string {
    console.log('getHello', name);
    return this.appService.getHello();
  }
}
