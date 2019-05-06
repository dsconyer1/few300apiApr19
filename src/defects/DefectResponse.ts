import { Developer } from 'src/developers/developers.controller';

export class DefectResponse {
    id: string;
    title: string;
    dateSubmitted: Date;
    description: string;
    status: string;
    developerId: Developer;
    fixCommit: string;
}
