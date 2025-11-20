import fs from 'fs';

// encoding the raw data so that it can be processed - returns as one large string
const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map(
        (row: string): string[] => {
        return row.split(',');  
    }
); // created array of arrays

console.log(matches);

