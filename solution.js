
function getSum(a, b) {
    if (a === b) {
        return a
    } else {
        const step = a > b ? -1 : 1
        let res = 0
        for (let i = a; i !== b + step; i += step) {
            res += i
            console.log(res)
        }
        return res
    }
    //first sort
    // list the numbers betwn and sum them
    //sum the array
    //Good luck!
}

console.log(getSum(5, 2))

console.log(getSum(2, 5))
console.log(getSum(2, -1))
console.log(getSum(2, 2))


function toCamelCase(str) {
    const joinStr = str.replace(/[-_]/g, ' ').split(' ')
    let res
    const firstStr = joinStr.shift()

    console.log(joinStr)
    res = joinStr.map(val =>
        val.charAt(0).toUpperCase() + val.slice(1)
    );
    res.unshift(firstStr)
    res = res.join('')

    console.log(res)
    return res

}

console.log(toCamelCase('the-stealth_warrior'))

function validatePIN(pin) {
    console.log(pin.length)
    const validatePin = /^\d{4}$|^\d{6}$/
    console.log(validatePin.test(pin))
    return validatePin.test(pin)
}

console.log(validatePIN('1234'))

function accum(str) {
    let res = `${str.charAt(0).toUpperCase()}`;
    console.log(res)
    for (let i = 1; i < str.length; i++) {
        let duplicate = str.charAt(i).repeat(i + 1)
        res = `${res}-${duplicate.charAt(0).toUpperCase() + duplicate.slice(1)}`
    }
    return res

}




console.log(accum('ZpglnRxqenU'))

function findShort(s) {
    console.log(s)
    s = s.split(' ')
    let res = s.map((val, i) => val.length)
    let min = Math.min(...res)
    console.log(s)
    console.log(res)
    return min

}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

function arrayDiff(a, b) {

    b.forEach((itemDiff) => {
        a = a.filter((item => item !== itemDiff))
        console.log(a)

    })
    return a


}

console.log(arrayDiff([], [1, 2]))


function digitalRoot(n) {
    let dir = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']
    let newDir = dir.map((val, arr) => val.length)
    console.log(newDir)
    while (n >= 10) {
        let result = 0
        n.toString().split('').forEach((val) => {
            result += parseInt(val)
        })
        n = result
    }
    console.log(n)
    return n
    // ...
}

console.log(digitalRoot(313357))

function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }
    let ns = 0
    let ew = 0


    walk.forEach((block) => {
        if (block === 'n') ns++
        if (block === 's') ns--
        if (block === 'w') ew++
        if (block === 'e') ew--
    })

    return ns === 0 && ew === 0
    //insert brilliant code here

}



console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))

function bouncingBall(h, bounce, window) {
    // your code here
    const isBounce = 0 < bounce && bounce < 1
    const isH = h > 0
    const isWindow = window < h

    if (isBounce && isH && isWindow) {
        let count = 1
        h = h * bounce
        while (h > window) {
            h = h * bounce
            count += 2
        }
        return count

    } else {
        return -1
    }

}

console.log(bouncingBall(30.0, 0.66, 1.5))

function high(x) {

    const AlphabetObj = new Map([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
        ['e', 5],
        ['f', 6],
        ['g', 7],
        ['h', 8],
        ['i', 9],
        ['j', 10],
        ['k', 11],
        ['l', 12],
        ['m', 13],
        ['n', 14],
        ['o', 15],
        ['p', 16],
        ['q', 17],
        ['r', 18],
        ['s', 19],
        ['t', 20],
        ['u', 21],
        ['v', 22],
        ['w', 23],
        ['x', 24],
        ['y', 25],
        ['z', 26]
    ])
    x = x.split(' ')

    let result = {}
    let score = 0


    x.forEach((str) => {
        console.log(str)
        for (let char of str) {
            score += AlphabetObj.get(char)

        }
        result[str] = score
        score = 0
    })
    const maxWord = Object.keys(result).reduce((a, b) => result[a] >= result[b] ? a : b)

    return maxWord

}

console.log(high('b aa'))

function humanReadable(seconds) {
    if (seconds < 0) return 'seconds must be a postive value'
    let HH = parseInt(seconds / 3600);
    let minutes = parseFloat(seconds % 3600)
    let MM = parseInt(minutes / 60)
    let SS = parseInt(minutes % 60)

    return `${HH < 10 ? `0${HH}` : HH}:${MM < 10 ? `0${MM}` : MM}:${SS < 10 ? `0${SS}` : SS}`;
}

console.log(humanReadable(359999))


function alphabetPosition(text) {
    const AlphabetObj = new Map([
        ['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5], ['f', 6], ['g', 7], ['h', 8],
        ['i', 9], ['j', 10], ['k', 11], ['l', 12], ['m', 13], ['n', 14], ['o', 15],['p', 16],
        ['q', 17], ['r', 18], ['s', 19], ['t', 20], ['u', 21], ['v', 22], ['w', 23],['x', 24],
        ['y', 25], ['z', 26]
    ])
    let textArr = text.replace(/\s+/g, '').toLowerCase().split('')
    console.log(textArr)
    let result = textArr.map((char) => char = AlphabetObj.get(char) ? AlphabetObj.get(char) : '')

    result = result.filter((val) => val != '')


    return result.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))