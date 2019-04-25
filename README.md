# DMCA-Generator

Generate standard DMCA requests based on templates

---
### DMCA生成器
一个用于生成DMCA请求的生成器 [中文说明](README_zh.md)

---

#### 1.Install and Use

``` bash
git clone https://github.com/YuYanDev/DMCA-Generator.git
cd DMCA-Generator
npm install
node index.js -t default -o DMCA
```

Arguments:

* `-t` or `--template` Set the template. All templates are stored in the 'templates' folder.
* `-o` or `--output` Set the name of the exported PDF file.
* `-p` or `--outputpath` Set the exported directory. 

---

#### 2.Custom template

The template consists of two parts. It consists of a Markdown file with variables and a JSON file that records variable information (both file name prefixes must be the same, such as `aaa.md` and `aaa.json`).

The variables in the Markdown file are in the following format

``` txt
{{ example }} //Please note the space.
```

The JSON file is in the following format

``` txt
[
    {
        "name":"example", //Variable name
        "message":"Please input example", //Input tips
        "type":"string", //Variable type
        "default":"" //Variable default
    },
    {
        "name":"example2",
        "message":"Please input example2",
        "type":"editor", // If the variable is multiple lines, it is recommended to use the editor to call the system editor.
        "default":""
    }
]
```

---

Looking forward to your more rigorous DMCA template, welcome to PR and issue.

This generator is not limited to standard DMCA requests generation and can be used as a simple document generator.

License MIT