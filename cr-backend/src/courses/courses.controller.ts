import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './course.entity';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}
  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Post ()
  async create(@Body() createCourseDto: CreateCourseDto) {
    if((createCourseDto.number !== undefined) && (createCourseDto.title !== undefined)){
    const newCourse = this.coursesService.create(createCourseDto);
    return newCourse;
  } else {
    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }
  }
}

