import { Controller, Get, Param } from '@nestjs/common';

@Controller('topics')
export class TopicsController {
  @Get('by-course/:courseId')
  findByCourse(@Param('courseId') courseId: string) { return [{ id: 't1', title: 'Tema 1', courseId }]; }

  @Get(':id')
  findOne(@Param('id') id: string) { return { id, title: 'Tema ' + id } }
}
