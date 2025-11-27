import fs from 'fs';

export class CsvFileReader {
    data: string[][] = [];
    
    constructor(public filename: string) {}

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
            encoding: 'utf-8'
            })
            .split('\n')
            .map(
                (row: string): string[] => {
                    return row.split(',');  
                }
            ); // created array of arrays
        
        // enum - enumeration of match result
        enum MatchResult {
            HomeWin = 'H',
            AwayWin = 'A',
            Draw = 'D'
        }; 
    }
}

