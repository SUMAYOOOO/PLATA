import { Controller, Get, Param } from '@nestjs/common';

@Controller('resources')
export class ResourcesController {
  @Get('by-topic/:topicId')
  findByTopic(@Param('topicId') topicId: string) { return [{ id: 'r1', type: 'video', url: 'https://example.com/video.mp4', topicId }]; }
}
