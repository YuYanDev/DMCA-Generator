/**
 * Copyright Since 2019 YuYanDev
 * MIT License
 */
var fs = require('fs')
var inquirer = require('inquirer');
var markdownpdf = require("markdown-pdf")
var commander = require('commander')

/* Commander set*/
commander
    .version('0.0.1')
    .description('DMCA-Generator')
    .option('-t, --template <template>', 'template name', 'default')
    .option('-o, --output <output>', 'output name', 'DMCA')
    .option('-p, --outputpath <outputpath>', 'output path', './')

commander.parse(process.argv)

/* Path init */
var templateJsonUrl = './templates/' + commander.template+ '.json'
var templateUrl = './templates/' + commander.template+ '.md'
var outputPath = commander.outputpath + commander.output + '.pdf'

var templateJson = JSON.parse(fs.readFileSync( templateJsonUrl ));
var template = fs.readFileSync( templateUrl ,'utf-8')

/**
 * Template Render Function
 * @param {String} template The template markdown string
 * @param {Object} answers The inquirer answers object
 */
function render(template,answers){
    Object.keys(answers).map((item)=>{
        let reg = new RegExp('\{\{ +'+item+' \}\}')
        template = template.replace(reg,answers[item])
    })
    return template;
}

/* Inquirer ask */
inquirer
    .prompt(templateJson)
    .then((answers) => {
        template = render(template,answers)
        /* export PDF */
        markdownpdf().from.string(template).to(outputPath, function () {
            console.log("Created", outputPath, 'success!')
        })
    })