import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import Course from './entities/course.entity';
import { InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>
  ) {}
    async findAll(): Promise<Course[]> {
      return this.coursesRepository.find();
    }
}