import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import * as cuid from 'cuid';
import { Response } from 'express';
import { DefectRequest } from './DefectRequest';
import { DefectResponse } from './DefectResponse';

@Controller('defects')
export class DefectsController {

    database: Defect[] = [
        { id: '1', title: 'Bug', dateSubmitted: new Date('May 1, 2019 03:24:00'), description: 'Does not work'},
        { id: '2', title: 'Pest', dateSubmitted: new Date('May 2, 2019 03:24:00'), description: 'Still does not work'},
        { id: '3', title: 'Insect', dateSubmitted: new Date('May 3, 2019 03:24:00'), description: 'Never has worked'},
    ];

    @Get()
    async getDevelopers() {
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
}
