import { Injectable } from '@nestjs/common';
import  { Course } from './interfaces/course.interface';

@Injectable()
export class CoursesService {
    async findAll(): Promise<Course[]> {
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