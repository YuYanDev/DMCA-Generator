# DMCA生成器

一个用于生成DMCA请求的生成器。

---

#### 1.安装和使用

``` bash
git clone https://github.com/YuYanDev/DMCA-Generator.git
cd DMCA-Generator
npm install
node index.js -t default -o DMCA
```

或者

``` bash
npm install DMCA-Generator -g
DMCA-Generator -t default -o DMCA -p '~/'
```

命令参数:

* `-t` or `--template`设定模板。所有的模板存放于 `templates` 文件夹。
* `-o` or `--output` 设定导出的PDF文件名。
* `-p` or `--outputpath` 设定导出的目录 (如果您使用的是第二种安装方式，建议设定导出路径为 `'~/'`)。

---

#### 2.自定义模板

模板由两部分组成，由一个带有变量的markdown文件和一个记录变量信息的JSON文件组成（两者文件名前缀须一致，如`aaa.md`和`aaa.json`）。

Markdown文件中的变量采用如下格式

``` txt
{{ example }} //注意空格
```

json文件采用如下格式

``` txt
[
    {
        "name":"example", //变量名称
        "message":"Please input example", //输入提示
        "type":"string", //变量类型
        "default":"" //变量默认值
    },
    {
        "name":"example2",
        "message":"Please input example2",
        "type":"editor", // 多行变量建议使用editor调用系统编辑器
        "default":""
    }
]
```

---

期待您更多更严谨的DMCA模板，欢迎pr及issue。

本生成器不局限于标准DMCA请求生成，可以当做一个简单的文档生成器。
可用于生成作业报告，律师函，恶搞某经典DMCA文档等，玩得开心:)

License MIT