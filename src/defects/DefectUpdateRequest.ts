import { Developer } from 'src/developers/developers.controller';

export class DefectUpdateRequest {
    id: string;
    status: string;
    developerId?: Developer;
    fixCommit: string;
}
