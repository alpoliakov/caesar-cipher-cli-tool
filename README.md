# Caesar cipher CLI tool

## Description
[Caesar cipher cli](https://github.com/rolling-scopes-school/basic-nodejs-2021Q2/blob/master/descriptions/caesar-cipher-cli-tool.md)

## Installation instructions
### Clone repository

In the CLI, run this command to get files from this repository:
````
https://github.com/alpoliakov/caesar-cipher-cli-tool/tree/develop
````

### Install dependencies
In the CLI, open the directory containing the app end run commands:
````
cd caesar-cipher-cli-tool
npm install
````
or with [yarn](https://yarnpkg.com/)
````
cd caesar-cipher-cli-tool
yarn install
````

## Usage
To launch the **app**, go to the folder **caesar-cipher-cli-tool** folder and run the following command:
- for help information
````
node app -h
or
node app --help
````
When you run one of these commands, you will be able to see detailed information about using the application.
- for usage
````
node app OPTIONS
````
### Options
**caesar-cipher-cli-tool** accepts the following options (short alias and full name)
- **-a, --action**: an action: ````"encode"```` or ````"decode"```` (required)
- **-s, --shift**: a shift (required). Must be an integer.
- **-i, --input**: an input file
- **-o, --output**: an output file
- **-h, --help**: show help

### Usage examples
- Run script to read and write from console to console:
````
node app -a encode -s 3
or
node app --action encode --shift 3
or
combined between short alias and full name
````
After that enter the text you want to encrypt in the console (there will be a prompt in the console)
````
node app -a decode -s 3
or
combined between short alias and full name
````
After that enter the text you want to decrypt in the console (there will be a prompt in the console)

- Run script to read from file and write to console:
````
node app -a encode -s 3 -i input.txt
or
use full option names or combine with short ones
````

- Run script to read from console and write to file:
````
node app -a encode -s 3 -o output.txt
or
use full option names or combine with short ones
````

- Run script to read from file and write to file:
````
node app -a encode -s 7 -i "./input.txt" -o "./output.txt"
or
node app --action encode --shift 7 --input input.txt --output output.txt
````
> input.txt
> `This is secret. Message about "_" symbol!`
>
> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

- For decode use name option ````action```` - **decode**. (Decoding encoded initial string with the same -s(--shift) number produces the initial string.)
````
node app --action decode --shift 7 --input output.txt --output input.txt
````
- Negative shift handling
````
node app --action encode --shift -1 --input input.txt --output output.txt


