import { Body, Controller, Get, Next, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NextFunction, Response } from 'express';
import { BulkIdResponseDto } from 'src/dtos/asset-ids.response.dto';
import { AuthDto } from 'src/dtos/auth.dto';
import {
  AssetFaceUpdateDto,
  MergePersonDto,
  PeopleResponseDto,
  PeopleUpdateDto,
  PersonCreateDto,
  PersonResponseDto,
  PersonSearchDto,
  PersonStatisticsResponseDto,
  PersonUpdateDto,
  TagFaceDto,
} from 'src/dtos/person.dto';
import { Permission } from 'src/enum';
import { Auth, Authenticated, FileResponse } from 'src/middleware/auth.guard';
import { LoggingRepository } from 'src/repositories/logging.repository';
import { PersonService } from 'src/services/person.service';
import { sendFile } from 'src/utils/file';
import { UUIDParamDto } from 'src/validation';

@ApiTags('People')
@Controller('people')
export class PersonController {
  constructor(
    private service: PersonService,
    private logger: LoggingRepository,
  ) {}

  @Get()
  @Authenticated({ permission: Permission.PERSON_READ })
  getAllPeople(@Auth() auth: AuthDto, @Query() options: PersonSearchDto): Promise<PeopleResponseDto> {
    return this.service.getAll(auth, options);
  }

  @Post()
  @Authenticated({ permission: Permission.PERSON_CREATE })
  createPerson(@Auth() auth: AuthDto, @Body() dto: PersonCreateDto): Promise<PersonResponseDto> {
    return this.service.create(auth, dto);
  }

  @Put()
  @Authenticated({ permission: Permission.PERSON_UPDATE })
  updatePeople(@Auth() auth: AuthDto, @Body() dto: PeopleUpdateDto): Promise<BulkIdResponseDto[]> {
    return this.service.updateAll(auth, dto);
  }

  @Get(':id')
  @Authenticated({ permission: Permission.PERSON_READ })
  getPerson(@Auth() auth: AuthDto, @Param() { id }: UUIDParamDto): Promise<PersonResponseDto> {
    return this.service.getById(auth, id);
  }

  @Put(':id')
  @Authenticated({ permission: Permission.PERSON_UPDATE })
  updatePerson(
    @Auth() auth: AuthDto,
    @Param() { id }: UUIDParamDto,
    @Body() dto: PersonUpdateDto,
  ): Promise<PersonResponseDto> {
    return this.service.update(auth, id, dto);
  }

  @Get(':id/statistics')
  @Authenticated({ permission: Permission.PERSON_STATISTICS })
  getPersonStatistics(@Auth() auth: AuthDto, @Param() { id }: UUIDParamDto): Promise<PersonStatisticsResponseDto> {
    return this.service.getStatistics(auth, id);
  }

  @Get(':id/thumbnail')
  @FileResponse()
  @Authenticated({ permission: Permission.PERSON_READ })
  async getPersonThumbnail(
    @Res() res: Response,
    @Next() next: NextFunction,
    @Auth() auth: AuthDto,
    @Param() { id }: UUIDParamDto,
  ) {
    await sendFile(res, next, () => this.service.getThumbnail(auth, id), this.logger);
  }

  @Put(':id/reassign')
  @Authenticated({ permission: Permission.PERSON_REASSIGN })
  reassignFaces(
    @Auth() auth: AuthDto,
    @Param() { id }: UUIDParamDto,
    @Body() dto: AssetFaceUpdateDto,
  ): Promise<PersonResponseDto[]> {
    return this.service.reassignFaces(auth, id, dto);
  }

  @Post('tag-face')
  @Authenticated()
  tagFace(@Auth() auth: AuthDto, @Body() dto: TagFaceDto) {
    console.log('Tagging person', dto);
    return this.service.tagFace(auth, dto);
  }

  @Post(':id/merge')
  @Authenticated({ permission: Permission.PERSON_MERGE })
  mergePerson(
    @Auth() auth: AuthDto,
    @Param() { id }: UUIDParamDto,
    @Body() dto: MergePersonDto,
  ): Promise<BulkIdResponseDto[]> {
    return this.service.mergePerson(auth, id, dto);
  }
}
