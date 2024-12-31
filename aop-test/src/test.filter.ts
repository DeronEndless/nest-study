import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class TestFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    console.log(request);

    response.status(500).json({
      statusCode: 500,
      message: '服务器错误',
    });
  }
}
