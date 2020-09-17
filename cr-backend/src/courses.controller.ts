import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get()
  findAll(): any {
    return [
      {
        id: '100',
       number: '01204111',
       title: 'Computer Programming '
      },
      {
        id: '213fds',
       number: '01204111',
       title: 'Discrete '
      },
      {
        id: 'dasdsadsfa',
       number: '01204313',
       title: 'Design '
      },
    ];
  }
}

