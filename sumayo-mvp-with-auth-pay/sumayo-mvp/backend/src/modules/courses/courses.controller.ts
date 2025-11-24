import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() { return [{ id: 'c1', title: 'Curso ejemplo', slug: 'curso-ejemplo' }]; }

  @Get(':slug')
  findOne(@Param('slug') slug: string) { return { id: 'c1', title: 'Curso ejemplo', slug }; }
}
