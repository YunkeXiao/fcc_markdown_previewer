const HEADER = {
    h1: "#",
    h2: "##",
    h3: "###",
    h4: "####",
    h5: "#####",
    h6: "######",
};

const EMPHASIS = {
    italic: ['*', '_'],
    bold: ['**', '__'],
    strike: ['~~'],
    stack: []
};

const LIST = {
    unordered: ['⋅⋅*', '⋅⋅-', '⋅⋅+'],
    lineBreak: ['⋅⋅'],
    indentedText: ['⋅⋅⋅']
};

const LINK = {
    startText: '[',
    endText: ']',
    startLink: '(',
    endLink: ')',
    stack: []
};

const IMAGE = {
    start: '!',
    startText: '[',
    endText: ']',
    startLink: '(',
    endLink: ')',
    stack: []
};

const CODE = {
    backTick: '`',
    block: '```',
    stack: []
};

export { HEADER, EMPHASIS, LIST, LINK, IMAGE, CODE };