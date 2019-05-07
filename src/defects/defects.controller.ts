import { Body, Controller, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
import * as cuid from 'cuid';
import { Response } from 'express';
import { Developer } from 'src/developers/developers.controller';
import { DefectRequest } from './DefectRequest';
import { DefectResponse } from './DefectResponse';
import { DefectUpdateRequest } from './DefectUpdateRequest';

@Controller('defects')
export class DefectsController {

    database: Defect[] = [
        { id: '1', title: 'Bug', dateSubmitted: new Date('May 1, 2019 03:24:00'), description: 'Does not work', status: 'New', developerId: { id: '1', firstName: 'Ben', lastName: 'Hedrick', team: 'boss'}, fixCommit: ''},
        { id: '2', title: 'Pest', dateSubmitted: new Date('May 2, 2019 03:24:00'), description: 'Still does not work', status: 'In Process', developerId: { id: '2', firstName: 'Jesse', lastName: 'Taylor', team: 'Quoting'}, fixCommit: ''},
        { id: '3', title: 'Insect', dateSubmitted: new Date('May 3, 2019 03:24:00'), description: 'Never has worked', status: 'Completed', developerId: { id: '3', firstName: 'Zac', lastName: 'Adams', team: 'ERO'}, fixCommit: 'Fix123'},
        { id: '4', title: 'Insect', dateSubmitted: new Date('May 3, 2019 03:24:00'), description: 'Never has worked', status: 'Completed', fixCommit: 'Fix123'},
    ];

    @Get()
    async getDefect() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ data: this.database });
            }, 0);
        });
    }

    @Post()
    async addDefect(@Body() def: DefectRequest, @Res() res: Response) {
        if (def.title === 'ant') {
            res.status(HttpStatus.BAD_REQUEST).send();
        } else {
            const newId = cuid();
            const response = new DefectResponse();
            response.id = newId;
            response.title = def.title;
            response.dateSubmitted = def.dateSubmitted;
            response.description = def.description;
            response.status = def.status;
            response.developerId = def.developerId;
            response.fixCommit = def.fixCommit;
            this.database.push(response);
            return res.status(HttpStatus.CREATED).send(response);
        }
    }

    @Put()
    async updateDefect(@Body() def: DefectUpdateRequest, @Res() res: Response) {
        const defect = this.database.find(aDefect => aDefect.id === def.id);
        if (!defect) {
            res.status(HttpStatus.BAD_REQUEST).send();
        } else {
            const response = new DefectResponse();
            response.id = defect.id;
            response.title = defect.title;
            response.dateSubmitted = defect.dateSubmitted;
            response.description = defect.description;
            response.status = def.status;
            response.developerId = def.developerId;
            response.fixCommit = def.fixCommit;
            this.database.push(response);
            return res.status(HttpStatus.CREATED).send(response);
        }
    }

}

interface Defect {
    id: string;
    title: string;
    dateSubmitted: Date;
    description: string;
    status: string;
    developerId?: Developer;
    fixCommit: string;
}
